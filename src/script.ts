namespace GIR2TS {

    let js_reserved_words = `
        abstract
        else
        instanceof
        super
        boolean
        enum
        int
        switch
        break
        export
        interface
        synchronized
        byte
        extends
        let
        this
        case
        false
        long
        throw
        catch
        final
        native
        throws
        char
        finally
        new
        transient
        class
        float
        null
        true
        const
        for
        package
        try
        continue
        function
        private
        typeof
        debugger
        goto
        protected
        var
        default
        if
        public
        void
        delete
        implements
        return
        volatile
        do
        import
        short
        while
        double
        in
        static
        with
    `

    export interface parseGIRCallback {
        (error: Error, result: ParseGIRResult): any;
    }

    interface NodeAttributes {
        name: string;
    }


    interface ParameterAttributes extends NodeAttributes {
        direction?: string;
    }

    interface ClassAttributes extends NodeAttributes {
        parent?: string;
    }

    interface Node {
        "$": NodeAttributes
    }

    interface ParameterNode extends Node {
        $: ParameterAttributes;
        type?: Node[];
        array?: NodeWithType[];
    }

    interface NodeWithType extends Node {
        type: Node[];
    }

    interface ParametersNode extends Node {
        parameter: ParameterNode[];
    }

    interface FunctionNode extends Node {
        "return-value": ParameterNode[];
        parameters: ParametersNode[];
    }

    interface ClassNode extends Node {
        $: ClassAttributes;
        "implements": Node[];
        "constructor": Node[];
        "function": FunctionNode[];
        "field": NodeWithType[];
        "glib-signal": Node[];
        "method": FunctionNode[];
        "virtual-method": FunctionNode[];
        "property": ParameterNode[];
    }

    export interface NamespaceNode extends Node {
        "class": ClassNode[];
    }


    function convertToJSType (native_type: string): string {
        switch (native_type) {
            case 'utf8':
                return 'string';
            case 'utf8[]':
                return 'string[]';
            case 'gint':
                return 'number';
            case 'gint[]':
                return 'number[]';
            case 'guint':
                return 'number';
            case 'guint[]':
                return 'number[]';
            case 'none':
                return 'void';
            case 'gboolean':
                return 'boolean';
            default:
                return native_type;
        }
    }

    function getTypeFromParameterNode (param_node: ParameterNode): string {
        if (param_node.type) {
            return convertToJSType(param_node.type[0].$.name);
        } else if (param_node.array) {
            return convertToJSType(param_node.array[0].type[0].$.name + '[]');
        }
    }


    export function renderProperty (prop_node: ParameterNode) : string {
        return 'public ' + prop_node.$.name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node) + ';';
    }


    /*
        Produces the TS string declaring the method represented by method_node.
    */
    export function renderMethod (method_node: FunctionNode): string {

        interface Parameter {
            type: string;
            name: string;
        }



        var method_name = method_node.$.name;
        var return_type = getTypeFromParameterNode(method_node['return-value'][0]);
        var params: Parameter[] = [];
        var has_params = "parameter" in method_node.parameters[0];

        if ("parameter" in method_node.parameters[0]) {
            for (var param_node of method_node.parameters[0].parameter) {
                if (param_node.$.name === '...') continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                    param_name = '_' + param_name;
                }
                params.push({
                    name: param_name,
                    type: getTypeFromParameterNode(param_node)
                });
            }
        }

        var str = 'public ' + method_name + ' (';

        if (params.length > 0) {
            for (var param of params) {
                str += param.name + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }

        str += ') : ' + return_type + ';';

        return str;
    }

    export function renderClass (class_node: ClassNode): string {
        /*
            some property names are exactly the same as method names when mapped
            by replacing '-' with '_' in the property name. To avoid this
            collision we choose to only declare the methods in those cases.
        */
        let class_prop_nodes: ParameterNode[] = [];
        if (class_node.property) {
            if (class_node.method) {
                for (let prop_node of class_node.property) {
                    let dup = false;
                    for (let method_node of class_node.method) {
                        if (method_node.$.name === prop_node.$.name.replace(/-/g, '_')) {
                            dup = true;
                            break;
                        }
                    }
                    if (!dup) class_prop_nodes.push(prop_node);
                }
            } else {
                class_prop_nodes = class_node.property;
            }
        }
        let str = '';
        str += 'declare class ' + class_node.$.name;
        if (class_node.$.parent) {
            str += ` extends ${class_node.$.parent}`;
        }
        if (class_node.implements) {
            str += ' implements ';
            for (let iface of class_node.implements) {
                str += iface.$.name + ', '
            }
            str = str.slice(0, -2); // remove last comma.
        }
        str += ' {\n';
        if (class_prop_nodes.length > 0) {
            str += '\n';
            for (let prop_str of class_prop_nodes.map(renderProperty)) {
                str += `\t${prop_str}\n`;
            }
        }
        if (class_node.method) {
            str += '\n';
            for (let method_str of class_node.method.map(renderMethod)) {
                str += `\t${method_str}\n`;
            }
        }
        str += '\n';
        str += '}\n';
        return str;
    }


    export interface ParseGIRResult {
        repository: {
            "namespace": NamespaceNode[];
        }
    }

    /*
        This function parses the GIR file producing a JS object tree.
        The rest of the program renders this tree as TS declarations.
    */
    export function parseGIR (file_path: string, cb: parseGIRCallback) {
        const fs = require('fs');
        const xml2js = require('xml2js');
        const parser = new xml2js.Parser();
        fs.readFile(__dirname + file_path, function(err, data) {
            if (err) {
                console.log("Error reading file.");
                return;
            }
            parser.parseString(data, cb);
        });
    }

}



function main () {
    const file_path = '/../gir/Gtk-3.0.gir';
    GIR2TS.parseGIR(file_path, function (err, res: GIR2TS.ParseGIRResult) {
        exports.res = res;
        let output = ''
        for (let class_node of res.repository.namespace[0].class) {
            output += GIR2TS.renderClass(class_node) + '\n\n';
        }
        let fs = require('fs');
        const out_file_name = 'output.d.ts';
        fs.writeFile(out_file_name, output, function (err) {
            if (err) {
                console.error('Could not write output file.');
            } else {
                console.log('Wrote to ' + out_file_name);
            }
        })
    });
}

main();
exports.lib = GIR2TS;
