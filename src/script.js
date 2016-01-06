'use strict';
var GIR2TS;
(function (GIR2TS) {
    var js_reserved_words = "\n        abstract else instanceof super boolean enum int switch break export\n        arguments\n        eval\n        interface\n        constructor\n        synchronized\n        byte\n        extends\n        let\n        this\n        case\n        false\n        long\n        throw\n        catch\n        final\n        native\n        throws\n        char\n        finally\n        new\n        transient\n        class\n        float\n        null\n        true\n        const\n        for\n        package\n        try\n        continue\n        function\n        private\n        typeof\n        debugger\n        goto\n        protected\n        var\n        default\n        if\n        public\n        void\n        delete\n        implements\n        return\n        volatile\n        do\n        import\n        short\n        while\n        double\n        in\n        static\n        with\n    ";
    function convertToJSType(native_type) {
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
    function getTypeFromParameterNode(param_node) {
        var type = null;
        var is_primitive = false;
        if (param_node.type) {
            type = convertToJSType(param_node.type[0].$.name);
            is_primitive = (type !== param_node.type[0].$.name);
        }
        else if (param_node.array) {
            type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
            is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
        }
        else {
            return ['', false];
        }
        return [type, is_primitive];
    }
    function renderProperty(prop_node, include_access_modifier) {
        if (include_access_modifier === void 0) { include_access_modifier = true; }
        var prop_name = prop_node.$.name;
        if (prop_name === 'constructor') {
            prop_name += '_';
        }
        return (include_access_modifier ? 'public ' : '') + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node)[0] + ';';
    }
    GIR2TS.renderProperty = renderProperty;
    function getFunctionInfo(func_node) {
        var func_name = func_node.$.name;
        var return_type = getTypeFromParameterNode(func_node['return-value'][0])[0];
        var params = [];
        if (func_node.parameters && func_node.parameters[0].parameter) {
            for (var _i = 0, _a = func_node.parameters[0].parameter; _i < _a.length; _i++) {
                var param_node = _a[_i];
                if (param_node.$.name === '...')
                    continue;
                var param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                var _b = getTypeFromParameterNode(param_node), type = _b[0], is_primitive = _b[1];
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
        };
    }
    function renderFreeFunction(func_node, exclude_list) {
        if (exclude_list === void 0) { exclude_list = null; }
        var _a = getFunctionInfo(func_node), name = _a.name, return_type = _a.return_type, params = _a.params;
        var str = "function " + name + " (" + params.map(function (p) { return (p.name + ": " + p.type); }).join(', ') + "): " + return_type + ";";
        if (exclude_list && exclude_list.indexOf(name) !== -1) {
            str = '// ' + str;
        }
        return str;
    }
    function renderMethod(method_node, include_access_modifier, include_name, forExternalInterfaceInNamespace) {
        if (include_access_modifier === void 0) { include_access_modifier = true; }
        if (include_name === void 0) { include_name = true; }
        if (forExternalInterfaceInNamespace === void 0) { forExternalInterfaceInNamespace = null; }
        var method_name = method_node.$.name;
        var return_type = getTypeFromParameterNode(method_node['return-value'][0])[0];
        var params = [];
        if (method_node.parameters && "parameter" in method_node.parameters[0]) {
            for (var _i = 0, _a = method_node.parameters[0].parameter; _i < _a.length; _i++) {
                var param_node = _a[_i];
                if (param_node.$.name === '...')
                    continue;
                var param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                var _b = getTypeFromParameterNode(param_node), type = _b[0], is_primitive = _b[1];
                if (!is_primitive && forExternalInterfaceInNamespace) {
                    type = forExternalInterfaceInNamespace + '.' + type;
                }
                params.push({
                    name: param_name,
                    type: type
                });
            }
        }
        var str = '';
        if (include_access_modifier) {
            str += 'public ';
        }
        if (include_name) {
            str += method_name + ' ';
        }
        str += '(';
        if (params.length > 0) {
            for (var _c = 0; _c < params.length; _c++) {
                var param = params[_c];
                str += param.name + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }
        str += ') : ' + return_type + ';';
        return str;
    }
    GIR2TS.renderMethod = renderMethod;
    function renderCallback(cb_node) {
        var cb_name = cb_node.$.name;
        var body = "interface " + cb_name + " {\n\t" + renderMethod(cb_node, false, false) + "\n}";
        return body;
    }
    GIR2TS.renderCallback = renderCallback;
    function arrayMinus(first, second, equals) {
        return first.filter(function (a) {
            for (var _i = 0; _i < second.length; _i++) {
                var b = second[_i];
                if (equals(a, b)) {
                    return false;
                }
            }
            return true;
        });
    }
    function removeDuplicates(arr, equals) {
        var unique_arr = [];
        arr.forEach(function (elem) {
            var dup = false;
            for (var _i = 0; _i < unique_arr.length; _i++) {
                var e = unique_arr[_i];
                if (equals(e, elem)) {
                    dup = true;
                    break;
                }
            }
            if (!dup)
                unique_arr.push(elem);
        });
        return unique_arr;
    }
    GIR2TS.removeDuplicates = removeDuplicates;
    function searchNodeByName(nodes, name) {
        for (var _i = 0; _i < nodes.length; _i++) {
            var c = nodes[_i];
            if (c.$.name === name) {
                return c;
            }
        }
        return null;
    }
    GIR2TS.searchNodeByName = searchNodeByName;
    function getAllMethods(object) {
        var methods = [];
        if (object.method) {
            methods = methods.concat(object.method);
        }
        if (object['virtual-method']) {
            methods = methods.concat(object['virtual-method']);
        }
        return methods;
    }
    function getProperties(object) {
        var props = [];
        if (object.property) {
            props = props.concat(object.property);
        }
        return props;
    }
    function getFields(object) {
        var obj = { property: null };
        if (object.field) {
            obj.property = object.field;
            return getProperties(obj);
        }
        return [];
    }
    function renderEnumeration(enum_node) {
        var body = '';
        for (var _i = 0, _a = enum_node.member; _i < _a.length; _i++) {
            var mem = _a[_i];
            var mem_name = mem.$.name;
            if (parseInt(mem_name)) {
                mem_name = '_' + mem_name;
            }
            body += "\t" + mem_name + " = " + mem.$.value + ",\n";
        }
        body = body.slice(0, -2) + '\n';
        return "enum " + enum_node.$.name + " {\n" + body + "}";
    }
    GIR2TS.renderEnumeration = renderEnumeration;
    function renderCallbackField(cb_node) {
        var cb_name = cb_node.$.name;
        if (cb_name === 'constructor') {
            cb_name += '_';
        }
        return cb_name + " : {" + renderMethod(cb_node, false, false) + "};";
    }
    function renderNodeAsBlankInterface(node) {
        return "interface " + node.$.name + " {}";
    }
    GIR2TS.renderNodeAsBlankInterface = renderNodeAsBlankInterface;
    function renderAlias(alias_node) {
        return "type " + alias_node.$.name + " = " + getTypeFromParameterNode(alias_node)[0] + ";";
    }
    GIR2TS.renderAlias = renderAlias;
    function renderRecordAsClass(rec_node) {
        var props = [];
        var callback_fields = [];
        var methods = getAllMethods(rec_node);
        if (rec_node.field)
            for (var _i = 0, _a = rec_node.field; _i < _a.length; _i++) {
                var f = _a[_i];
                if (f.type || f.array) {
                    props.push(f);
                }
                else if (f.callback) {
                    callback_fields.push(f.callback[0]);
                }
            }
        var body = '';
        for (var _b = 0; _b < props.length; _b++) {
            var f = props[_b];
            body += '\t' + renderProperty(f) + '\n';
        }
        body += '\n';
        for (var _c = 0; _c < callback_fields.length; _c++) {
            var c = callback_fields[_c];
            body += '\t' + renderCallbackField(c) + '\n';
        }
        body += '\n';
        for (var _d = 0; _d < methods.length; _d++) {
            var m = methods[_d];
            body += '\t' + renderMethod(m) + '\n';
        }
        return "class " + rec_node.$.name + " {\n" + body + "}";
    }
    GIR2TS.renderRecordAsClass = renderRecordAsClass;
    function renderClassAsInterface(class_node, exclude) {
        var class_name = class_node.$.name;
        var ifaces = [];
        var methods = [];
        var exclude_method_list = [];
        var exclude_self = false;
        var exclude_all_members = false;
        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        }
        else if (exclude === 'all') {
            exclude_all_members = true;
        }
        else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }
        if (class_node.$.parent) {
            ifaces.push(class_node.$.parent);
        }
        if (class_node.implements) {
            for (var _i = 0, _a = class_node.implements; _i < _a.length; _i++) {
                var iface = _a[_i];
                ifaces.push(iface.$.name);
            }
        }
        if (class_node.method) {
            for (var _b = 0, _c = class_node.method; _b < _c.length; _b++) {
                var m = _c[_b];
                methods.push(m);
            }
        }
        var header = '';
        header += (exclude_self ? '// ' : '') + "interface " + class_name;
        if (ifaces.length > 0) {
            header += " extends " + ifaces.join(', ');
        }
        var method_str_list = methods.map(function (m) {
            var method_str = renderMethod(m, false);
            if ((exclude_method_list.length > 0 && exclude.indexOf(m.$.name) !== -1) || exclude_all_members) {
                method_str = '// ' + method_str;
            }
            return method_str;
        });
        var body = method_str_list.join('\n\t');
        body = " {\n\t" +
            (body + "\n") +
            ((exclude_self ? '// ' : '') + "}\n");
        var iface_str = header + body;
        var static_side = '\n' +
            ("var " + class_name + ": {       \n") +
            ("   new (): " + class_name + ";  \n") +
            "}                          \n";
        return iface_str + static_side;
    }
    GIR2TS.renderClassAsInterface = renderClassAsInterface;
    function renderClassWithInterfaceMembers(class_node, ns_list, my_ns) {
        if (ns_list === void 0) { ns_list = []; }
        var methods = [];
        var props = [];
        var externIfaceMethods = [];
        if (class_node.implements) {
            for (var _i = 0, _a = class_node.implements; _i < _a.length; _i++) {
                var iface = _a[_i];
                var iface_name = iface.$.name;
                var iface_list = [];
                var iface_ns = '';
                if (iface_name.indexOf('.') !== -1) {
                    iface_ns = iface_name.split('.')[0];
                    iface_name = iface_name.split('.')[1];
                    var ns_node = searchNodeByName(ns_list, iface_ns);
                    if (ns_node && ns_node.interface) {
                        iface_list = ns_node.interface;
                    }
                }
                else {
                    iface_list = my_ns.interface;
                }
                var i = searchNodeByName(iface_list, iface_name);
                if (i) {
                    externIfaceMethods = externIfaceMethods.concat(getAllMethods(i).map(function (m) {
                        return {
                            ns_name: iface_ns,
                            method: m
                        };
                    }));
                }
            }
        }
        methods = methods.concat(getAllMethods(class_node));
        var unique_methods = removeDuplicates(methods, function (a, b) { return a.$.name === b.$.name; });
        var unique_props = props;
        var str = '';
        str += 'class ' + class_node.$.name;
        if (class_node.$.parent) {
            str += " extends " + class_node.$.parent;
        }
        if (class_node.implements) {
            str += ' implements ';
            for (var _b = 0, _c = class_node.implements; _b < _c.length; _b++) {
                var iface = _c[_b];
                str += iface.$.name + ', ';
            }
            str = str.slice(0, -2);
        }
        str += ' {\n';
        if (unique_props.length > 0) {
            str += '\n';
            for (var _d = 0, _e = unique_props.map(function (prop_node) { return renderProperty(prop_node); }); _d < _e.length; _d++) {
                var prop_str = _e[_d];
                str += "\t" + prop_str + "\n";
            }
        }
        if (unique_methods.length > 0) {
            str += '\n';
            for (var _f = 0, _g = unique_methods.map(function (func_node) { return renderMethod(func_node); }); _f < _g.length; _f++) {
                var method_str = _g[_f];
                str += "\t" + method_str + "\n";
            }
        }
        str += '\n';
        str += '}\n';
        return str;
    }
    GIR2TS.renderClassWithInterfaceMembers = renderClassWithInterfaceMembers;
    function renderInterface(iface_node, exclude) {
        var exclude_method_list = [];
        var exclude_self = false;
        var exclude_all_members = false;
        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        }
        else if (exclude === 'all') {
            exclude_all_members = true;
        }
        else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }
        var body = '\n\n';
        var methods = removeDuplicates(getAllMethods(iface_node), function (a, b) { return a.$.name === b.$.name; });
        for (var _i = 0; _i < methods.length; _i++) {
            var m = methods[_i];
            body += '\t' + renderMethod(m, false) + '\n';
        }
        return "interface " + iface_node.$.name + " {" + body + "}";
    }
    GIR2TS.renderInterface = renderInterface;
    function renderNamespace(ns_node, exclude) {
        var body = '';
        var class_nodes = [];
        if (ns_node.class)
            class_nodes = class_nodes.concat(ns_node.class);
        for (var _i = 0; _i < class_nodes.length; _i++) {
            var class_node = class_nodes[_i];
            var class_name = class_node.$.name;
            body += '\n\n' + GIR2TS.renderClassAsInterface(class_node, exclude ? exclude.exclude.class[class_name] : undefined) + '\n\n';
        }
        if (ns_node.record)
            for (var _a = 0, _b = ns_node.record; _a < _b.length; _a++) {
                var rec_node = _b[_a];
                body += '\n\n' + GIR2TS.renderRecordAsClass(rec_node) + '\n\n';
            }
        if (ns_node.interface)
            for (var _c = 0, _d = ns_node.interface; _c < _d.length; _c++) {
                var iface_node = _d[_c];
                body += '\n\n' + GIR2TS.renderClassAsInterface(iface_node, exclude ? exclude.exclude.class[iface_node.$.name] : undefined) + '\n\n';
            }
        if (ns_node.enumeration)
            for (var _e = 0, _f = ns_node.enumeration; _e < _f.length; _e++) {
                var enum_node = _f[_e];
                body += '\n\n' + GIR2TS.renderEnumeration(enum_node) + '\n\n';
            }
        if (ns_node.bitfield)
            for (var _g = 0, _h = ns_node.bitfield; _g < _h.length; _g++) {
                var bf_node = _h[_g];
                body += '\n\n' + GIR2TS.renderEnumeration(bf_node) + '\n\n';
            }
        if (ns_node.callback)
            for (var _j = 0, _k = ns_node.callback; _j < _k.length; _j++) {
                var cb_node = _k[_j];
                body += '\n\n' + GIR2TS.renderCallback(cb_node) + '\n\n';
            }
        if (ns_node.union)
            for (var _l = 0, _m = ns_node.union; _l < _m.length; _l++) {
                var union_node = _m[_l];
                body += '\n\n' + GIR2TS.renderNodeAsBlankInterface(union_node) + '\n\n';
            }
        if (ns_node.alias)
            for (var _o = 0, _p = ns_node.alias; _o < _p.length; _o++) {
                var alias_node = _p[_o];
                body += '\n\n' + GIR2TS.renderAlias(alias_node) + '\n\n';
            }
        if (ns_node.function)
            for (var _q = 0, _r = ns_node.function; _q < _r.length; _q++) {
                var func_node = _r[_q];
                var exc = exclude && exclude.exclude.function ? exclude.exclude.function : undefined;
                body += '\n\n' + renderFreeFunction(func_node, exc) + '\n\n';
            }
        return "declare namespace imports.gi." + ns_node.$.name + " {" + body + "}";
    }
    GIR2TS.renderNamespace = renderNamespace;
    function parseGIR(file_path, cb) {
        var fs = require('fs');
        var xml2js = require('xml2js');
        var parser = new xml2js.Parser();
        fs.readFile(file_path, function (err, data) {
            if (err) {
                console.log("Error reading file.");
                return;
            }
            parser.parseString(data, cb);
        });
    }
    GIR2TS.parseGIR = parseGIR;
    var Generator = (function () {
        function Generator(gir_xml_list, exclude_json_map) {
            if (exclude_json_map === void 0) { exclude_json_map = {}; }
            this.ns_list = [];
            this.exclude_json_map = {};
            this.lib_list = gir_xml_list;
            this.exclude_json_map = exclude_json_map;
        }
        Generator.prototype.generateTypings = function (cb) {
            var _this = this;
            var self = this;
            var count = 0;
            function cb_counter() {
                if (++count === self.lib_list.length)
                    proceed();
            }
            var xml2js = require('xml2js');
            var parser = new xml2js.Parser();
            for (var _i = 0, _a = this.lib_list; _i < _a.length; _i++) {
                var lib = _a[_i];
                parser.parseString(lib.xml_str, function (err, res) {
                    _this.ns_list.push({
                        lib_name: lib.lib_name,
                        ns_node: res.repository.namespace[0]
                    });
                    cb_counter();
                });
            }
            function proceed() {
                var res = [];
                for (var _i = 0, _a = self.ns_list; _i < _a.length; _i++) {
                    var ns = _a[_i];
                    var ns_name = ns.ns_node.$.name;
                    var typing_str = renderNamespace(ns.ns_node, self.exclude_json_map[ns.lib_name]);
                    res.push({
                        gir_name: ns.lib_name,
                        typing_str: typing_str
                    });
                }
                cb(res);
            }
        };
        return Generator;
    })();
    GIR2TS.Generator = Generator;
})(GIR2TS || (GIR2TS = {}));
var fs = require('fs');
var path = require('path');
function main() {
    console.log(__dirname);
    var argv = require('minimist')(process.argv.slice(2));
    var gir_files = [];
    var outdir = __dirname;
    var exclude_json_map = {};
    if (argv.outdir) {
        console.log("Output typings directory: " + argv.outdir);
        outdir = path.join(__dirname, argv.outdir);
        if (fs.statSync(outdir).isDirectory()) {
        }
        else {
            throw new Error("out dir specified is not a directory.");
        }
    }
    else {
        throw new Error("No out dir specified.");
    }
    if (argv.excludedir) {
        console.log("Excludes directory: " + argv.excludedir);
        var dir = path.join(__dirname, argv.excludedir);
        var json_files = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map(function (file) { return path.join(dir, file); });
        }
        for (var _i = 0; _i < json_files.length; _i++) {
            var json_file = json_files[_i];
            var lib_name = path.basename(json_file, '.json');
            var data = fs.readFileSync(json_file, 'utf8');
            exclude_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.girdir) {
        console.log("GIR directory: " + argv.girdir);
        var dir = path.join(__dirname, argv.girdir);
        if (fs.statSync(dir).isDirectory()) {
            gir_files = fs.readdirSync(dir).map(function (file) { return path.join(dir, file); });
        }
    }
    else {
        gir_files = gir_files.concat(argv._.map(function (arg) { return path.join(__dirname, arg); }));
    }
    var gir_xml_list = [];
    for (var _a = 0; _a < gir_files.length; _a++) {
        var file = gir_files[_a];
        var gir_name = path.basename(file, '.gir');
        var data = '';
        try {
            data = fs.readFileSync(file, 'utf8');
        }
        catch (e) {
            console.log(e.message);
            return;
        }
        gir_xml_list.push({
            lib_name: gir_name,
            xml_str: data
        });
    }
    var gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map);
    gen.generateTypings(function (res) {
        for (var _i = 0; _i < res.length; _i++) {
            var lib = res[_i];
            var outfile = path.join(outdir, lib.gir_name + '.d.ts');
            try {
                fs.writeFileSync(outfile, lib.typing_str);
            }
            catch (err) {
                console.log(err.message);
                return;
            }
            console.log("wrote to " + outfile);
        }
    });
}
main();
exports.lib = GIR2TS;
