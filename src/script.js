var GIRToTS;
(function (GIRToTS) {
    var js_reserved_words = "\n        abstract\n        else\n        instanceof\n        super\n        boolean\n        enum\n        int\n        switch\n        break\n        export\n        interface\n        synchronized\n        byte\n        extends\n        let\n        this\n        case\n        false\n        long\n        throw\n        catch\n        final\n        native\n        throws\n        char\n        finally\n        new\n        transient\n        class\n        float\n        null\n        true\n        const\n        for\n        package\n        try\n        continue\n        function\n        private\n        typeof\n        debugger\n        goto\n        protected\n        var\n        default\n        if\n        public\n        void\n        delete\n        implements\n        return\n        volatile\n        do\n        import\n        short\n        while\n        double\n        in\n        static\n        with\n    ";
    function convertToJSType(native_type) {
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
    function getTypeFromParameterNode(param_node) {
        if (param_node.type) {
            return convertToJSType(param_node.type[0].$.name);
        }
        else if (param_node.array) {
            return convertToJSType(param_node.array[0].type[0].$.name + '[]');
        }
    }
    function renderProperty(prop_node) {
        return 'public ' + prop_node.$.name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node) + ';';
    }
    GIRToTS.renderProperty = renderProperty;
    function renderMethod(method_node) {
        var method_name = method_node.$.name;
        var return_type = getTypeFromParameterNode(method_node['return-value'][0]);
        var params = [];
        var has_params = "parameter" in method_node.parameters[0];
        if ("parameter" in method_node.parameters[0]) {
            for (var _i = 0, _a = method_node.parameters[0].parameter; _i < _a.length; _i++) {
                var param_node = _a[_i];
                if (param_node.$.name === '...')
                    continue;
                var param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
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
            for (var _b = 0, params_1 = params; _b < params_1.length; _b++) {
                var param = params_1[_b];
                str += param.name + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }
        str += ') : ' + return_type + ';';
        return str;
    }
    GIRToTS.renderMethod = renderMethod;
    function renderClass(class_node) {
        var class_prop_nodes = [];
        if (class_node.property) {
            if (class_node.method) {
                for (var _i = 0, _a = class_node.property; _i < _a.length; _i++) {
                    var prop_node = _a[_i];
                    var dup = false;
                    for (var _b = 0, _c = class_node.method; _b < _c.length; _b++) {
                        var method_node = _c[_b];
                        if (method_node.$.name === prop_node.$.name.replace(/-/g, '_')) {
                            dup = true;
                            break;
                        }
                    }
                    if (!dup)
                        class_prop_nodes.push(prop_node);
                }
            }
            else {
                class_prop_nodes = class_node.property;
            }
        }
        var str = '';
        str += 'declare class ' + class_node.$.name;
        if (class_node.$.parent) {
            str += " extends " + class_node.$.parent;
        }
        if (class_node.implements) {
            str += ' implements ';
            for (var _d = 0, _e = class_node.implements; _d < _e.length; _d++) {
                var iface = _e[_d];
                str += iface.$.name + ', ';
            }
            str = str.slice(0, -2);
        }
        str += ' {\n';
        if (class_prop_nodes.length > 0) {
            str += '\n';
            for (var _f = 0, _g = class_prop_nodes.map(renderProperty); _f < _g.length; _f++) {
                var prop_str = _g[_f];
                str += "\t" + prop_str + "\n";
            }
        }
        if (class_node.method) {
            str += '\n';
            for (var _h = 0, _j = class_node.method.map(renderMethod); _h < _j.length; _h++) {
                var method_str = _j[_h];
                str += "\t" + method_str + "\n";
            }
        }
        str += '\n';
        str += '}\n';
        return str;
    }
    GIRToTS.renderClass = renderClass;
    function parseGIR(file_path, cb) {
        var fs = require('fs');
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        fs.readFile(__dirname + file_path, function (err, data) {
            if (err) {
                console.log("Error reading file.");
                return;
            }
            parser.parseString(data, cb);
        });
    }
    GIRToTS.parseGIR = parseGIR;
})(GIRToTS || (GIRToTS = {}));
function main() {
    var file_path = '/../gir/Gtk-3.0.gir';
    GIRToTS.parseGIR(file_path, function (err, res) {
        exports.res = res;
        var output = '';
        for (var _i = 0, _a = res.repository.namespace[0].class; _i < _a.length; _i++) {
            var class_node = _a[_i];
            output += GIRToTS.renderClass(class_node) + '\n\n';
        }
        var fs = require('fs');
        var out_file_name = 'output.d.ts';
        fs.writeFile(out_file_name, output, function (err) {
            if (err) {
                console.error('Could not write output file.');
            }
            else {
                console.log('Wrote to ' + out_file_name);
            }
        });
    });
}
main();
exports.lib = GIRToTS;
