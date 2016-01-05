declare namespace imports.gi.GObject {

interface Binding extends Object {
	get_flags () : BindingFlags;
	get_source () : Object;
	get_source_property () : string;
	get_target () : Object;
	get_target_property () : string;
	unbind () : void;
}



interface InitiallyUnowned extends Object {

}

 

interface Object {
	add_toggle_ref (notify: ToggleNotify, data: any) : void;
	add_weak_pointer (weak_pointer_location: any) : void;
	bind_property (source_property: string, target: Object, target_property: string, flags: BindingFlags) : Binding;
	bind_property_full (source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: BindingTransformFunc, transform_from: BindingTransformFunc, user_data: any, notify: GLib.DestroyNotify) : Binding;
	bind_property_with_closures (source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Closure, transform_from: Closure) : Binding;
	dup_data (key: string, dup_func: GLib.DuplicateFunc, user_data: any) : any;
	dup_qdata (quark: GLib.Quark, dup_func: GLib.DuplicateFunc, user_data: any) : any;
	force_floating () : void;
	freeze_notify () : void;
	get_data (key: string) : any;
	// get_property (property_name: string, value: Value) : void;
	get_qdata (quark: GLib.Quark) : any;
	// get_valist (first_property_name: string, var_args: any[]) : void;
	is_floating () : boolean;
	notify (property_name: string) : void;
	notify_by_pspec (pspec: ParamSpec) : void;
	ref () : Object;
	ref_sink () : Object;
	remove_toggle_ref (notify: ToggleNotify, data: any) : void;
	remove_weak_pointer (weak_pointer_location: any) : void;
	replace_data (key: string, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify) : boolean;
	replace_qdata (quark: GLib.Quark, oldval: any, newval: any, destroy: GLib.DestroyNotify, old_destroy: GLib.DestroyNotify) : boolean;
	run_dispose () : void;
	set_data (key: string, data: any) : void;
	set_data_full (key: string, data: any, destroy: GLib.DestroyNotify) : void;
	// set_property (property_name: string, value: Value) : void;
	set_qdata (quark: GLib.Quark, data: any) : void;
	set_qdata_full (quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify) : void;
	// set_valist (first_property_name: string, var_args: any[]) : void;
	steal_data (key: string) : any;
	steal_qdata (quark: GLib.Quark) : any;
	thaw_notify () : void;
	unref () : void;
	watch_closure (closure: Closure) : void;
	weak_ref (notify: WeakNotify, data: any) : void;
	weak_unref (notify: WeakNotify, data: any) : void;
}



interface ParamSpec {
	get_blurb () : string;
	get_default_value () : Value;
	get_name () : string;
	get_nick () : string;
	get_qdata (quark: GLib.Quark) : any;
	get_redirect_target () : ParamSpec;
	ref () : ParamSpec;
	ref_sink () : ParamSpec;
	set_qdata (quark: GLib.Quark, data: any) : void;
	set_qdata_full (quark: GLib.Quark, data: any, destroy: GLib.DestroyNotify) : void;
	sink () : void;
	steal_qdata (quark: GLib.Quark) : any;
	unref () : void;
}



interface ParamSpecBoolean extends ParamSpec {

}



interface ParamSpecBoxed extends ParamSpec {

}



interface ParamSpecChar extends ParamSpec {

}



interface ParamSpecDouble extends ParamSpec {

}



interface ParamSpecEnum extends ParamSpec {

}



interface ParamSpecFlags extends ParamSpec {

}



interface ParamSpecFloat extends ParamSpec {

}



interface ParamSpecGType extends ParamSpec {

}



interface ParamSpecInt extends ParamSpec {

}



interface ParamSpecInt64 extends ParamSpec {

}



interface ParamSpecLong extends ParamSpec {

}



interface ParamSpecObject extends ParamSpec {

}



interface ParamSpecOverride extends ParamSpec {

}



interface ParamSpecParam extends ParamSpec {

}



interface ParamSpecPointer extends ParamSpec {

}



interface ParamSpecString extends ParamSpec {

}



interface ParamSpecUChar extends ParamSpec {

}



interface ParamSpecUInt extends ParamSpec {

}



interface ParamSpecUInt64 extends ParamSpec {

}



interface ParamSpecULong extends ParamSpec {

}



interface ParamSpecUnichar extends ParamSpec {

}



interface ParamSpecValueArray extends ParamSpec {

}



interface ParamSpecVariant extends ParamSpec {

}



interface TypeModule extends Object, TypePlugin {
	add_interface (instance_type: GObject.Type, interface_type: GObject.Type, interface_info: InterfaceInfo) : void;
	register_enum (name: string, const_static_values: EnumValue) : GObject.Type;
	register_flags (name: string, const_static_values: FlagsValue) : GObject.Type;
	register_type (parent_type: GObject.Type, type_name: string, type_info: TypeInfo, flags: TypeFlags) : GObject.Type;
	set_name (name: string) : void;
	unuse () : void;
	use () : boolean;
}



class CClosure {
	public closure: Closure;
	public callback: any;


}



class Closure {
	public ref_count: number;
	public meta_marshal_nouse: number;
	public n_guards: number;
	public n_fnotifiers: number;
	public n_inotifiers: number;
	public in_inotify: number;
	public floating: number;
	public derivative_flag: number;
	public in_marshal: number;
	public is_invalid: number;
	public data: any;
	public notifiers: ClosureNotifyData;

	marshal : {(closure: Closure, return_value: Value, n_param_values: number, param_values: Value, invocation_hint: any, marshal_data: any) : void;};

	public add_finalize_notifier (notify_data: any, notify_func: ClosureNotify) : void;
	public add_invalidate_notifier (notify_data: any, notify_func: ClosureNotify) : void;
	public add_marshal_guards (pre_marshal_data: any, pre_marshal_notify: ClosureNotify, post_marshal_data: any, post_marshal_notify: ClosureNotify) : void;
	public invalidate () : void;
	public invoke (return_value: Value, n_param_values: number, param_values: Value[], invocation_hint: any) : void;
	public ref () : Closure;
	public remove_finalize_notifier (notify_data: any, notify_func: ClosureNotify) : void;
	public remove_invalidate_notifier (notify_data: any, notify_func: ClosureNotify) : void;
	public set_marshal (marshal: ClosureMarshal) : void;
	public set_meta_marshal (marshal_data: any, meta_marshal: ClosureMarshal) : void;
	public sink () : void;
	public unref () : void;
}



class ClosureNotifyData {
	public data: any;
	public notify: ClosureNotify;


}



class EnumClass {
	public g_type_class: TypeClass;
	public minimum: number;
	public maximum: number;
	public n_values: number;
	public values: EnumValue;


}



class EnumValue {
	public value: number;
	public value_name: string;
	public value_nick: string;


}



class FlagsClass {
	public g_type_class: TypeClass;
	public mask: number;
	public n_values: number;
	public values: FlagsValue;


}



class FlagsValue {
	public value: number;
	public value_name: string;
	public value_nick: string;


}



class InitiallyUnownedClass {
	public g_type_class: TypeClass;
	public construct_properties: GLib.SList;
	public flags: number;
	public pdummy: any[];

	constructor_ : {(_type: GObject.Type, n_construct_properties: number, construct_properties: ObjectConstructParam) : Object;};
	set_property : {(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;};
	get_property : {(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;};
	dispose : {(object: Object) : void;};
	finalize : {(object: Object) : void;};
	dispatch_properties_changed : {(object: Object, n_pspecs: number, pspecs: ParamSpec) : void;};
	notify : {(object: Object, pspec: ParamSpec) : void;};
	constructed : {(object: Object) : void;};

}



class InterfaceInfo {
	public interface_init: InterfaceInitFunc;
	public interface_finalize: InterfaceFinalizeFunc;
	public interface_data: any;


}



class ObjectClass {
	public g_type_class: TypeClass;
	public construct_properties: GLib.SList;
	public flags: number;
	public pdummy: any[];

	constructor_ : {(_type: GObject.Type, n_construct_properties: number, construct_properties: ObjectConstructParam) : Object;};
	set_property : {(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;};
	get_property : {(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;};
	dispose : {(object: Object) : void;};
	finalize : {(object: Object) : void;};
	dispatch_properties_changed : {(object: Object, n_pspecs: number, pspecs: ParamSpec) : void;};
	notify : {(object: Object, pspec: ParamSpec) : void;};
	constructed : {(object: Object) : void;};

	public find_property (property_name: string) : ParamSpec;
	public install_properties (n_pspecs: number, pspecs: ParamSpec[]) : void;
	public install_property (property_id: number, pspec: ParamSpec) : void;
	public list_properties (n_properties: number) : ParamSpec[];
	public override_property (property_id: number, name: string) : void;
}



class ObjectConstructParam {
	public pspec: ParamSpec;
	public value: Value;


}



class ParamSpecClass {
	public g_type_class: TypeClass;
	public value_type: GObject.Type;
	public dummy: any[];

	finalize : {(pspec: ParamSpec) : void;};
	value_set_default : {(pspec: ParamSpec, value: Value) : void;};
	value_validate : {(pspec: ParamSpec, value: Value) : boolean;};
	values_cmp : {(pspec: ParamSpec, value1: Value, value2: Value) : number;};

}



class ParamSpecPool {


	public insert (pspec: ParamSpec, owner_type: GObject.Type) : void;
	public list (owner_type: GObject.Type, n_pspecs_p: number) : ParamSpec[];
	public list_owned (owner_type: GObject.Type) : GLib.List;
	public lookup (param_name: string, owner_type: GObject.Type, walk_ancestors: boolean) : ParamSpec;
	public remove (pspec: ParamSpec) : void;
}



class ParamSpecTypeInfo {
	public instance_size: number;
	public n_preallocs: number;
	public value_type: GObject.Type;

	instance_init : {(pspec: ParamSpec) : void;};
	finalize : {(pspec: ParamSpec) : void;};
	value_set_default : {(pspec: ParamSpec, value: Value) : void;};
	value_validate : {(pspec: ParamSpec, value: Value) : boolean;};
	values_cmp : {(pspec: ParamSpec, value1: Value, value2: Value) : number;};

}



class Parameter {
	public name: string;
	public value: Value;


}



class SignalInvocationHint {
	public signal_id: number;
	public detail: GLib.Quark;
	public run_type: SignalFlags;


}



class SignalQuery {
	public signal_id: number;
	public signal_name: string;
	public itype: GObject.Type;
	public signal_flags: SignalFlags;
	public return_type: GObject.Type;
	public n_params: number;
	public param_types: GObject.Type[];


}



class TypeClass {
	public g_type: GObject.Type;


	public get_private (private_type: GObject.Type) : any;
	public peek_parent () : TypeClass;
	public unref () : void;
	public unref_uncached () : void;
}



class TypeFundamentalInfo {
	public type_flags: TypeFundamentalFlags;


}



class TypeInfo {
	public class_size: number;
	public base_init: BaseInitFunc;
	public base_finalize: BaseFinalizeFunc;
	public class_init: ClassInitFunc;
	public class_finalize: ClassFinalizeFunc;
	public class_data: any;
	public instance_size: number;
	public n_preallocs: number;
	public instance_init: InstanceInitFunc;
	public value_table: TypeValueTable;


}



class TypeInstance {
	public g_class: TypeClass;


	public get_private (private_type: GObject.Type) : any;
}



class TypeInterface {
	public g_type: GObject.Type;
	public g_instance_type: GObject.Type;


	public peek_parent () : TypeInterface;
}



class TypeModuleClass {
	public parent_class: ObjectClass;

	load : {(module: TypeModule) : boolean;};
	unload : {(module: TypeModule) : void;};
	reserved1 : {() : void;};
	reserved2 : {() : void;};
	reserved3 : {() : void;};
	reserved4 : {() : void;};

}



class TypePluginClass {
	public base_iface: TypeInterface;
	public use_plugin: TypePluginUse;
	public unuse_plugin: TypePluginUnuse;
	public complete_type_info: TypePluginCompleteTypeInfo;
	public complete_interface_info: TypePluginCompleteInterfaceInfo;


}



class TypeQuery {
	public type: GObject.Type;
	public type_name: string;
	public class_size: number;
	public instance_size: number;


}



class TypeValueTable {
	public collect_format: string;
	public lcopy_format: string;

	value_init : {(value: Value) : void;};
	value_free : {(value: Value) : void;};
	value_copy : {(src_value: Value, dest_value: Value) : void;};
	value_peek_pointer : {(value: Value) : any;};
	collect_value : {(value: Value, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) : string;};
	lcopy_value : {(value: Value, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) : string;};

}



class Value {
	public g_type: GObject.Type;
	public data: _Value__data__union[];


	public copy (dest_value: Value) : void;
	public dup_boxed () : any;
	public dup_object () : Object;
	public dup_param () : ParamSpec;
	public dup_string () : string;
	public dup_variant () : GLib.Variant;
	public fits_pointer () : boolean;
	public get_boolean () : boolean;
	public get_boxed () : any;
	public get_char () : string;
	public get_double () : number;
	public get_enum () : number;
	public get_flags () : number;
	public get_float () : number;
	public get_gtype () : GObject.Type;
	public get_int () : number;
	public get_int64 () : number;
	public get_long () : number;
	public get_object () : Object;
	public get_param () : ParamSpec;
	public get_pointer () : any;
	public get_schar () : number;
	public get_string () : string;
	public get_uchar () : number;
	public get_uint () : number;
	public get_uint64 () : number;
	public get_ulong () : number;
	public get_variant () : GLib.Variant;
	public init (g_type: GObject.Type) : Value;
	public init_from_instance (_instance: any) : void;
	public peek_pointer () : any;
	public reset () : Value;
	public set_boolean (v_boolean: boolean) : void;
	public set_boxed (v_boxed: any) : void;
	public set_boxed_take_ownership (v_boxed: any) : void;
	public set_char (v_char: string) : void;
	public set_double (v_double: number) : void;
	public set_enum (v_enum: number) : void;
	public set_flags (v_flags: number) : void;
	public set_float (v_float: number) : void;
	public set_gtype (v_gtype: GObject.Type) : void;
	public set_instance (_instance: any) : void;
	public set_int (v_int: number) : void;
	public set_int64 (v_int64: number) : void;
	public set_long (v_long: number) : void;
	public set_object (v_object: Object) : void;
	public set_object_take_ownership (v_object: any) : void;
	public set_param (param: ParamSpec) : void;
	public set_param_take_ownership (param: ParamSpec) : void;
	public set_pointer (v_pointer: any) : void;
	public set_schar (v_char: number) : void;
	public set_static_boxed (v_boxed: any) : void;
	public set_static_string (v_string: string) : void;
	public set_string (v_string: string) : void;
	public set_string_take_ownership (v_string: string) : void;
	public set_uchar (v_uchar: number) : void;
	public set_uint (v_uint: number) : void;
	public set_uint64 (v_uint64: number) : void;
	public set_ulong (v_ulong: number) : void;
	public set_variant (variant: GLib.Variant) : void;
	public take_boxed (v_boxed: any) : void;
	public take_object (v_object: any) : void;
	public take_param (param: ParamSpec) : void;
	public take_string (v_string: string) : void;
	public take_variant (variant: GLib.Variant) : void;
	public transform (dest_value: Value) : boolean;
	public unset () : void;
}



class ValueArray {
	public n_values: number;
	public values: Value;
	public n_prealloced: number;


	public append (value: Value) : ValueArray;
	public copy () : ValueArray;
	public free () : void;
	public get_nth (index_: number) : Value;
	public insert (index_: number, value: Value) : ValueArray;
	public prepend (value: Value) : ValueArray;
	public remove (index_: number) : ValueArray;
	public sort (compare_func: GLib.CompareFunc) : ValueArray;
	public sort_with_data (compare_func: GLib.CompareDataFunc, user_data: any) : ValueArray;
}



class WeakRef {


	public clear () : void;
	public get () : Object;
	public init (object: any) : void;
	public set (object: any) : void;
}



interface TypePlugin {
	complete_interface_info (instance_type: GObject.Type, interface_type: GObject.Type, info: InterfaceInfo) : void;
	complete_type_info (g_type: GObject.Type, info: TypeInfo, value_table: TypeValueTable) : void;
	unuse () : void;
	use () : void;
}



enum BindingFlags {
	default = 0,
	bidirectional = 1,
	sync_create = 2,
	invert_boolean = 4
}



enum ConnectFlags {
	after = 1,
	swapped = 2
}



enum ParamFlags {
	readable = 1,
	writable = 2,
	readwrite = 3,
	construct = 4,
	construct_only = 8,
	lax_validation = 16,
	static_name = 32,
	private = 32,
	static_nick = 64,
	static_blurb = 128,
	explicit_notify = 1073741824,
	deprecated = 2147483648
}



enum SignalFlags {
	run_first = 1,
	run_last = 2,
	run_cleanup = 4,
	no_recurse = 8,
	detailed = 16,
	action = 32,
	no_hooks = 64,
	must_collect = 128,
	deprecated = 256
}



enum SignalMatchType {
	id = 1,
	detail = 2,
	closure = 4,
	func = 8,
	data = 16,
	unblocked = 32
}



enum TypeDebugFlags {
	none = 0,
	objects = 1,
	signals = 2,
	instance_count = 4,
	mask = 7
}



enum TypeFlags {
	abstract = 16,
	value_abstract = 32
}



enum TypeFundamentalFlags {
	classed = 1,
	instantiatable = 2,
	derivable = 4,
	deep_derivable = 8
}



interface BaseFinalizeFunc {
	(g_class: any) : void;
}



interface BaseInitFunc {
	(g_class: any) : void;
}



interface BindingTransformFunc {
	(binding: Binding, from_value: Value, to_value: Value, user_data: any) : boolean;
}



interface BoxedCopyFunc {
	(boxed: any) : any;
}



interface BoxedFreeFunc {
	(boxed: any) : void;
}



interface Callback {
	() : void;
}



interface ClassFinalizeFunc {
	(g_class: any, class_data: any) : void;
}



interface ClassInitFunc {
	(g_class: any, class_data: any) : void;
}



interface ClosureMarshal {
	(closure: Closure, return_value: Value, n_param_values: number, param_values: Value[], invocation_hint: any, marshal_data: any) : void;
}



interface ClosureNotify {
	(data: any, closure: Closure) : void;
}



interface InstanceInitFunc {
	(_instance: TypeInstance, g_class: any) : void;
}



interface InterfaceFinalizeFunc {
	(g_iface: any, iface_data: any) : void;
}



interface InterfaceInitFunc {
	(g_iface: any, iface_data: any) : void;
}



interface ObjectFinalizeFunc {
	(object: Object) : void;
}



interface ObjectGetPropertyFunc {
	(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;
}



interface ObjectSetPropertyFunc {
	(object: Object, property_id: number, value: Value, pspec: ParamSpec) : void;
}



interface SignalAccumulator {
	(ihint: SignalInvocationHint, return_accu: Value, handler_return: Value, data: any) : boolean;
}



interface SignalEmissionHook {
	(ihint: SignalInvocationHint, n_param_values: number, param_values: Value[], data: any) : boolean;
}



interface ToggleNotify {
	(data: any, object: Object, is_last_ref: boolean) : void;
}



interface TypeClassCacheFunc {
	(cache_data: any, g_class: TypeClass) : boolean;
}



interface TypeInterfaceCheckFunc {
	(check_data: any, g_iface: any) : void;
}



interface TypePluginCompleteInterfaceInfo {
	(plugin: TypePlugin, instance_type: GObject.Type, interface_type: GObject.Type, info: InterfaceInfo) : void;
}



interface TypePluginCompleteTypeInfo {
	(plugin: TypePlugin, g_type: GObject.Type, info: TypeInfo, value_table: TypeValueTable) : void;
}



interface TypePluginUnuse {
	(plugin: TypePlugin) : void;
}



interface TypePluginUse {
	(plugin: TypePlugin) : void;
}



interface VaClosureMarshal {
	(closure: Closure, return_value: Value, _instance: any, args: any[], marshal_data: any, n_params: number, param_types: GObject.Type[]) : void;
}



interface ValueTransform {
	(src_value: Value, dest_value: Value) : void;
}



interface WeakNotify {
	(data: any, where_the_object_was: Object) : void;
}



interface TypeCValue {}



interface _Value__data__union {}



type InitiallyUnowned_autoptr = any;



type Object_autoptr = any;



type SignalCMarshaller = ClosureMarshal;



type SignalCVaMarshaller = VaClosureMarshal;



type Type = number;

}
