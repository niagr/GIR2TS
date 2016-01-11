'use strict'

namespace GIR2TS {

    let js_reserved_words = `
        abstract else instanceof super boolean enum int switch break export
        arguments
        eval
        interface
        constructor
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
        (error: Error, result: ParseGIRResult) : void;
    }

    interface NodeAttributes {
        name: string;
    }


    interface ParameterAttributes extends NodeAttributes {
        direction?: string;
    }

    interface MemberAttributes extends NodeAttributes {
        value: number;
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

    interface Parameter {
        type: string;
        name: string;
    }

    interface FunctionInfo {
        name: string;
        return_type: string;
        params : Parameter[];
    }

    interface MemberNode extends Node {
        $: MemberAttributes;
    }

    interface EnumNode extends Node {
        member: MemberNode[];
    }

    interface FieldNode extends ParameterNode {
        "callback"?: FunctionNode[];
    }

    interface RecordNode extends Node {
        "field": FieldNode[];
        "method": FunctionNode[];
    }

    interface ClassNode extends Node {
        $: ClassAttributes;
        "implements": Node[];
        "constructor": FunctionNode[];
        "function": FunctionNode[];
        //"field": NodeWithType[];
        "glib-signal": Node[];
        "method": FunctionNode[];
        "virtual-method": FunctionNode[];
        "property": ParameterNode[];
    }

    interface InterfaceNode extends Node {
        "method": FunctionNode[];
        "virtual-method": FunctionNode[];
        "property": ParameterNode[];
    }

    export interface NamespaceNode extends Node {
        "class": ClassNode[];
        "record": RecordNode[];
        "interface": InterfaceNode[];
        "enumeration": EnumNode[];
        "bitfield": EnumNode[];
        "callback": FunctionNode[];
        "function": FunctionNode[];
        "union": Node[];
        "alias": ParameterNode[];
    }


    function convertToJSType (native_type: string): string {
        switch (native_type) {
            case 'guint':
            case 'guint8':
            case 'guint16':
            case 'guint32':
            case 'guint64':
            case 'gint':
            case 'gint8':
            case 'gint16':
            case 'gint32':
            case 'gint64':
            case 'glong':
            case 'gulong':
            case 'gshort':
            case 'gushort':
            case 'guint':
            case 'gfloat':
            case 'gufloat':
            case 'gdouble':
            case 'gudouble':
            case 'gsize':
            case 'gssize':
                return 'number';
            case 'utf8':
            case 'gchar':
            case 'gunichar':
            case 'filename':
                return 'string';
            case 'gboolean':
                return 'boolean';
            case 'none':
                return 'void';
            case 'GType':
                return 'GObject.Type';
            case 'gpointer':
                return 'any';
            case 'va_list':
                return 'any[]';
            default:
                return native_type;
        }
    }

    function getTypeFromParameterNode (param_node: ParameterNode): [string, boolean] {
        let type: string = null;
        let is_primitive = false;
        if (param_node.type) {
            type = convertToJSType(param_node.type[0].$.name);
            is_primitive = (type !== param_node.type[0].$.name);
        } else if (param_node.array) {
            type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
            is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
        } else {
            return ['', false];
        }
        return [type, is_primitive];
    }


    export function renderProperty (prop_node: ParameterNode, include_access_modifier: boolean = true) : string {
        let prop_name = prop_node.$.name;
        if (prop_name === 'constructor') {
            prop_name += '_'; // Append an underscore.
        }
        return (include_access_modifier ? 'public ' : '') + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node)[0] + ';';
    }


    function getFunctionInfo (func_node: FunctionNode) : FunctionInfo {
        var func_name = func_node.$.name;
        var return_type = getTypeFromParameterNode(func_node['return-value'][0])[0];
        var params: Parameter[] = [];
        //var has_params = "parameter" in method_node.parameters[0];

        if (func_node.parameters && func_node.parameters[0].parameter) {
            for (var param_node of func_node.parameters[0].parameter) {
                if (param_node.$.name === '...') continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                    param_name = '_' + param_name;
                }
                let [type, is_primitive] = getTypeFromParameterNode(param_node);
                params.push({
                    name: param_name,
                    type: type
                });
            }
        }

        return {
            name: func_name,
            return_type: return_type,
            params: params
        }
    }

    function renderFreeFunction (func_node: FunctionNode, exclude_list: string[] = null): string {
        let {name, return_type, params} = getFunctionInfo(func_node);
        let str = `function ${name} (${params.map((p) => `${p.name}: ${p.type}`).join(', ')}): ${return_type};`;
        if (exclude_list && exclude_list.indexOf(name) !== -1) {
            str = '// ' + str;
        }
        return str;
    }


    /*
        Produces the TS string declaring the method represented by method_node.
    */
    export function renderMethod (
            method_node: FunctionNode,
            include_access_modifier: boolean = true,
            include_name: boolean = true,
            forExternalInterfaceInNamespace: string = null
    ): string {

        // interface Parameter {
        //     type: string;
        //     name: string;
        // }

        var method_name = method_node.$.name;
        var return_type = getTypeFromParameterNode(method_node['return-value'][0])[0];
        var params: Parameter[] = [];
        //var has_params = "parameter" in method_node.parameters[0];

        console.log('rendering ' + method_name);

        if (method_node.parameters && "parameter" in method_node.parameters[0]) {
            for (var param_node of method_node.parameters[0].parameter) {
                if (param_node.$.name === '...') continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                    param_name = '_' + param_name;
                }
                let [type, is_primitive] = getTypeFromParameterNode(param_node);
                if (!is_primitive && forExternalInterfaceInNamespace) {
                    type = forExternalInterfaceInNamespace + '.' + type;
                }
                params.push({
                    name: param_name,
                    type: type
                });
            }
        }

        //var str = (include_access_modifier ? 'public ' : '') + method_name + ' (';
        let str = '';
        if (include_access_modifier) {
            str += 'public ';
        }
        if (include_name) {
            str += method_name + ' ';
        }
        str += '(';

        if (params.length > 0) {
            for (var param of params) {
                str += param.name + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }

        str += ') : ' + return_type + ';';

        return str;
    }


    export function renderCallback (cb_node: FunctionNode): string {
        const cb_name = cb_node.$.name;
        let body = `interface ${cb_name} {\n\t${renderMethod(cb_node, false, false)}\n}`;
        return body;
    }


    function arrayMinus<T> (first: T[], second: T[], equals: {(a: T, b: T) : boolean}) : T[] {
        return first.filter((a) => {
            for (let b of second) {
                if (equals(a, b)) {
                    return false;
                }
            }
            return true;
        });
    }


    export function removeDuplicates<T> (arr: T[], equals: {(a: T, b: T): boolean}) : T[] {
        const unique_arr: T[] = [];
        arr.forEach((elem) => {
            let dup = false;
            for (let e of unique_arr) {
                if (equals(e, elem)) {
                    dup = true;
                    break;
                }
            }
            if (!dup) unique_arr.push(elem);
        });
        return unique_arr;
    }


    export function searchNodeByName<N extends Node> (nodes: N[], name: string) : N {
        for (let c of nodes) {
            if (c.$.name === name) {
                return c;
            }
        }
        return null;
    }

    function getAllMethods (object: {method: FunctionNode[]}) : FunctionNode[] {
        let methods: FunctionNode[] = [];
        if (object.method) {
            methods = methods.concat(object.method);
        }
        if (object['virtual-method']) {
            methods = methods.concat(object['virtual-method']);
        }
        return methods;
    }

    function getProperties (object: {property: ParameterNode[]}) : ParameterNode[] {
        let props: ParameterNode[] = [];
        if (object.property) {
            props = props.concat(object.property);
        }
        return props;
    }

    function getFields (object: {field: ParameterNode[]}) : ParameterNode[] {
        let obj: {property: ParameterNode[]} = {property:null};
        if (object.field) {
            obj.property = object.field;
            return getProperties(obj);
        }
        return [];
    }


    export function renderEnumeration (enum_node: EnumNode) : string {
        let body = '';
        for (let mem of enum_node.member) {
            let mem_name = mem.$.name;
            if (parseInt(mem_name)) {
                mem_name = '_' + mem_name;
            }
            body += `\t${mem_name} = ${mem.$.value},\n`;
        }
        body = body.slice(0, -2) + '\n'; // remove last comma
        return `enum ${enum_node.$.name} {\n${body}}`;
    }


    function renderCallbackField (cb_node: FunctionNode) : string {
        let cb_name = cb_node.$.name;
        if (cb_name === 'constructor') {
            cb_name += '_'; // Append an underscore.
        }
        return `${cb_name} : {${renderMethod(cb_node, false, false)}};`
    }


    export function renderNodeAsBlankInterface (node: Node) {
        return `interface ${node.$.name} {}`;
    }


    export function renderAlias (alias_node: ParameterNode) : string {
        return `type ${alias_node.$.name} = ${getTypeFromParameterNode(alias_node)[0]};`
    }


    export function renderRecordAsClass (rec_node: RecordNode): string {
        let props: ParameterNode[] = [];
        let callback_fields: FunctionNode[] = [];
        let methods = getAllMethods(rec_node);
        if (rec_node.field)
            for (let f of rec_node.field) {
                if (f.type || f.array) {
                    props.push(f);
                } else if (f.callback) {
                    callback_fields.push(f.callback[0]);
                }
            }
        let body = '';
        for (let f of props) {
            body += '\t' + renderProperty(f) + '\n';
        }
        body += '\n';
        for (let c of callback_fields) {
            body += '\t' + renderCallbackField(c) + '\n';
        }
        body += '\n';
        for (let m of methods) {
            body += '\t' + renderMethod(m) + '\n';
        }
        return `class ${rec_node.$.name} {\n${body}}`;
    }

    /*
        Render class as a TS interface with construct signature.
        Saves us a lot of hassle with generating stud declarations for implemented
        methods.
        @exclude_list : An array of member names to exclude.
    */
    export function renderClassAsInterface (class_node: ClassNode, exclude: string|string[]) : string {

        const class_name = class_node.$.name;
        const ifaces: string[] = [];
        const methods: FunctionNode[] = [];
        const ctors: FunctionNode[] = [];
        const static_funcs: FunctionNode[] =[];
        let exclude_method_list : string[] = [];
        let exclude_self = false;
        let exclude_all_members = false;

        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        } else if (exclude === 'all'){
            exclude_all_members = true;
        } else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }

        if (class_node.$.parent) {
            ifaces.push(class_node.$.parent);
        }
        if (class_node.implements) {
            for (let iface of class_node.implements) {
                ifaces.push(iface.$.name);
            }
        }

        if (class_node.method) {
            for (let m of class_node.method) {
                methods.push(m);
            }
        }

        // console.log('rendering ' + class_node.$.name);
        if (class_node.hasOwnProperty('constructor')) {
            // console.log(class_node.constructor);
            for (let c of class_node.constructor) {
                if (typeof c !== 'function')
                    ctors.push(c);
            }
        }

        if (class_node.function) {
            for (let f of class_node.function) {
                static_funcs.push(f);
            }
        }

        let header = '';

        header += `${exclude_self?'// ':''}interface ${class_name}`;
        if (ifaces.length > 0) {
            header += ` extends ${ifaces.join(', ')}`;
        }

        const method_str_list: string[] = methods.map((m) => {
            let method_str = renderMethod(m, false);

            // if method is present in exclude_list
            if ((exclude_method_list.length > 0 && exclude.indexOf(m.$.name) !== -1) || exclude_all_members) {
                method_str = '// ' + method_str;
            }
            return method_str;
        });

        let body = method_str_list.join('\n\t');

        body = ` {\n\t` +
            `${body}\n` +
            `${exclude_self?'// ':''}}\n`;

        let iface_str = header + body;

        const ctor_str_list: string[] = ctors.map((c) => {
            // console.log(c);
            return renderMethod(c, false);
        });
        const ctors_body = ctor_str_list.join('\n\t');

        const static_func_str_list: string[] = static_funcs.map((sf) => {
            return renderMethod(sf, false);
        });
        const static_func_body = static_func_str_list.join('\n\t');

        const static_side = '\n' +
            `var ${class_name}: {\n` +
            `\t${ctors_body}\n` +
            `\t${static_func_body}\n` +
            `}\n`;

        return iface_str + static_side;

    }


    export function renderClassWithInterfaceMembers (class_node: ClassNode, ns_list: NamespaceNode[] = [], my_ns: NamespaceNode) : string {

        let methods: FunctionNode[] = [];
        let props: ParameterNode[] = [];
        let externIfaceMethods: {ns_name: string; method: FunctionNode}[] = [];

        // Add interface properties and methods
        if (class_node.implements) {
            for (let iface of class_node.implements) {
                let iface_name = iface.$.name;
                let iface_list: InterfaceNode[] = [];
                let iface_ns: string = '';
                if (iface_name.indexOf('.') !== -1) { // if it cotains a period, idicating another namespace
                    iface_ns = iface_name.split('.')[0];
                    iface_name = iface_name.split('.')[1];
                    let ns_node = searchNodeByName(ns_list, iface_ns);
                    if (ns_node && ns_node.interface) {
                        iface_list = ns_node.interface;
                    }
                } else {
                    iface_list = my_ns.interface;
                }
                let i = searchNodeByName(iface_list, iface_name);
                if (i) {
                    //props = props.concat(getProperties(i));
                    externIfaceMethods = externIfaceMethods.concat(getAllMethods(i).map((m) => {
                        return {
                            ns_name: iface_ns,
                            method: m
                        }
                    }));
                }
            }
        }



        // Add class methods
        methods = methods.concat(getAllMethods(class_node));
        const unique_methods = removeDuplicates(methods, (a, b) => a.$.name === b.$.name);

        // Add class properties
        //props = props.concat(getProperties(class_node));

        // Remove duplicate property names by name
        //props = removeDuplicates(props, (p1, p2) => p1.$.name === p2.$.name);

        // Remove properties with the same transformed name as a method name
        // if (unique_methods.length > 0) {
        //     props = arrayMinus<Node>(props, unique_methods, (a, b) => a.$.name.replace(/-/g, '_') === b.$.name);
        // }

        /*
            GJS allows properties to shadow inherited methods. Either Typescript
            does not allow this or I cannot figure out how. Anywho, as a temporary
            workaroud we search parent class heirarchy ad remove the properties that clash.
        */
        // function deletePropsCollidingWithInheritedMethods (class_node: ClassNode, props: ParameterNode[]): ParameterNode[] {
        //     return [];
        // }
        //
        //
        const unique_props = props;

        let str = '';
        str += 'class ' + class_node.$.name;
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
        if (unique_props.length > 0) {
            str += '\n';
            for (let prop_str of unique_props.map((prop_node) => {return renderProperty(prop_node);})) {
                str += `\t${prop_str}\n`;
            }
        }
        //console.log("methods:\n" + unique_methods);
        if (unique_methods.length > 0) {
            str += '\n';
            for (let method_str of unique_methods.map((func_node) => {return renderMethod(func_node);})) {
                str += `\t${method_str}\n`;
            }
        }

        str += '\n';
        str += '}\n';
        return str;

    }


    export function renderInterface (iface_node: InterfaceNode, exclude: string|string[]) : string {

        let exclude_method_list : string[] = [];
        let exclude_self = false;
        let exclude_all_members = false;

        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        } else if (exclude === 'all'){
            exclude_all_members = true;
        } else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }

        let body = '\n\n';
        const methods = removeDuplicates(getAllMethods(iface_node), (a,b) => a.$.name === b.$.name);
        for (let m of methods) {
            body += '\t' + renderMethod(m, false) + '\n';
        }

        return `interface ${iface_node.$.name} {${body}}`;
    }


    export interface ExcludeDesc {
        "exclude": {
            "class": {
                [klass: string]: string|string[];
            },
            "function": string[]
        }
    }


    export function renderNamespace (ns_node: NamespaceNode, exclude?: ExcludeDesc) : string {
        let body = '';
        let class_nodes: ClassNode[] = [];
        if (ns_node.class)
            class_nodes = class_nodes.concat(ns_node.class);
        for (let class_node of class_nodes) {
            let class_name = class_node.$.name;
            // if (exclude && class_name in exclude.exclude.class)
            body += '\n\n' + GIR2TS.renderClassAsInterface(class_node, exclude?exclude.exclude.class[class_name]:undefined) + '\n\n';
        }
        if (ns_node.record)
            for (let rec_node of ns_node.record) {
                body += '\n\n' + GIR2TS.renderRecordAsClass(rec_node) + '\n\n';
            }
        if (ns_node.interface)
            for (let iface_node of ns_node.interface) {
                body += '\n\n' + GIR2TS.renderClassAsInterface(iface_node as ClassNode, exclude?exclude.exclude.class[iface_node.$.name]:undefined) + '\n\n';
            }
        if (ns_node.enumeration)
            for (let enum_node of ns_node.enumeration) {
                body += '\n\n' + GIR2TS.renderEnumeration(enum_node) + '\n\n';
            }
        if (ns_node.bitfield)
            for (let bf_node of ns_node.bitfield) {
                body += '\n\n' + GIR2TS.renderEnumeration(bf_node) + '\n\n';
            }
        if (ns_node.callback)
            for (let cb_node of ns_node.callback) {
                body += '\n\n' + GIR2TS.renderCallback(cb_node) + '\n\n';
            }
        if (ns_node.union)
            for (let union_node of ns_node.union) {
                body += '\n\n' + GIR2TS.renderNodeAsBlankInterface(union_node) + '\n\n';
            }
        if (ns_node.alias)
            for (let alias_node of ns_node.alias) {
                body += '\n\n' + GIR2TS.renderAlias(alias_node) + '\n\n';
            }
        if (ns_node.function)
            for (let func_node of ns_node.function) {
                let exc = exclude && exclude.exclude.function? exclude.exclude.function:undefined;
                body += '\n\n' + renderFreeFunction(func_node, exc) + '\n\n';
            }
        return `declare namespace imports.gi.${ns_node.$.name} {${body}}`;
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
        fs.readFile(file_path, function(err, data) {
            if (err) {
                console.log("Error reading file.");
                return;
            }
            parser.parseString(data, cb);
        });
    }


    export interface GeneratorResult {
        gir_name: string;
        typing_str: string;
    }


    export class Generator {

        private lib_list: {lib_name: string; xml_str: string}[];
        private ns_list: {lib_name: string; ns_node: NamespaceNode}[] = [];
        private exclude_json_map: {[class_name: string]:any} = {};

        constructor (gir_xml_list: {lib_name: string; xml_str: string}[], exclude_json_map: {[class_name: string]:any} = {}) {
            this.lib_list = gir_xml_list;
            this.exclude_json_map = exclude_json_map;
        }



        public generateTypings(cb: (res: GeneratorResult[]) => any) {
            let self = this;
            let count = 0;

            function cb_counter() {
                if (++count === self.lib_list.length)
                    proceed();
            }

            const xml2js = require('xml2js');
            const parser = new xml2js.Parser();

            //let ns_list: NamespaceNode[] = [];
            for (let lib of this.lib_list) {
                parser.parseString(lib.xml_str, (err: Error, res: ParseGIRResult) => {
                    // console.log(res.repository.namespace[0].class[4].constructor)
                    this.ns_list.push({
                        lib_name: lib.lib_name,
                        ns_node: res.repository.namespace[0]
                    });
                    cb_counter();
                });
            }
            function proceed() {
                const res: GeneratorResult[] = [];
                for (let ns of self.ns_list) {
                    const ns_name = ns.ns_node.$.name;
                    const typing_str = renderNamespace(ns.ns_node, self.exclude_json_map[ns.lib_name]);
                    res.push({
                        gir_name: ns.lib_name,
                        typing_str: typing_str
                    });
                }
                cb(res);
            }
        }

    }

}

import fs = require('fs');
import path = require('path');

function main () {
    console.log(__dirname);
    var argv = require('minimist')(process.argv.slice(2));

    let gir_files: string[] = [];
    let outdir = __dirname;
    let exclude_json_map: {[class_name: string]:any} = {};
    if (argv.outdir) {
        console.log("Output typings directory: " + argv.outdir);
        outdir = path.join(__dirname, argv.outdir);
        if (fs.statSync(outdir).isDirectory()) {
        } else {
            throw new Error("out dir specified is not a directory.");
        }
    } else {
        throw new Error("No out dir specified.");
    }
    if (argv.overridesdir) {
        console.log("Excludes directory: " + argv.overridesdir);
        let dir = path.join(__dirname , argv.overridesdir);
        let json_files: string[] = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            exclude_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.girdir) {
        console.log("GIR directory: " + argv.girdir);
        let dir = path.join(__dirname , argv.girdir);
        if (fs.statSync(dir).isDirectory()) {
            gir_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
    } else {
        // gir_files.push(path.join(__dirname, argv._[0]));
        gir_files = gir_files.concat(argv._.map((arg) => path.join(__dirname, arg)));
    }
    const gir_xml_list: {lib_name: string; xml_str: string}[] = [];
    for (let file of gir_files) {
        const gir_name = path.basename(file, '.gir');
        let data = '';
        try {
            data = fs.readFileSync(file, 'utf8');
        } catch (e) {
            console.log(e.message);
            return;
        }
        gir_xml_list.push({
            lib_name: gir_name,
            xml_str: data

        });
    }
    const gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map);
    gen.generateTypings((res) => {
        for (let lib of res) {
            let outfile = path.join(outdir, lib.gir_name + '.d.ts');
            try {
                fs.writeFileSync(outfile, lib.typing_str);
            } catch (err) {
                console.log(err.message);
                return;
            }
            console.log("wrote to " + outfile);
        }
    });
}

main();
exports.lib = GIR2TS;
