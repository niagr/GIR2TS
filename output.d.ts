declare class AboutDialog extends Dialog implements Atk.ImplementorIface, Buildable {

	public artists: string[];
	public authors: string[];
	public comments: string;
	public copyright: string;
	public documenters: string[];
	public license: string;
	public license_type: License;
	public logo: GdkPixbuf.Pixbuf;
	public logo_icon_name: string;
	public program_name: string;
	public translator_credits: string;
	public version: string;
	public website: string;
	public website_label: string;
	public wrap_license: boolean;

	public add_credit_section (section_name: string, people: string[]) : void;
	public get_artists () : string[];
	public get_authors () : string[];
	public get_comments () : string;
	public get_copyright () : string;
	public get_documenters () : string[];
	public get_license () : string;
	public get_license_type () : License;
	public get_logo () : GdkPixbuf.Pixbuf;
	public get_logo_icon_name () : string;
	public get_program_name () : string;
	public get_translator_credits () : string;
	public get_version () : string;
	public get_website () : string;
	public get_website_label () : string;
	public get_wrap_license () : boolean;
	public set_artists (artists: string[]) : void;
	public set_authors (authors: string[]) : void;
	public set_comments (comments: string) : void;
	public set_copyright (copyright: string) : void;
	public set_documenters (documenters: string[]) : void;
	public set_license (license: string) : void;
	public set_license_type (license_type: License) : void;
	public set_logo (logo: GdkPixbuf.Pixbuf) : void;
	public set_logo_icon_name (icon_name: string) : void;
	public set_program_name (name: string) : void;
	public set_translator_credits (translator_credits: string) : void;
	public set_version (version: string) : void;
	public set_website (website: string) : void;
	public set_website_label (website_label: string) : void;
	public set_wrap_license (wrap_license: boolean) : void;

}


declare class AccelGroup extends GObject.Object {

	public is_locked: boolean;
	public modifier_mask: Gdk.ModifierType;

	public activate (accel_quark: GLib.Quark, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType) : boolean;
	public connect (accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure) : void;
	public connect_by_path (accel_path: string, closure: GObject.Closure) : void;
	public disconnect (closure: GObject.Closure) : boolean;
	public disconnect_key (accel_key: number, accel_mods: Gdk.ModifierType) : boolean;
	public find (find_func: AccelGroupFindFunc, data: gpointer) : AccelKey;
	public get_is_locked () : boolean;
	public get_modifier_mask () : Gdk.ModifierType;
	public lock () : void;
	public query (accel_key: number, accel_mods: Gdk.ModifierType, n_entries: number) : AccelGroupEntry[];
	public unlock () : void;

}


declare class AccelLabel extends Label implements Atk.ImplementorIface, Buildable {

	public accel_closure: GObject.Closure;
	public accel_widget: Widget;

	public get_accel (accelerator_key: number, accelerator_mods: Gdk.ModifierType) : void;
	public get_accel_widget () : Widget;
	public get_accel_width () : number;
	public refetch () : boolean;
	public set_accel (accelerator_key: number, accelerator_mods: Gdk.ModifierType) : void;
	public set_accel_closure (accel_closure: GObject.Closure) : void;
	public set_accel_widget (accel_widget: Widget) : void;

}


declare class AccelMap extends GObject.Object {

}


declare class Accessible extends Atk.Object {

	public widget: Widget;

	public connect_widget_destroyed () : void;
	public get_widget () : Widget;
	public set_widget (widget: Widget) : void;

}


declare class Action extends GObject.Object implements Buildable {

	public action_group: ActionGroup;
	public always_show_image: boolean;
	public gicon: Gio.Icon;
	public hide_if_empty: boolean;
	public icon_name: string;
	public is_important: boolean;
	public label: string;
	public name: string;
	public sensitive: boolean;
	public short_label: string;
	public stock_id: string;
	public tooltip: string;
	public visible: boolean;
	public visible_horizontal: boolean;
	public visible_overflown: boolean;
	public visible_vertical: boolean;

	public activate () : void;
	public block_activate () : void;
	public connect_accelerator () : void;
	public create_icon (icon_size: number) : Widget;
	public create_menu () : Widget;
	public create_menu_item () : Widget;
	public create_tool_item () : Widget;
	public disconnect_accelerator () : void;
	public get_accel_closure () : GObject.Closure;
	public get_accel_path () : string;
	public get_always_show_image () : boolean;
	public get_gicon () : Gio.Icon;
	public get_icon_name () : string;
	public get_is_important () : boolean;
	public get_label () : string;
	public get_name () : string;
	public get_proxies () : GLib.SList;
	public get_sensitive () : boolean;
	public get_short_label () : string;
	public get_stock_id () : string;
	public get_tooltip () : string;
	public get_visible () : boolean;
	public get_visible_horizontal () : boolean;
	public get_visible_vertical () : boolean;
	public is_sensitive () : boolean;
	public is_visible () : boolean;
	public set_accel_group (accel_group: AccelGroup) : void;
	public set_accel_path (accel_path: string) : void;
	public set_always_show_image (always_show: boolean) : void;
	public set_gicon (icon: Gio.Icon) : void;
	public set_icon_name (icon_name: string) : void;
	public set_is_important (is_important: boolean) : void;
	public set_label (label: string) : void;
	public set_sensitive (sensitive: boolean) : void;
	public set_short_label (short_label: string) : void;
	public set_stock_id (stock_id: string) : void;
	public set_tooltip (tooltip: string) : void;
	public set_visible (visible: boolean) : void;
	public set_visible_horizontal (visible_horizontal: boolean) : void;
	public set_visible_vertical (visible_vertical: boolean) : void;
	public unblock_activate () : void;

}


declare class ActionBar extends Bin implements Atk.ImplementorIface, Buildable {

	public get_center_widget () : Widget;
	public pack_end (child: Widget) : void;
	public pack_start (child: Widget) : void;
	public set_center_widget (center_widget: Widget) : void;

}


declare class ActionGroup extends GObject.Object implements Buildable {

	public accel_group: AccelGroup;
	public name: string;
	public sensitive: boolean;
	public visible: boolean;

	public add_action (action: Action) : void;
	public add_action_with_accel (action: Action, accelerator: string) : void;
	public add_actions (entries: ActionEntry[], n_entries: number, user_data: gpointer) : void;
	public add_actions_full (entries: ActionEntry[], n_entries: number, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public add_radio_actions (entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: gpointer) : void;
	public add_radio_actions_full (entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public add_toggle_actions (entries: ToggleActionEntry[], n_entries: number, user_data: gpointer) : void;
	public add_toggle_actions_full (entries: ToggleActionEntry[], n_entries: number, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public get_accel_group () : AccelGroup;
	public get_action (action_name: string) : Action;
	public get_name () : string;
	public get_sensitive () : boolean;
	public get_visible () : boolean;
	public list_actions () : GLib.List;
	public remove_action (action: Action) : void;
	public set_accel_group (accel_group: AccelGroup) : void;
	public set_sensitive (sensitive: boolean) : void;
	public set_translate_func (_func: TranslateFunc, data: gpointer, notify: GLib.DestroyNotify) : void;
	public set_translation_domain (domain: string) : void;
	public set_visible (visible: boolean) : void;
	public translate_string (string: string) : string;

}


declare class Adjustment extends GObject.InitiallyUnowned {

	public lower: gdouble;
	public page_increment: gdouble;
	public page_size: gdouble;
	public step_increment: gdouble;
	public upper: gdouble;
	public value: gdouble;

	public changed () : void;
	public clamp_page (lower: gdouble, upper: gdouble) : void;
	public configure (value: gdouble, lower: gdouble, upper: gdouble, step_increment: gdouble, page_increment: gdouble, page_size: gdouble) : void;
	public get_lower () : gdouble;
	public get_minimum_increment () : gdouble;
	public get_page_increment () : gdouble;
	public get_page_size () : gdouble;
	public get_step_increment () : gdouble;
	public get_upper () : gdouble;
	public get_value () : gdouble;
	public set_lower (lower: gdouble) : void;
	public set_page_increment (page_increment: gdouble) : void;
	public set_page_size (page_size: gdouble) : void;
	public set_step_increment (step_increment: gdouble) : void;
	public set_upper (upper: gdouble) : void;
	public set_value (value: gdouble) : void;
	public value_changed () : void;

}


declare class Alignment extends Bin implements Atk.ImplementorIface, Buildable {

	public bottom_padding: number;
	public left_padding: number;
	public right_padding: number;
	public top_padding: number;
	public xalign: gfloat;
	public xscale: gfloat;
	public yalign: gfloat;
	public yscale: gfloat;

	public get_padding (padding_top: number, padding_bottom: number, padding_left: number, padding_right: number) : void;
	public set (xalign: gfloat, yalign: gfloat, xscale: gfloat, yscale: gfloat) : void;
	public set_padding (padding_top: number, padding_bottom: number, padding_left: number, padding_right: number) : void;

}


declare class AppChooserButton extends ComboBox implements Atk.ImplementorIface, AppChooser, Buildable, CellEditable, CellLayout {

	public heading: string;
	public show_default_item: boolean;
	public show_dialog_item: boolean;

	public append_custom_item (name: string, label: string, icon: Gio.Icon) : void;
	public append_separator () : void;
	public get_heading () : string;
	public get_show_default_item () : boolean;
	public get_show_dialog_item () : boolean;
	public set_active_custom_item (name: string) : void;
	public set_heading (heading: string) : void;
	public set_show_default_item (setting: boolean) : void;
	public set_show_dialog_item (setting: boolean) : void;

}


declare class AppChooserDialog extends Dialog implements Atk.ImplementorIface, AppChooser, Buildable {

	public gfile: Gio.File;
	public heading: string;

	public get_heading () : string;
	public get_widget () : Widget;
	public set_heading (heading: string) : void;

}


declare class AppChooserWidget extends Box implements Atk.ImplementorIface, AppChooser, Buildable, Orientable {

	public default_text: string;
	public show_all: boolean;
	public show_default: boolean;
	public show_fallback: boolean;
	public show_other: boolean;
	public show_recommended: boolean;

	public get_default_text () : string;
	public get_show_all () : boolean;
	public get_show_default () : boolean;
	public get_show_fallback () : boolean;
	public get_show_other () : boolean;
	public get_show_recommended () : boolean;
	public set_default_text (text: string) : void;
	public set_show_all (setting: boolean) : void;
	public set_show_default (setting: boolean) : void;
	public set_show_fallback (setting: boolean) : void;
	public set_show_other (setting: boolean) : void;
	public set_show_recommended (setting: boolean) : void;

}


declare class Application extends Gio.Application implements Gio.ActionGroup, Gio.ActionMap {

	public active_window: Window;
	public app_menu: Gio.MenuModel;
	public menubar: Gio.MenuModel;
	public register_session: boolean;

	public add_accelerator (accelerator: string, action_name: string, parameter: GLib.Variant) : void;
	public add_window (window: Window) : void;
	public get_accels_for_action (detailed_action_name: string) : string[];
	public get_actions_for_accel (accel: string) : string[];
	public get_active_window () : Window;
	public get_app_menu () : Gio.MenuModel;
	public get_menu_by_id (_id: string) : Gio.Menu;
	public get_menubar () : Gio.MenuModel;
	public get_window_by_id (_id: number) : Window;
	public get_windows () : GLib.List;
	public inhibit (window: Window, flags: ApplicationInhibitFlags, reason: string) : number;
	public is_inhibited (flags: ApplicationInhibitFlags) : boolean;
	public list_action_descriptions () : string[];
	public prefers_app_menu () : boolean;
	public remove_accelerator (action_name: string, parameter: GLib.Variant) : void;
	public remove_window (window: Window) : void;
	public set_accels_for_action (detailed_action_name: string, accels: string[]) : void;
	public set_app_menu (app_menu: Gio.MenuModel) : void;
	public set_menubar (menubar: Gio.MenuModel) : void;
	public uninhibit (cookie: number) : void;

}


declare class ApplicationWindow extends Window implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Buildable {

	public show_menubar: boolean;

	public get_id () : number;
	public get_show_menubar () : boolean;
	public set_show_menubar (show_menubar: boolean) : void;

}


declare class Arrow extends Misc implements Atk.ImplementorIface, Buildable {

	public arrow_type: ArrowType;
	public shadow_type: ShadowType;

	public set (arrow_type: ArrowType, shadow_type: ShadowType) : void;

}


declare class ArrowAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {

}


declare class AspectFrame extends Frame implements Atk.ImplementorIface, Buildable {

	public obey_child: boolean;
	public ratio: gfloat;
	public xalign: gfloat;
	public yalign: gfloat;

	public set (xalign: gfloat, yalign: gfloat, ratio: gfloat, obey_child: boolean) : void;

}


declare class Assistant extends Window implements Atk.ImplementorIface, Buildable {

	public use_header_bar: number;

	public add_action_widget (child: Widget) : void;
	public append_page (page: Widget) : number;
	public commit () : void;
	public get_current_page () : number;
	public get_n_pages () : number;
	public get_nth_page (page_num: number) : Widget;
	public get_page_complete (page: Widget) : boolean;
	public get_page_has_padding (page: Widget) : boolean;
	public get_page_header_image (page: Widget) : GdkPixbuf.Pixbuf;
	public get_page_side_image (page: Widget) : GdkPixbuf.Pixbuf;
	public get_page_title (page: Widget) : string;
	public get_page_type (page: Widget) : AssistantPageType;
	public insert_page (page: Widget, position: number) : number;
	public next_page () : void;
	public prepend_page (page: Widget) : number;
	public previous_page () : void;
	public remove_action_widget (child: Widget) : void;
	public remove_page (page_num: number) : void;
	public set_current_page (page_num: number) : void;
	public set_forward_page_func (page_func: AssistantPageFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_page_complete (page: Widget, complete: boolean) : void;
	public set_page_has_padding (page: Widget, has_padding: boolean) : void;
	public set_page_header_image (page: Widget, pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_page_side_image (page: Widget, pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_page_title (page: Widget, title: string) : void;
	public set_page_type (page: Widget, _type: AssistantPageType) : void;
	public update_buttons_state () : void;

}


declare class Bin extends Container implements Atk.ImplementorIface, Buildable {

	public get_child () : Widget;

}


declare class BooleanCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component {

}


declare class Box extends Container implements Atk.ImplementorIface, Buildable, Orientable {

	public baseline_position: BaselinePosition;
	public homogeneous: boolean;
	public spacing: number;

	public get_baseline_position () : BaselinePosition;
	public get_center_widget () : Widget;
	public get_homogeneous () : boolean;
	public get_spacing () : number;
	public pack_end (child: Widget, expand: boolean, fill: boolean, padding: number) : void;
	public pack_start (child: Widget, expand: boolean, fill: boolean, padding: number) : void;
	public query_child_packing (child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType) : void;
	public reorder_child (child: Widget, position: number) : void;
	public set_baseline_position (position: BaselinePosition) : void;
	public set_center_widget (widget: Widget) : void;
	public set_child_packing (child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType) : void;
	public set_homogeneous (homogeneous: boolean) : void;
	public set_spacing (spacing: number) : void;

}


declare class Builder extends GObject.Object {

	public translation_domain: string;

	public add_callback_symbol (callback_name: string, callback_symbol: GObject.Callback) : void;
	public add_callback_symbols (first_callback_name: string, first_callback_symbol: GObject.Callback) : void;
	public add_from_file (filename: string) : number;
	public add_from_resource (resource_path: string) : number;
	public add_from_string (buffer: string, length: gsize) : number;
	public add_objects_from_file (filename: string, object_ids: string[]) : number;
	public add_objects_from_resource (resource_path: string, object_ids: string[]) : number;
	public add_objects_from_string (buffer: string, length: gsize, object_ids: string[]) : number;
	public connect_signals (user_data: gpointer) : void;
	public connect_signals_full (_func: BuilderConnectFunc, user_data: gpointer) : void;
	public expose_object (name: string, object: GObject.Object) : void;
	public get_application () : Application;
	public get_object (name: string) : GObject.Object;
	public get_objects () : GLib.SList;
	public get_translation_domain () : string;
	public get_type_from_name (type_name: string) : GType;
	public lookup_callback_symbol (callback_name: string) : GObject.Callback;
	public set_application (application: Application) : void;
	public set_translation_domain (domain: string) : void;
	public value_from_string (pspec: GObject.ParamSpec, string: string, value: GObject.Value) : boolean;
	public value_from_string_type (_type: GType, string: string, value: GObject.Value) : boolean;

}


declare class Button extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public always_show_image: boolean;
	public focus_on_click: boolean;
	public image: Widget;
	public image_position: PositionType;
	public label: string;
	public relief: ReliefStyle;
	public use_stock: boolean;
	public use_underline: boolean;
	public xalign: gfloat;
	public yalign: gfloat;

	public clicked () : void;
	public enter () : void;
	public get_alignment (xalign: gfloat, yalign: gfloat) : void;
	public get_always_show_image () : boolean;
	public get_event_window () : Gdk.Window;
	public get_focus_on_click () : boolean;
	public get_image () : Widget;
	public get_image_position () : PositionType;
	public get_label () : string;
	public get_relief () : ReliefStyle;
	public get_use_stock () : boolean;
	public get_use_underline () : boolean;
	public leave () : void;
	public pressed () : void;
	public released () : void;
	public set_alignment (xalign: gfloat, yalign: gfloat) : void;
	public set_always_show_image (always_show: boolean) : void;
	public set_focus_on_click (focus_on_click: boolean) : void;
	public set_image (image: Widget) : void;
	public set_image_position (position: PositionType) : void;
	public set_label (label: string) : void;
	public set_relief (relief: ReliefStyle) : void;
	public set_use_stock (use_stock: boolean) : void;
	public set_use_underline (use_underline: boolean) : void;

}


declare class ButtonAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class ButtonBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public layout_style: ButtonBoxStyle;

	public get_child_non_homogeneous (child: Widget) : boolean;
	public get_child_secondary (child: Widget) : boolean;
	public get_layout () : ButtonBoxStyle;
	public set_child_non_homogeneous (child: Widget, non_homogeneous: boolean) : void;
	public set_child_secondary (child: Widget, is_secondary: boolean) : void;
	public set_layout (layout_style: ButtonBoxStyle) : void;

}


declare class Calendar extends Widget implements Atk.ImplementorIface, Buildable {

	public day: number;
	public detail_height_rows: number;
	public detail_width_chars: number;
	public month: number;
	public no_month_change: boolean;
	public show_day_names: boolean;
	public show_details: boolean;
	public show_heading: boolean;
	public show_week_numbers: boolean;
	public year: number;

	public clear_marks () : void;
	public get_date (year: number, month: number, day: number) : void;
	public get_day_is_marked (day: number) : boolean;
	public get_detail_height_rows () : number;
	public get_detail_width_chars () : number;
	public get_display_options () : CalendarDisplayOptions;
	public mark_day (day: number) : void;
	public select_day (day: number) : void;
	public select_month (month: number, year: number) : void;
	public set_detail_func (_func: CalendarDetailFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_detail_height_rows (_rows: number) : void;
	public set_detail_width_chars (chars: number) : void;
	public set_display_options (flags: CalendarDisplayOptions) : void;
	public unmark_day (day: number) : void;

}


declare class CellAccessible extends Accessible implements Atk.Action, Atk.Component {

}


declare class CellArea extends GObject.InitiallyUnowned implements Buildable, CellLayout {

	public edit_widget: CellEditable;
	public edited_cell: CellRenderer;
	public focus_cell: CellRenderer;

	public activate (context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean) : boolean;
	public activate_cell (widget: Widget, renderer: CellRenderer, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState) : boolean;
	public add (renderer: CellRenderer) : void;
	public add_focus_sibling (renderer: CellRenderer, sibling: CellRenderer) : void;
	public add_with_properties (renderer: CellRenderer, first_prop_name: string) : void;
	public apply_attributes (tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) : void;
	public attribute_connect (renderer: CellRenderer, attribute: string, column: number) : void;
	public attribute_disconnect (renderer: CellRenderer, attribute: string) : void;
	public attribute_get_column (renderer: CellRenderer, attribute: string) : number;
	public cell_get (renderer: CellRenderer, first_prop_name: string) : void;
	public cell_get_property (renderer: CellRenderer, property_name: string, value: GObject.Value) : void;
	public cell_get_valist (renderer: CellRenderer, first_property_name: string, var_args: va_list) : void;
	public cell_set (renderer: CellRenderer, first_prop_name: string) : void;
	public cell_set_property (renderer: CellRenderer, property_name: string, value: GObject.Value) : void;
	public cell_set_valist (renderer: CellRenderer, first_property_name: string, var_args: va_list) : void;
	public copy_context (context: CellAreaContext) : CellAreaContext;
	public create_context () : CellAreaContext;
	public event (context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState) : number;
	public focus (direction: DirectionType) : boolean;
	public foreach (callback: CellCallback, callback_data: gpointer) : void;
	public foreach_alloc (context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback, callback_data: gpointer) : void;
	public get_cell_allocation (context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: Gdk.Rectangle, allocation: Gdk.Rectangle) : void;
	public get_cell_at_position (context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, _x: number, _y: number, alloc_area: Gdk.Rectangle) : CellRenderer;
	public get_current_path_string () : string;
	public get_edit_widget () : CellEditable;
	public get_edited_cell () : CellRenderer;
	public get_focus_cell () : CellRenderer;
	public get_focus_from_sibling (renderer: CellRenderer) : CellRenderer;
	public get_focus_siblings (renderer: CellRenderer) : GLib.List;
	public get_preferred_height (context: CellAreaContext, widget: Widget, minimum_height: number, natural_height: number) : void;
	public get_preferred_height_for_width (context: CellAreaContext, widget: Widget, width: number, minimum_height: number, natural_height: number) : void;
	public get_preferred_width (context: CellAreaContext, widget: Widget, minimum_width: number, natural_width: number) : void;
	public get_preferred_width_for_height (context: CellAreaContext, widget: Widget, height: number, minimum_width: number, natural_width: number) : void;
	public get_request_mode () : SizeRequestMode;
	public has_renderer (renderer: CellRenderer) : boolean;
	public inner_cell_area (widget: Widget, cell_area: Gdk.Rectangle, inner_area: Gdk.Rectangle) : void;
	public is_activatable () : boolean;
	public is_focus_sibling (renderer: CellRenderer, sibling: CellRenderer) : boolean;
	public remove (renderer: CellRenderer) : void;
	public remove_focus_sibling (renderer: CellRenderer, sibling: CellRenderer) : void;
	public render (context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean) : void;
	public request_renderer (renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number, minimum_size: number, natural_size: number) : void;
	public set_focus_cell (renderer: CellRenderer) : void;
	public stop_editing (canceled: boolean) : void;

}


declare class CellAreaBox extends CellArea implements Buildable, CellLayout, Orientable {

	public spacing: number;

	public get_spacing () : number;
	public pack_end (renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean) : void;
	public pack_start (renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean) : void;
	public set_spacing (spacing: number) : void;

}


declare class CellAreaContext extends GObject.Object {

	public area: CellArea;
	public minimum_height: number;
	public minimum_width: number;
	public natural_height: number;
	public natural_width: number;

	public allocate (width: number, height: number) : void;
	public get_allocation (width: number, height: number) : void;
	public get_area () : CellArea;
	public get_preferred_height (minimum_height: number, natural_height: number) : void;
	public get_preferred_height_for_width (width: number, minimum_height: number, natural_height: number) : void;
	public get_preferred_width (minimum_width: number, natural_width: number) : void;
	public get_preferred_width_for_height (height: number, minimum_width: number, natural_width: number) : void;
	public push_preferred_height (minimum_height: number, natural_height: number) : void;
	public push_preferred_width (minimum_width: number, natural_width: number) : void;
	public reset () : void;

}


declare class CellRenderer extends GObject.InitiallyUnowned {

	public cell_background: string;
	public cell_background_gdk: Gdk.Color;
	public cell_background_rgba: Gdk.RGBA;
	public cell_background_set: boolean;
	public editing: boolean;
	public height: number;
	public is_expanded: boolean;
	public is_expander: boolean;
	public mode: CellRendererMode;
	public sensitive: boolean;
	public visible: boolean;
	public width: number;
	public xalign: gfloat;
	public xpad: number;
	public yalign: gfloat;
	public ypad: number;

	public activate (event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) : boolean;
	public get_aligned_area (widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle, aligned_area: Gdk.Rectangle) : void;
	public get_alignment (xalign: gfloat, yalign: gfloat) : void;
	public get_fixed_size (width: number, height: number) : void;
	public get_padding (xpad: number, ypad: number) : void;
	public get_preferred_height (widget: Widget, minimum_size: number, natural_size: number) : void;
	public get_preferred_height_for_width (widget: Widget, width: number, minimum_height: number, natural_height: number) : void;
	public get_preferred_size (widget: Widget, minimum_size: Requisition, natural_size: Requisition) : void;
	public get_preferred_width (widget: Widget, minimum_size: number, natural_size: number) : void;
	public get_preferred_width_for_height (widget: Widget, height: number, minimum_width: number, natural_width: number) : void;
	public get_request_mode () : SizeRequestMode;
	public get_sensitive () : boolean;
	public get_size (widget: Widget, cell_area: Gdk.Rectangle, x_offset: number, y_offset: number, width: number, height: number) : void;
	public get_state (widget: Widget, cell_state: CellRendererState) : StateFlags;
	public get_visible () : boolean;
	public is_activatable () : boolean;
	public render (cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) : void;
	public set_alignment (xalign: gfloat, yalign: gfloat) : void;
	public set_fixed_size (width: number, height: number) : void;
	public set_padding (xpad: number, ypad: number) : void;
	public set_sensitive (sensitive: boolean) : void;
	public set_visible (visible: boolean) : void;
	public start_editing (event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) : CellEditable;
	public stop_editing (canceled: boolean) : void;

}


declare class CellRendererAccel extends CellRendererText {

	public accel_key: number;
	public accel_mode: CellRendererAccelMode;
	public accel_mods: Gdk.ModifierType;
	public keycode: number;

}


declare class CellRendererCombo extends CellRendererText {

	public has_entry: boolean;
	public model: TreeModel;
	public text_column: number;

}


declare class CellRendererPixbuf extends CellRenderer {

	public follow_state: boolean;
	public gicon: Gio.Icon;
	public icon_name: string;
	public pixbuf: GdkPixbuf.Pixbuf;
	public pixbuf_expander_closed: GdkPixbuf.Pixbuf;
	public pixbuf_expander_open: GdkPixbuf.Pixbuf;
	public stock_detail: string;
	public stock_id: string;
	public stock_size: number;
	public surface: cairo.Surface;

}


declare class CellRendererProgress extends CellRenderer implements Orientable {

	public inverted: boolean;
	public pulse: number;
	public text: string;
	public text_xalign: gfloat;
	public text_yalign: gfloat;
	public value: number;

}


declare class CellRendererSpin extends CellRendererText {

	public adjustment: Adjustment;
	public climb_rate: gdouble;
	public digits: number;

}


declare class CellRendererSpinner extends CellRenderer {

	public active: boolean;
	public pulse: number;
	public size: IconSize;

}


declare class CellRendererText extends CellRenderer {

	public align_set: boolean;
	public alignment: Pango.Alignment;
	public attributes: Pango.AttrList;
	public background: string;
	public background_gdk: Gdk.Color;
	public background_rgba: Gdk.RGBA;
	public background_set: boolean;
	public editable: boolean;
	public editable_set: boolean;
	public ellipsize: Pango.EllipsizeMode;
	public ellipsize_set: boolean;
	public family: string;
	public family_set: boolean;
	public font: string;
	public font_desc: Pango.FontDescription;
	public foreground: string;
	public foreground_gdk: Gdk.Color;
	public foreground_rgba: Gdk.RGBA;
	public foreground_set: boolean;
	public language: string;
	public language_set: boolean;
	public markup: string;
	public max_width_chars: number;
	public placeholder_text: string;
	public rise: number;
	public rise_set: boolean;
	public scale: gdouble;
	public scale_set: boolean;
	public single_paragraph_mode: boolean;
	public size: number;
	public size_points: gdouble;
	public size_set: boolean;
	public stretch: Pango.Stretch;
	public stretch_set: boolean;
	public strikethrough: boolean;
	public strikethrough_set: boolean;
	public style: Pango.Style;
	public style_set: boolean;
	public text: string;
	public underline: Pango.Underline;
	public underline_set: boolean;
	public variant: Pango.Variant;
	public variant_set: boolean;
	public weight: number;
	public weight_set: boolean;
	public width_chars: number;
	public wrap_mode: Pango.WrapMode;
	public wrap_width: number;

	public set_fixed_height_from_font (number_of_rows: number) : void;

}


declare class CellRendererToggle extends CellRenderer {

	public activatable: boolean;
	public active: boolean;
	public inconsistent: boolean;
	public indicator_size: number;
	public radio: boolean;

	public get_activatable () : boolean;
	public get_active () : boolean;
	public get_radio () : boolean;
	public set_activatable (setting: boolean) : void;
	public set_active (setting: boolean) : void;
	public set_radio (radio: boolean) : void;

}


declare class CellView extends Widget implements Atk.ImplementorIface, Buildable, CellLayout, Orientable {

	public background: string;
	public background_gdk: Gdk.Color;
	public background_rgba: Gdk.RGBA;
	public background_set: boolean;
	public cell_area: CellArea;
	public cell_area_context: CellAreaContext;
	public draw_sensitive: boolean;
	public fit_model: boolean;
	public model: TreeModel;

	public get_displayed_row () : TreePath;
	public get_draw_sensitive () : boolean;
	public get_fit_model () : boolean;
	public get_model () : TreeModel;
	public get_size_of_row (path: TreePath, requisition: Requisition) : boolean;
	public set_background_color (color: Gdk.Color) : void;
	public set_background_rgba (rgba: Gdk.RGBA) : void;
	public set_displayed_row (path: TreePath) : void;
	public set_draw_sensitive (draw_sensitive: boolean) : void;
	public set_fit_model (fit_model: boolean) : void;
	public set_model (model: TreeModel) : void;

}


declare class CheckButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

}


declare class CheckMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public active: boolean;
	public draw_as_radio: boolean;
	public inconsistent: boolean;

	public get_active () : boolean;
	public get_draw_as_radio () : boolean;
	public get_inconsistent () : boolean;
	public set_active (is_active: boolean) : void;
	public set_draw_as_radio (draw_as_radio: boolean) : void;
	public set_inconsistent (setting: boolean) : void;
	public toggled () : void;

}


declare class CheckMenuItemAccessible extends MenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {

}


declare class Clipboard extends GObject.Object {

	public clear () : void;
	public get_display () : Gdk.Display;
	public get_owner () : GObject.Object;
	public request_contents (target: Gdk.Atom, callback: ClipboardReceivedFunc, user_data: gpointer) : void;
	public request_image (callback: ClipboardImageReceivedFunc, user_data: gpointer) : void;
	public request_rich_text (buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc, user_data: gpointer) : void;
	public request_targets (callback: ClipboardTargetsReceivedFunc, user_data: gpointer) : void;
	public request_text (callback: ClipboardTextReceivedFunc, user_data: gpointer) : void;
	public request_uris (callback: ClipboardURIReceivedFunc, user_data: gpointer) : void;
	public set_can_store (targets: TargetEntry[], n_targets: number) : void;
	public set_image (pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_text (text: string, len: number) : void;
	public set_with_data (targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, user_data: gpointer) : boolean;
	public set_with_owner (targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, owner: GObject.Object) : boolean;
	public store () : void;
	public wait_for_contents (target: Gdk.Atom) : SelectionData;
	public wait_for_image () : GdkPixbuf.Pixbuf;
	public wait_for_rich_text (buffer: TextBuffer, format: Gdk.Atom, length: gsize) : guint8[];
	public wait_for_targets (targets: Gdk.Atom[], n_targets: number) : boolean;
	public wait_for_text () : string;
	public wait_for_uris () : string[];
	public wait_is_image_available () : boolean;
	public wait_is_rich_text_available (buffer: TextBuffer) : boolean;
	public wait_is_target_available (target: Gdk.Atom) : boolean;
	public wait_is_text_available () : boolean;
	public wait_is_uris_available () : boolean;

}


declare class ColorButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, ColorChooser {

	public alpha: number;
	public color: Gdk.Color;
	public rgba: Gdk.RGBA;
	public title: string;
	public use_alpha: boolean;

	public get_alpha () : guint16;
	public get_color (color: Gdk.Color) : void;
	public get_rgba (rgba: Gdk.RGBA) : void;
	public get_title () : string;
	public get_use_alpha () : boolean;
	public set_alpha (alpha: guint16) : void;
	public set_color (color: Gdk.Color) : void;
	public set_rgba (rgba: Gdk.RGBA) : void;
	public set_title (title: string) : void;
	public set_use_alpha (use_alpha: boolean) : void;

}


declare class ColorChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, ColorChooser {

	public show_editor: boolean;

}


declare class ColorChooserWidget extends Box implements Atk.ImplementorIface, Buildable, ColorChooser, Orientable {

	public show_editor: boolean;

}


declare class ColorSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public current_alpha: number;
	public current_color: Gdk.Color;
	public current_rgba: Gdk.RGBA;
	public has_opacity_control: boolean;
	public has_palette: boolean;

	public get_current_alpha () : guint16;
	public get_current_color (color: Gdk.Color) : void;
	public get_current_rgba (rgba: Gdk.RGBA) : void;
	public get_has_opacity_control () : boolean;
	public get_has_palette () : boolean;
	public get_previous_alpha () : guint16;
	public get_previous_color (color: Gdk.Color) : void;
	public get_previous_rgba (rgba: Gdk.RGBA) : void;
	public is_adjusting () : boolean;
	public set_current_alpha (alpha: guint16) : void;
	public set_current_color (color: Gdk.Color) : void;
	public set_current_rgba (rgba: Gdk.RGBA) : void;
	public set_has_opacity_control (has_opacity: boolean) : void;
	public set_has_palette (has_palette: boolean) : void;
	public set_previous_alpha (alpha: guint16) : void;
	public set_previous_color (color: Gdk.Color) : void;
	public set_previous_rgba (rgba: Gdk.RGBA) : void;

}


declare class ColorSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {

	public cancel_button: Widget;
	public color_selection: Widget;
	public help_button: Widget;
	public ok_button: Widget;

	public get_color_selection () : Widget;

}


declare class ComboBox extends Bin implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {

	public active: number;
	public active_id: string;
	public add_tearoffs: boolean;
	public button_sensitivity: SensitivityType;
	public cell_area: CellArea;
	public column_span_column: number;
	public entry_text_column: number;
	public focus_on_click: boolean;
	public has_entry: boolean;
	public has_frame: boolean;
	public id_column: number;
	public model: TreeModel;
	public popup_fixed_width: boolean;
	public popup_shown: boolean;
	public row_span_column: number;
	public tearoff_title: string;
	public wrap_width: number;

	public get_active () : number;
	public get_active_id () : string;
	public get_active_iter (iter: TreeIter) : boolean;
	public get_add_tearoffs () : boolean;
	public get_button_sensitivity () : SensitivityType;
	public get_column_span_column () : number;
	public get_entry_text_column () : number;
	public get_focus_on_click () : boolean;
	public get_has_entry () : boolean;
	public get_id_column () : number;
	public get_model () : TreeModel;
	public get_popup_accessible () : Atk.Object;
	public get_popup_fixed_width () : boolean;
	public get_row_separator_func () : TreeViewRowSeparatorFunc;
	public get_row_span_column () : number;
	public get_title () : string;
	public get_wrap_width () : number;
	public popdown () : void;
	public popup () : void;
	public popup_for_device (device: Gdk.Device) : void;
	public set_active (index_: number) : void;
	public set_active_id (active_id: string) : boolean;
	public set_active_iter (iter: TreeIter) : void;
	public set_add_tearoffs (add_tearoffs: boolean) : void;
	public set_button_sensitivity (sensitivity: SensitivityType) : void;
	public set_column_span_column (column_span: number) : void;
	public set_entry_text_column (text_column: number) : void;
	public set_focus_on_click (focus_on_click: boolean) : void;
	public set_id_column (id_column: number) : void;
	public set_model (model: TreeModel) : void;
	public set_popup_fixed_width (fixed: boolean) : void;
	public set_row_separator_func (_func: TreeViewRowSeparatorFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_row_span_column (row_span: number) : void;
	public set_title (title: string) : void;
	public set_wrap_width (width: number) : void;

}


declare class ComboBoxAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {

}


declare class ComboBoxText extends ComboBox implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {

	public append (_id: string, text: string) : void;
	public append_text (text: string) : void;
	public get_active_text () : string;
	public insert (position: number, _id: string, text: string) : void;
	public insert_text (position: number, text: string) : void;
	public prepend (_id: string, text: string) : void;
	public prepend_text (text: string) : void;
	public remove (position: number) : void;
	public remove_all () : void;

}


declare class Container extends Widget implements Atk.ImplementorIface, Buildable {

	public border_width: number;
	public child: Widget;
	public resize_mode: ResizeMode;

	public add (widget: Widget) : void;
	public add_with_properties (widget: Widget, first_prop_name: string) : void;
	public check_resize () : void;
	public child_get (child: Widget, first_prop_name: string) : void;
	public child_get_property (child: Widget, property_name: string, value: GObject.Value) : void;
	public child_get_valist (child: Widget, first_property_name: string, var_args: va_list) : void;
	public child_notify (child: Widget, child_property: string) : void;
	public child_notify_by_pspec (child: Widget, pspec: GObject.ParamSpec) : void;
	public child_set (child: Widget, first_prop_name: string) : void;
	public child_set_property (child: Widget, property_name: string, value: GObject.Value) : void;
	public child_set_valist (child: Widget, first_property_name: string, var_args: va_list) : void;
	public child_type () : GType;
	public forall (callback: Callback, callback_data: gpointer) : void;
	public foreach (callback: Callback, callback_data: gpointer) : void;
	public get_border_width () : number;
	public get_children () : GLib.List;
	public get_focus_chain (focusable_widgets: GLib.List) : boolean;
	public get_focus_child () : Widget;
	public get_focus_hadjustment () : Adjustment;
	public get_focus_vadjustment () : Adjustment;
	public get_path_for_child (child: Widget) : WidgetPath;
	public get_resize_mode () : ResizeMode;
	public propagate_draw (child: Widget, cr: cairo.Context) : void;
	public remove (widget: Widget) : void;
	public resize_children () : void;
	public set_border_width (border_width: number) : void;
	public set_focus_chain (focusable_widgets: GLib.List) : void;
	public set_focus_child (child: Widget) : void;
	public set_focus_hadjustment (adjustment: Adjustment) : void;
	public set_focus_vadjustment (adjustment: Adjustment) : void;
	public set_reallocate_redraws (needs_redraws: boolean) : void;
	public set_resize_mode (resize_mode: ResizeMode) : void;
	public unset_focus_chain () : void;

}


declare class ContainerAccessible extends WidgetAccessible implements Atk.Component {

}


declare class ContainerCellAccessible extends CellAccessible implements Atk.Action, Atk.Component {

	public add_child (child: CellAccessible) : void;
	public get_children () : GLib.List;
	public remove_child (child: CellAccessible) : void;

}


declare class CssProvider extends GObject.Object implements StyleProvider {

	public load_from_data (data: guint8[], length: gssize) : boolean;
	public load_from_file (file: Gio.File) : boolean;
	public load_from_path (path: string) : boolean;
	public load_from_resource (resource_path: string) : void;
	public to_string () : string;

}


declare class Dialog extends Window implements Atk.ImplementorIface, Buildable {

	public use_header_bar: number;

	public add_action_widget (child: Widget, response_id: number) : void;
	public add_button (button_text: string, response_id: number) : Widget;
	public add_buttons (first_button_text: string) : void;
	public get_action_area () : Widget;
	public get_content_area () : Box;
	public get_header_bar () : Widget;
	public get_response_for_widget (widget: Widget) : number;
	public get_widget_for_response (response_id: number) : Widget;
	public response (response_id: number) : void;
	public run () : number;
	public set_alternative_button_order (first_response_id: number) : void;
	public set_alternative_button_order_from_array (n_params: number, new_order: number[]) : void;
	public set_default_response (response_id: number) : void;
	public set_response_sensitive (response_id: number, setting: boolean) : void;

}


declare class DrawingArea extends Widget implements Atk.ImplementorIface, Buildable {

}


declare class Entry extends Widget implements Atk.ImplementorIface, Buildable, CellEditable, Editable {

	public activates_default: boolean;
	public attributes: Pango.AttrList;
	public buffer: EntryBuffer;
	public caps_lock_warning: boolean;
	public completion: EntryCompletion;
	public cursor_position: number;
	public editable: boolean;
	public has_frame: boolean;
	public im_module: string;
	public inner_border: Border;
	public input_hints: InputHints;
	public input_purpose: InputPurpose;
	public invisible_char: number;
	public invisible_char_set: boolean;
	public max_length: number;
	public max_width_chars: number;
	public overwrite_mode: boolean;
	public placeholder_text: string;
	public populate_all: boolean;
	public primary_icon_activatable: boolean;
	public primary_icon_gicon: Gio.Icon;
	public primary_icon_name: string;
	public primary_icon_pixbuf: GdkPixbuf.Pixbuf;
	public primary_icon_sensitive: boolean;
	public primary_icon_stock: string;
	public primary_icon_storage_type: ImageType;
	public primary_icon_tooltip_markup: string;
	public primary_icon_tooltip_text: string;
	public progress_fraction: gdouble;
	public progress_pulse_step: gdouble;
	public scroll_offset: number;
	public secondary_icon_activatable: boolean;
	public secondary_icon_gicon: Gio.Icon;
	public secondary_icon_name: string;
	public secondary_icon_pixbuf: GdkPixbuf.Pixbuf;
	public secondary_icon_sensitive: boolean;
	public secondary_icon_stock: string;
	public secondary_icon_storage_type: ImageType;
	public secondary_icon_tooltip_markup: string;
	public secondary_icon_tooltip_text: string;
	public selection_bound: number;
	public shadow_type: ShadowType;
	public tabs: Pango.TabArray;
	public text: string;
	public text_length: number;
	public truncate_multiline: boolean;
	public visibility: boolean;
	public width_chars: number;
	public xalign: gfloat;

	public get_activates_default () : boolean;
	public get_alignment () : gfloat;
	public get_attributes () : Pango.AttrList;
	public get_buffer () : EntryBuffer;
	public get_completion () : EntryCompletion;
	public get_current_icon_drag_source () : number;
	public get_cursor_hadjustment () : Adjustment;
	public get_has_frame () : boolean;
	public get_icon_activatable (icon_pos: EntryIconPosition) : boolean;
	public get_icon_area (icon_pos: EntryIconPosition, icon_area: Gdk.Rectangle) : void;
	public get_icon_at_pos (_x: number, _y: number) : number;
	public get_icon_gicon (icon_pos: EntryIconPosition) : Gio.Icon;
	public get_icon_name (icon_pos: EntryIconPosition) : string;
	public get_icon_pixbuf (icon_pos: EntryIconPosition) : GdkPixbuf.Pixbuf;
	public get_icon_sensitive (icon_pos: EntryIconPosition) : boolean;
	public get_icon_stock (icon_pos: EntryIconPosition) : string;
	public get_icon_storage_type (icon_pos: EntryIconPosition) : ImageType;
	public get_icon_tooltip_markup (icon_pos: EntryIconPosition) : string;
	public get_icon_tooltip_text (icon_pos: EntryIconPosition) : string;
	public get_inner_border () : Border;
	public get_input_hints () : InputHints;
	public get_input_purpose () : InputPurpose;
	public get_invisible_char () : gunichar;
	public get_layout () : Pango.Layout;
	public get_layout_offsets (_x: number, _y: number) : void;
	public get_max_length () : number;
	public get_max_width_chars () : number;
	public get_overwrite_mode () : boolean;
	public get_placeholder_text () : string;
	public get_progress_fraction () : gdouble;
	public get_progress_pulse_step () : gdouble;
	public get_tabs () : Pango.TabArray;
	public get_text () : string;
	public get_text_area (text_area: Gdk.Rectangle) : void;
	public get_text_length () : guint16;
	public get_visibility () : boolean;
	public get_width_chars () : number;
	public grab_focus_without_selecting () : void;
	public im_context_filter_keypress (event: Gdk.EventKey) : boolean;
	public layout_index_to_text_index (layout_index: number) : number;
	public progress_pulse () : void;
	public reset_im_context () : void;
	public set_activates_default (setting: boolean) : void;
	public set_alignment (xalign: gfloat) : void;
	public set_attributes (attrs: Pango.AttrList) : void;
	public set_buffer (buffer: EntryBuffer) : void;
	public set_completion (completion: EntryCompletion) : void;
	public set_cursor_hadjustment (adjustment: Adjustment) : void;
	public set_has_frame (setting: boolean) : void;
	public set_icon_activatable (icon_pos: EntryIconPosition, activatable: boolean) : void;
	public set_icon_drag_source (icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction) : void;
	public set_icon_from_gicon (icon_pos: EntryIconPosition, icon: Gio.Icon) : void;
	public set_icon_from_icon_name (icon_pos: EntryIconPosition, icon_name: string) : void;
	public set_icon_from_pixbuf (icon_pos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_icon_from_stock (icon_pos: EntryIconPosition, stock_id: string) : void;
	public set_icon_sensitive (icon_pos: EntryIconPosition, sensitive: boolean) : void;
	public set_icon_tooltip_markup (icon_pos: EntryIconPosition, tooltip: string) : void;
	public set_icon_tooltip_text (icon_pos: EntryIconPosition, tooltip: string) : void;
	public set_inner_border (border: Border) : void;
	public set_input_hints (hints: InputHints) : void;
	public set_input_purpose (purpose: InputPurpose) : void;
	public set_invisible_char (_ch: gunichar) : void;
	public set_max_length (max: number) : void;
	public set_max_width_chars (n_chars: number) : void;
	public set_overwrite_mode (overwrite: boolean) : void;
	public set_placeholder_text (text: string) : void;
	public set_progress_fraction (fraction: gdouble) : void;
	public set_progress_pulse_step (fraction: gdouble) : void;
	public set_tabs (tabs: Pango.TabArray) : void;
	public set_text (text: string) : void;
	public set_visibility (visible: boolean) : void;
	public set_width_chars (n_chars: number) : void;
	public text_index_to_layout_index (text_index: number) : number;
	public unset_invisible_char () : void;

}


declare class EntryAccessible extends WidgetAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {

}


declare class EntryBuffer extends GObject.Object {

	public length: number;
	public max_length: number;
	public text: string;

	public delete_text (position: number, n_chars: number) : number;
	public emit_deleted_text (position: number, n_chars: number) : void;
	public emit_inserted_text (position: number, chars: string, n_chars: number) : void;
	public get_bytes () : gsize;
	public get_length () : number;
	public get_max_length () : number;
	public get_text () : string;
	public insert_text (position: number, chars: string, n_chars: number) : number;
	public set_max_length (max_length: number) : void;
	public set_text (chars: string, n_chars: number) : void;

}


declare class EntryCompletion extends GObject.Object implements Buildable, CellLayout {

	public cell_area: CellArea;
	public inline_completion: boolean;
	public inline_selection: boolean;
	public minimum_key_length: number;
	public model: TreeModel;
	public popup_completion: boolean;
	public popup_set_width: boolean;
	public popup_single_match: boolean;
	public text_column: number;

	public complete () : void;
	public compute_prefix (key: string) : string;
	public delete_action (index_: number) : void;
	public get_completion_prefix () : string;
	public get_entry () : Widget;
	public get_inline_completion () : boolean;
	public get_inline_selection () : boolean;
	public get_minimum_key_length () : number;
	public get_model () : TreeModel;
	public get_popup_completion () : boolean;
	public get_popup_set_width () : boolean;
	public get_popup_single_match () : boolean;
	public get_text_column () : number;
	public insert_action_markup (index_: number, markup: string) : void;
	public insert_action_text (index_: number, text: string) : void;
	public insert_prefix () : void;
	public set_inline_completion (inline_completion: boolean) : void;
	public set_inline_selection (inline_selection: boolean) : void;
	public set_match_func (_func: EntryCompletionMatchFunc, func_data: gpointer, func_notify: GLib.DestroyNotify) : void;
	public set_minimum_key_length (length: number) : void;
	public set_model (model: TreeModel) : void;
	public set_popup_completion (popup_completion: boolean) : void;
	public set_popup_set_width (popup_set_width: boolean) : void;
	public set_popup_single_match (popup_single_match: boolean) : void;
	public set_text_column (column: number) : void;

}


declare class EntryIconAccessible extends Atk.Object implements Atk.Action, Atk.Component {

}


declare class EventBox extends Bin implements Atk.ImplementorIface, Buildable {

	public above_child: boolean;
	public visible_window: boolean;

	public get_above_child () : boolean;
	public get_visible_window () : boolean;
	public set_above_child (above_child: boolean) : void;
	public set_visible_window (visible_window: boolean) : void;

}


declare class EventController extends GObject.Object {

	public propagation_phase: PropagationPhase;
	public widget: Widget;

	public get_propagation_phase () : PropagationPhase;
	public get_widget () : Widget;
	public handle_event (event: Gdk.Event) : boolean;
	public reset () : void;
	public set_propagation_phase (phase: PropagationPhase) : void;

}


declare class Expander extends Bin implements Atk.ImplementorIface, Buildable {

	public expanded: boolean;
	public label: string;
	public label_fill: boolean;
	public label_widget: Widget;
	public resize_toplevel: boolean;
	public spacing: number;
	public use_markup: boolean;
	public use_underline: boolean;

	public get_expanded () : boolean;
	public get_label () : string;
	public get_label_fill () : boolean;
	public get_label_widget () : Widget;
	public get_resize_toplevel () : boolean;
	public get_spacing () : number;
	public get_use_markup () : boolean;
	public get_use_underline () : boolean;
	public set_expanded (expanded: boolean) : void;
	public set_label (label: string) : void;
	public set_label_fill (label_fill: boolean) : void;
	public set_label_widget (label_widget: Widget) : void;
	public set_resize_toplevel (resize_toplevel: boolean) : void;
	public set_spacing (spacing: number) : void;
	public set_use_markup (use_markup: boolean) : void;
	public set_use_underline (use_underline: boolean) : void;

}


declare class ExpanderAccessible extends ContainerAccessible implements Atk.Action, Atk.Component {

}


declare class FileChooserButton extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {

	public dialog: FileChooser;
	public focus_on_click: boolean;
	public title: string;
	public width_chars: number;

	public get_focus_on_click () : boolean;
	public get_title () : string;
	public get_width_chars () : number;
	public set_focus_on_click (focus_on_click: boolean) : void;
	public set_title (title: string) : void;
	public set_width_chars (n_chars: number) : void;

}


declare class FileChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FileChooser {

}


declare class FileChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {

	public search_mode: boolean;
	public subtitle: string;

}


declare class FileFilter extends GObject.InitiallyUnowned implements Buildable {

	public add_custom (needed: FileFilterFlags, _func: FileFilterFunc, data: gpointer, notify: GLib.DestroyNotify) : void;
	public add_mime_type (mime_type: string) : void;
	public add_pattern (pattern: string) : void;
	public add_pixbuf_formats () : void;
	public filter (filter_info: FileFilterInfo) : boolean;
	public get_name () : string;
	public get_needed () : FileFilterFlags;
	public set_name (name: string) : void;

}


declare class Fixed extends Container implements Atk.ImplementorIface, Buildable {

	public move (widget: Widget, _x: number, _y: number) : void;
	public put (widget: Widget, _x: number, _y: number) : void;

}


declare class FlowBox extends Container implements Atk.ImplementorIface, Buildable, Orientable {

	public activate_on_single_click: boolean;
	public column_spacing: number;
	public homogeneous: boolean;
	public max_children_per_line: number;
	public min_children_per_line: number;
	public row_spacing: number;
	public selection_mode: SelectionMode;

	public bind_model (model: Gio.ListModel, create_widget_func: FlowBoxCreateWidgetFunc, user_data: gpointer, user_data_free_func: GLib.DestroyNotify) : void;
	public get_activate_on_single_click () : boolean;
	public get_child_at_index (idx: number) : FlowBoxChild;
	public get_column_spacing () : number;
	public get_homogeneous () : boolean;
	public get_max_children_per_line () : number;
	public get_min_children_per_line () : number;
	public get_row_spacing () : number;
	public get_selected_children () : GLib.List;
	public get_selection_mode () : SelectionMode;
	public insert (widget: Widget, position: number) : void;
	public invalidate_filter () : void;
	public invalidate_sort () : void;
	public select_all () : void;
	public select_child (child: FlowBoxChild) : void;
	public selected_foreach (_func: FlowBoxForeachFunc, data: gpointer) : void;
	public set_activate_on_single_click (single: boolean) : void;
	public set_column_spacing (spacing: number) : void;
	public set_filter_func (filter_func: FlowBoxFilterFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_hadjustment (adjustment: Adjustment) : void;
	public set_homogeneous (homogeneous: boolean) : void;
	public set_max_children_per_line (n_children: number) : void;
	public set_min_children_per_line (n_children: number) : void;
	public set_row_spacing (spacing: number) : void;
	public set_selection_mode (mode: SelectionMode) : void;
	public set_sort_func (sort_func: FlowBoxSortFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_vadjustment (adjustment: Adjustment) : void;
	public unselect_all () : void;
	public unselect_child (child: FlowBoxChild) : void;

}


declare class FlowBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {

}


declare class FlowBoxChild extends Bin implements Atk.ImplementorIface, Buildable {

	public changed () : void;
	public get_index () : number;
	public is_selected () : boolean;

}


declare class FlowBoxChildAccessible extends ContainerAccessible implements Atk.Component {

}


declare class FontButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, FontChooser {

	public font_name: string;
	public show_size: boolean;
	public show_style: boolean;
	public title: string;
	public use_font: boolean;
	public use_size: boolean;

	public get_font_name () : string;
	public get_show_size () : boolean;
	public get_show_style () : boolean;
	public get_title () : string;
	public get_use_font () : boolean;
	public get_use_size () : boolean;
	public set_font_name (fontname: string) : boolean;
	public set_show_size (show_size: boolean) : void;
	public set_show_style (show_style: boolean) : void;
	public set_title (title: string) : void;
	public set_use_font (use_font: boolean) : void;
	public set_use_size (use_size: boolean) : void;

}


declare class FontChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FontChooser {

}


declare class FontChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FontChooser, Orientable {

}


declare class FontSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public font_name: string;
	public preview_text: string;

	public get_face () : Pango.FontFace;
	public get_face_list () : Widget;
	public get_family () : Pango.FontFamily;
	public get_family_list () : Widget;
	public get_font_name () : string;
	public get_preview_entry () : Widget;
	public get_preview_text () : string;
	public get_size () : number;
	public get_size_entry () : Widget;
	public get_size_list () : Widget;
	public set_font_name (fontname: string) : boolean;
	public set_preview_text (text: string) : void;

}


declare class FontSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {

	public get_cancel_button () : Widget;
	public get_font_name () : string;
	public get_font_selection () : Widget;
	public get_ok_button () : Widget;
	public get_preview_text () : string;
	public set_font_name (fontname: string) : boolean;
	public set_preview_text (text: string) : void;

}


declare class Frame extends Bin implements Atk.ImplementorIface, Buildable {

	public label: string;
	public label_widget: Widget;
	public label_xalign: gfloat;
	public label_yalign: gfloat;
	public shadow_type: ShadowType;

	public get_label () : string;
	public get_label_align (xalign: gfloat, yalign: gfloat) : void;
	public get_label_widget () : Widget;
	public get_shadow_type () : ShadowType;
	public set_label (label: string) : void;
	public set_label_align (xalign: gfloat, yalign: gfloat) : void;
	public set_label_widget (label_widget: Widget) : void;
	public set_shadow_type (_type: ShadowType) : void;

}


declare class FrameAccessible extends ContainerAccessible implements Atk.Component {

}


declare class GLArea extends Widget implements Atk.ImplementorIface, Buildable {

	public auto_render: boolean;
	public context: Gdk.GLContext;
	public has_alpha: boolean;
	public has_depth_buffer: boolean;
	public has_stencil_buffer: boolean;

	public attach_buffers () : void;
	public get_auto_render () : boolean;
	public get_context () : Gdk.GLContext;
	public get_error () : GLib.Error;
	public get_has_alpha () : boolean;
	public get_has_depth_buffer () : boolean;
	public get_has_stencil_buffer () : boolean;
	public get_required_version (major: number, minor: number) : void;
	public make_current () : void;
	public queue_render () : void;
	public set_auto_render (auto_render: boolean) : void;
	public set_error (error: GLib.Error) : void;
	public set_has_alpha (has_alpha: boolean) : void;
	public set_has_depth_buffer (has_depth_buffer: boolean) : void;
	public set_has_stencil_buffer (has_stencil_buffer: boolean) : void;
	public set_required_version (major: number, minor: number) : void;

}


declare class Gesture extends EventController {

	public n_points: number;
	public window: Gdk.Window;

	public get_bounding_box (rect: Gdk.Rectangle) : boolean;
	public get_bounding_box_center (_x: gdouble, _y: gdouble) : boolean;
	public get_device () : Gdk.Device;
	public get_group () : GLib.List;
	public get_last_event (sequence: Gdk.EventSequence) : Gdk.Event;
	public get_last_updated_sequence () : Gdk.EventSequence;
	public get_point (sequence: Gdk.EventSequence, _x: gdouble, _y: gdouble) : boolean;
	public get_sequence_state (sequence: Gdk.EventSequence) : EventSequenceState;
	public get_sequences () : GLib.List;
	public get_window () : Gdk.Window;
	public group (gesture: Gesture) : void;
	public handles_sequence (sequence: Gdk.EventSequence) : boolean;
	public is_active () : boolean;
	public is_grouped_with (other: Gesture) : boolean;
	public is_recognized () : boolean;
	public set_sequence_state (sequence: Gdk.EventSequence, state: EventSequenceState) : boolean;
	public set_state (state: EventSequenceState) : boolean;
	public set_window (window: Gdk.Window) : void;
	public ungroup () : void;

}


declare class GestureDrag extends GestureSingle {

	public get_offset (_x: gdouble, _y: gdouble) : boolean;
	public get_start_point (_x: gdouble, _y: gdouble) : boolean;

}


declare class GestureLongPress extends GestureSingle {

	public delay_factor: gdouble;

}


declare class GestureMultiPress extends GestureSingle {

	public get_area (rect: Gdk.Rectangle) : boolean;
	public set_area (rect: Gdk.Rectangle) : void;

}


declare class GesturePan extends GestureDrag {

	public orientation: Orientation;

	public get_orientation () : Orientation;
	public set_orientation (orientation: Orientation) : void;

}


declare class GestureRotate extends Gesture {

	public get_angle_delta () : gdouble;

}


declare class GestureSingle extends Gesture {

	public button: number;
	public exclusive: boolean;
	public touch_only: boolean;

	public get_button () : number;
	public get_current_button () : number;
	public get_current_sequence () : Gdk.EventSequence;
	public get_exclusive () : boolean;
	public get_touch_only () : boolean;
	public set_button (button: number) : void;
	public set_exclusive (exclusive: boolean) : void;
	public set_touch_only (touch_only: boolean) : void;

}


declare class GestureSwipe extends GestureSingle {

	public get_velocity (velocity_x: gdouble, velocity_y: gdouble) : boolean;

}


declare class GestureZoom extends Gesture {

	public get_scale_delta () : gdouble;

}


declare class Grid extends Container implements Atk.ImplementorIface, Buildable, Orientable {

	public baseline_row: number;
	public column_homogeneous: boolean;
	public column_spacing: number;
	public row_homogeneous: boolean;
	public row_spacing: number;

	public attach (child: Widget, left: number, top: number, width: number, height: number) : void;
	public attach_next_to (child: Widget, sibling: Widget, side: PositionType, width: number, height: number) : void;
	public get_baseline_row () : number;
	public get_child_at (left: number, top: number) : Widget;
	public get_column_homogeneous () : boolean;
	public get_column_spacing () : number;
	public get_row_baseline_position (_row: number) : BaselinePosition;
	public get_row_homogeneous () : boolean;
	public get_row_spacing () : number;
	public insert_column (position: number) : void;
	public insert_next_to (sibling: Widget, side: PositionType) : void;
	public insert_row (position: number) : void;
	public remove_column (position: number) : void;
	public remove_row (position: number) : void;
	public set_baseline_row (_row: number) : void;
	public set_column_homogeneous (homogeneous: boolean) : void;
	public set_column_spacing (spacing: number) : void;
	public set_row_baseline_position (_row: number, pos: BaselinePosition) : void;
	public set_row_homogeneous (homogeneous: boolean) : void;
	public set_row_spacing (spacing: number) : void;

}


declare class HBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HSV extends Widget implements Atk.ImplementorIface, Buildable {

	public get_color (_h: gdouble, _s: gdouble, _v: gdouble) : void;
	public get_metrics (size: number, ring_width: number) : void;
	public is_adjusting () : boolean;
	public set_color (_h: gdouble, _s: gdouble, _v: gdouble) : void;
	public set_metrics (size: number, ring_width: number) : void;

}


declare class HScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class HandleBox extends Bin implements Atk.ImplementorIface, Buildable {

	public child_detached: boolean;
	public handle_position: PositionType;
	public shadow_type: ShadowType;
	public snap_edge: PositionType;
	public snap_edge_set: boolean;

	public get_child_detached () : boolean;
	public get_handle_position () : PositionType;
	public get_shadow_type () : ShadowType;
	public get_snap_edge () : PositionType;
	public set_handle_position (position: PositionType) : void;
	public set_shadow_type (_type: ShadowType) : void;
	public set_snap_edge (edge: PositionType) : void;

}


declare class HeaderBar extends Container implements Atk.ImplementorIface, Buildable {

	public custom_title: Widget;
	public decoration_layout: string;
	public decoration_layout_set: boolean;
	public has_subtitle: boolean;
	public show_close_button: boolean;
	public spacing: number;
	public subtitle: string;
	public title: string;

	public get_custom_title () : Widget;
	public get_decoration_layout () : string;
	public get_has_subtitle () : boolean;
	public get_show_close_button () : boolean;
	public get_subtitle () : string;
	public get_title () : string;
	public pack_end (child: Widget) : void;
	public pack_start (child: Widget) : void;
	public set_custom_title (title_widget: Widget) : void;
	public set_decoration_layout (layout: string) : void;
	public set_has_subtitle (setting: boolean) : void;
	public set_show_close_button (setting: boolean) : void;
	public set_subtitle (subtitle: string) : void;
	public set_title (title: string) : void;

}


declare class IMContext extends GObject.Object {

	public input_hints: InputHints;
	public input_purpose: InputPurpose;

	public delete_surrounding (offset: number, n_chars: number) : boolean;
	public filter_keypress (event: Gdk.EventKey) : boolean;
	public focus_in () : void;
	public focus_out () : void;
	public get_preedit_string (_str: string, attrs: Pango.AttrList, cursor_pos: number) : void;
	public get_surrounding (text: string, cursor_index: number) : boolean;
	public reset () : void;
	public set_client_window (window: Gdk.Window) : void;
	public set_cursor_location (area: Gdk.Rectangle) : void;
	public set_surrounding (text: string, len: number, cursor_index: number) : void;
	public set_use_preedit (use_preedit: boolean) : void;

}


declare class IMContextSimple extends IMContext {

	public add_table (data: guint16[], max_seq_len: number, n_seqs: number) : void;

}


declare class IMMulticontext extends IMContext {

	public append_menuitems (menushell: MenuShell) : void;
	public get_context_id () : string;
	public set_context_id (context_id: string) : void;

}


declare class IconFactory extends GObject.Object implements Buildable {

	public add (stock_id: string, icon_set: IconSet) : void;
	public add_default () : void;
	public lookup (stock_id: string) : IconSet;
	public remove_default () : void;

}


declare class IconInfo extends GObject.Object {

	public copy () : IconInfo;
	public free () : void;
	public get_attach_points (points: Gdk.Point[], n_points: number) : boolean;
	public get_base_scale () : number;
	public get_base_size () : number;
	public get_builtin_pixbuf () : GdkPixbuf.Pixbuf;
	public get_display_name () : string;
	public get_embedded_rect (rectangle: Gdk.Rectangle) : boolean;
	public get_filename () : filename;
	public is_symbolic () : boolean;
	public load_icon () : GdkPixbuf.Pixbuf;
	public load_icon_async (cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: gpointer) : void;
	public load_icon_finish (res: Gio.AsyncResult) : GdkPixbuf.Pixbuf;
	public load_surface (for_window: Gdk.Window) : cairo.Surface;
	public load_symbolic (fg: Gdk.RGBA, success_color: Gdk.RGBA, warning_color: Gdk.RGBA, error_color: Gdk.RGBA, was_symbolic: boolean) : GdkPixbuf.Pixbuf;
	public load_symbolic_async (fg: Gdk.RGBA, success_color: Gdk.RGBA, warning_color: Gdk.RGBA, error_color: Gdk.RGBA, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: gpointer) : void;
	public load_symbolic_finish (res: Gio.AsyncResult, was_symbolic: boolean) : GdkPixbuf.Pixbuf;
	public load_symbolic_for_context (context: StyleContext, was_symbolic: boolean) : GdkPixbuf.Pixbuf;
	public load_symbolic_for_context_async (context: StyleContext, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback, user_data: gpointer) : void;
	public load_symbolic_for_context_finish (res: Gio.AsyncResult, was_symbolic: boolean) : GdkPixbuf.Pixbuf;
	public load_symbolic_for_style (style: Style, state: StateType, was_symbolic: boolean) : GdkPixbuf.Pixbuf;
	public set_raw_coordinates (raw_coordinates: boolean) : void;

}


declare class IconTheme extends GObject.Object {

	public add_resource_path (path: string) : void;
	public append_search_path (path: filename) : void;
	public choose_icon (icon_names: string[], size: number, flags: IconLookupFlags) : IconInfo;
	public choose_icon_for_scale (icon_names: string[], size: number, scale: number, flags: IconLookupFlags) : IconInfo;
	public get_example_icon_name () : string;
	public get_icon_sizes (icon_name: string) : number[];
	public get_search_path (path: filename[], n_elements: number) : void;
	public has_icon (icon_name: string) : boolean;
	public list_contexts () : GLib.List;
	public list_icons (context: string) : GLib.List;
	public load_icon (icon_name: string, size: number, flags: IconLookupFlags) : GdkPixbuf.Pixbuf;
	public load_icon_for_scale (icon_name: string, size: number, scale: number, flags: IconLookupFlags) : GdkPixbuf.Pixbuf;
	public load_surface (icon_name: string, size: number, scale: number, for_window: Gdk.Window, flags: IconLookupFlags) : cairo.Surface;
	public lookup_by_gicon (icon: Gio.Icon, size: number, flags: IconLookupFlags) : IconInfo;
	public lookup_by_gicon_for_scale (icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags) : IconInfo;
	public lookup_icon (icon_name: string, size: number, flags: IconLookupFlags) : IconInfo;
	public lookup_icon_for_scale (icon_name: string, size: number, scale: number, flags: IconLookupFlags) : IconInfo;
	public prepend_search_path (path: filename) : void;
	public rescan_if_needed () : boolean;
	public set_custom_theme (theme_name: string) : void;
	public set_screen (screen: Gdk.Screen) : void;
	public set_search_path (path: filename[], n_elements: number) : void;

}


declare class IconView extends Container implements Atk.ImplementorIface, Buildable, CellLayout, Scrollable {

	public activate_on_single_click: boolean;
	public cell_area: CellArea;
	public column_spacing: number;
	public columns: number;
	public item_orientation: Orientation;
	public item_padding: number;
	public item_width: number;
	public margin: number;
	public markup_column: number;
	public model: TreeModel;
	public pixbuf_column: number;
	public reorderable: boolean;
	public row_spacing: number;
	public selection_mode: SelectionMode;
	public spacing: number;
	public text_column: number;
	public tooltip_column: number;

	public convert_widget_to_bin_window_coords (wx: number, wy: number, bx: number, _by: number) : void;
	public create_drag_icon (path: TreePath) : cairo.Surface;
	public enable_model_drag_dest (targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public enable_model_drag_source (start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public get_activate_on_single_click () : boolean;
	public get_cell_rect (path: TreePath, cell: CellRenderer, rect: Gdk.Rectangle) : boolean;
	public get_column_spacing () : number;
	public get_columns () : number;
	public get_cursor (path: TreePath, cell: CellRenderer) : boolean;
	public get_dest_item_at_pos (drag_x: number, drag_y: number, path: TreePath, pos: IconViewDropPosition) : boolean;
	public get_drag_dest_item (path: TreePath, pos: IconViewDropPosition) : void;
	public get_item_at_pos (_x: number, _y: number, path: TreePath, cell: CellRenderer) : boolean;
	public get_item_column (path: TreePath) : number;
	public get_item_orientation () : Orientation;
	public get_item_padding () : number;
	public get_item_row (path: TreePath) : number;
	public get_item_width () : number;
	public get_margin () : number;
	public get_markup_column () : number;
	public get_model () : TreeModel;
	public get_path_at_pos (_x: number, _y: number) : TreePath;
	public get_pixbuf_column () : number;
	public get_reorderable () : boolean;
	public get_row_spacing () : number;
	public get_selected_items () : GLib.List;
	public get_selection_mode () : SelectionMode;
	public get_spacing () : number;
	public get_text_column () : number;
	public get_tooltip_column () : number;
	public get_tooltip_context (_x: number, _y: number, keyboard_tip: boolean, model: TreeModel, path: TreePath, iter: TreeIter) : boolean;
	public get_visible_range (start_path: TreePath, end_path: TreePath) : boolean;
	public item_activated (path: TreePath) : void;
	public path_is_selected (path: TreePath) : boolean;
	public scroll_to_path (path: TreePath, use_align: boolean, row_align: gfloat, col_align: gfloat) : void;
	public select_all () : void;
	public select_path (path: TreePath) : void;
	public selected_foreach (_func: IconViewForeachFunc, data: gpointer) : void;
	public set_activate_on_single_click (single: boolean) : void;
	public set_column_spacing (column_spacing: number) : void;
	public set_columns (columns: number) : void;
	public set_cursor (path: TreePath, cell: CellRenderer, start_editing: boolean) : void;
	public set_drag_dest_item (path: TreePath, pos: IconViewDropPosition) : void;
	public set_item_orientation (orientation: Orientation) : void;
	public set_item_padding (item_padding: number) : void;
	public set_item_width (item_width: number) : void;
	public set_margin (margin: number) : void;
	public set_markup_column (column: number) : void;
	public set_model (model: TreeModel) : void;
	public set_pixbuf_column (column: number) : void;
	public set_reorderable (reorderable: boolean) : void;
	public set_row_spacing (row_spacing: number) : void;
	public set_selection_mode (mode: SelectionMode) : void;
	public set_spacing (spacing: number) : void;
	public set_text_column (column: number) : void;
	public set_tooltip_cell (tooltip: Tooltip, path: TreePath, cell: CellRenderer) : void;
	public set_tooltip_column (column: number) : void;
	public set_tooltip_item (tooltip: Tooltip, path: TreePath) : void;
	public unselect_all () : void;
	public unselect_path (path: TreePath) : void;
	public unset_model_drag_dest () : void;
	public unset_model_drag_source () : void;

}


declare class IconViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {

}


declare class Image extends Misc implements Atk.ImplementorIface, Buildable {

	public file: string;
	public gicon: Gio.Icon;
	public icon_name: string;
	public icon_set: IconSet;
	public icon_size: number;
	public pixbuf: GdkPixbuf.Pixbuf;
	public pixbuf_animation: GdkPixbuf.PixbufAnimation;
	public pixel_size: number;
	public resource: string;
	public stock: string;
	public storage_type: ImageType;
	public surface: cairo.Surface;
	public use_fallback: boolean;

	public clear () : void;
	public get_animation () : GdkPixbuf.PixbufAnimation;
	public get_gicon (gicon: Gio.Icon, size: number) : void;
	public get_icon_name (icon_name: string, size: number) : void;
	public get_icon_set (icon_set: IconSet, size: number) : void;
	public get_pixbuf () : GdkPixbuf.Pixbuf;
	public get_pixel_size () : number;
	public get_stock (stock_id: string, size: number) : void;
	public get_storage_type () : ImageType;
	public set_from_animation (animation: GdkPixbuf.PixbufAnimation) : void;
	public set_from_file (filename: filename) : void;
	public set_from_gicon (icon: Gio.Icon, size: number) : void;
	public set_from_icon_name (icon_name: string, size: number) : void;
	public set_from_icon_set (icon_set: IconSet, size: number) : void;
	public set_from_pixbuf (pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_from_resource (resource_path: string) : void;
	public set_from_stock (stock_id: string, size: number) : void;
	public set_from_surface (surface: cairo.Surface) : void;
	public set_pixel_size (pixel_size: number) : void;

}


declare class ImageAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {

}


declare class ImageCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class ImageMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public accel_group: AccelGroup;
	public always_show_image: boolean;
	public image: Widget;
	public use_stock: boolean;

	public get_always_show_image () : boolean;
	public get_image () : Widget;
	public get_use_stock () : boolean;
	public set_accel_group (accel_group: AccelGroup) : void;
	public set_always_show_image (always_show: boolean) : void;
	public set_image (image: Widget) : void;
	public set_use_stock (use_stock: boolean) : void;

}


declare class InfoBar extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public message_type: MessageType;
	public show_close_button: boolean;

	public add_action_widget (child: Widget, response_id: number) : void;
	public add_button (button_text: string, response_id: number) : Button;
	public add_buttons (first_button_text: string) : void;
	public get_action_area () : Widget;
	public get_content_area () : Widget;
	public get_message_type () : MessageType;
	public get_show_close_button () : boolean;
	public response (response_id: number) : void;
	public set_default_response (response_id: number) : void;
	public set_message_type (message_type: MessageType) : void;
	public set_response_sensitive (response_id: number, setting: boolean) : void;
	public set_show_close_button (setting: boolean) : void;

}


declare class Invisible extends Widget implements Atk.ImplementorIface, Buildable {

	public screen: Gdk.Screen;

	public get_screen () : Gdk.Screen;
	public set_screen (screen: Gdk.Screen) : void;

}


declare class Label extends Misc implements Atk.ImplementorIface, Buildable {

	public angle: gdouble;
	public attributes: Pango.AttrList;
	public cursor_position: number;
	public ellipsize: Pango.EllipsizeMode;
	public justify: Justification;
	public label: string;
	public lines: number;
	public max_width_chars: number;
	public mnemonic_keyval: number;
	public mnemonic_widget: Widget;
	public pattern: string;
	public selectable: boolean;
	public selection_bound: number;
	public single_line_mode: boolean;
	public track_visited_links: boolean;
	public use_markup: boolean;
	public use_underline: boolean;
	public width_chars: number;
	public wrap: boolean;
	public wrap_mode: Pango.WrapMode;
	public xalign: gfloat;
	public yalign: gfloat;

	public get_angle () : gdouble;
	public get_attributes () : Pango.AttrList;
	public get_current_uri () : string;
	public get_ellipsize () : Pango.EllipsizeMode;
	public get_justify () : Justification;
	public get_label () : string;
	public get_layout () : Pango.Layout;
	public get_layout_offsets (_x: number, _y: number) : void;
	public get_line_wrap () : boolean;
	public get_line_wrap_mode () : Pango.WrapMode;
	public get_lines () : number;
	public get_max_width_chars () : number;
	public get_mnemonic_keyval () : number;
	public get_mnemonic_widget () : Widget;
	public get_selectable () : boolean;
	public get_selection_bounds (start: number, _end: number) : boolean;
	public get_single_line_mode () : boolean;
	public get_text () : string;
	public get_track_visited_links () : boolean;
	public get_use_markup () : boolean;
	public get_use_underline () : boolean;
	public get_width_chars () : number;
	public get_xalign () : gfloat;
	public get_yalign () : gfloat;
	public select_region (start_offset: number, end_offset: number) : void;
	public set_angle (angle: gdouble) : void;
	public set_attributes (attrs: Pango.AttrList) : void;
	public set_ellipsize (mode: Pango.EllipsizeMode) : void;
	public set_justify (jtype: Justification) : void;
	public set_label (_str: string) : void;
	public set_line_wrap (wrap: boolean) : void;
	public set_line_wrap_mode (wrap_mode: Pango.WrapMode) : void;
	public set_lines (lines: number) : void;
	public set_markup (_str: string) : void;
	public set_markup_with_mnemonic (_str: string) : void;
	public set_max_width_chars (n_chars: number) : void;
	public set_mnemonic_widget (widget: Widget) : void;
	public set_pattern (pattern: string) : void;
	public set_selectable (setting: boolean) : void;
	public set_single_line_mode (single_line_mode: boolean) : void;
	public set_text (_str: string) : void;
	public set_text_with_mnemonic (_str: string) : void;
	public set_track_visited_links (track_links: boolean) : void;
	public set_use_markup (setting: boolean) : void;
	public set_use_underline (setting: boolean) : void;
	public set_width_chars (n_chars: number) : void;
	public set_xalign (xalign: gfloat) : void;
	public set_yalign (yalign: gfloat) : void;

}


declare class LabelAccessible extends WidgetAccessible implements Atk.Component, Atk.Hypertext, Atk.Text {

}


declare class Layout extends Container implements Atk.ImplementorIface, Buildable, Scrollable {

	public height: number;
	public width: number;

	public get_bin_window () : Gdk.Window;
	public get_hadjustment () : Adjustment;
	public get_size (width: number, height: number) : void;
	public get_vadjustment () : Adjustment;
	public move (child_widget: Widget, _x: number, _y: number) : void;
	public put (child_widget: Widget, _x: number, _y: number) : void;
	public set_hadjustment (adjustment: Adjustment) : void;
	public set_size (width: number, height: number) : void;
	public set_vadjustment (adjustment: Adjustment) : void;

}


declare class LevelBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {

	public inverted: boolean;
	public max_value: gdouble;
	public min_value: gdouble;
	public mode: LevelBarMode;
	public value: gdouble;

	public add_offset_value (name: string, value: gdouble) : void;
	public get_inverted () : boolean;
	public get_max_value () : gdouble;
	public get_min_value () : gdouble;
	public get_mode () : LevelBarMode;
	public get_offset_value (name: string, value: gdouble) : boolean;
	public get_value () : gdouble;
	public remove_offset_value (name: string) : void;
	public set_inverted (inverted: boolean) : void;
	public set_max_value (value: gdouble) : void;
	public set_min_value (value: gdouble) : void;
	public set_mode (mode: LevelBarMode) : void;
	public set_value (value: gdouble) : void;

}


declare class LevelBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {

}


declare class LinkButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public uri: string;
	public visited: boolean;

	public get_uri () : string;
	public get_visited () : boolean;
	public set_uri (uri: string) : void;
	public set_visited (visited: boolean) : void;

}


declare class LinkButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.HyperlinkImpl, Atk.Image {

}


declare class ListBox extends Container implements Atk.ImplementorIface, Buildable {

	public activate_on_single_click: boolean;
	public selection_mode: SelectionMode;

	public bind_model (model: Gio.ListModel, create_widget_func: ListBoxCreateWidgetFunc, user_data: gpointer, user_data_free_func: GLib.DestroyNotify) : void;
	public drag_highlight_row (_row: ListBoxRow) : void;
	public drag_unhighlight_row () : void;
	public get_activate_on_single_click () : boolean;
	public get_adjustment () : Adjustment;
	public get_row_at_index (index_: number) : ListBoxRow;
	public get_row_at_y (_y: number) : ListBoxRow;
	public get_selected_row () : ListBoxRow;
	public get_selected_rows () : GLib.List;
	public get_selection_mode () : SelectionMode;
	public insert (child: Widget, position: number) : void;
	public invalidate_filter () : void;
	public invalidate_headers () : void;
	public invalidate_sort () : void;
	public prepend (child: Widget) : void;
	public select_all () : void;
	public select_row (_row: ListBoxRow) : void;
	public selected_foreach (_func: ListBoxForeachFunc, data: gpointer) : void;
	public set_activate_on_single_click (single: boolean) : void;
	public set_adjustment (adjustment: Adjustment) : void;
	public set_filter_func (filter_func: ListBoxFilterFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_header_func (update_header: ListBoxUpdateHeaderFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_placeholder (placeholder: Widget) : void;
	public set_selection_mode (mode: SelectionMode) : void;
	public set_sort_func (sort_func: ListBoxSortFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public unselect_all () : void;
	public unselect_row (_row: ListBoxRow) : void;

}


declare class ListBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {

}


declare class ListBoxRow extends Bin implements Atk.ImplementorIface, Buildable {

	public activatable: boolean;
	public selectable: boolean;

	public changed () : void;
	public get_activatable () : boolean;
	public get_header () : Widget;
	public get_index () : number;
	public get_selectable () : boolean;
	public is_selected () : boolean;
	public set_activatable (activatable: boolean) : void;
	public set_header (header: Widget) : void;
	public set_selectable (selectable: boolean) : void;

}


declare class ListBoxRowAccessible extends ContainerAccessible implements Atk.Component {

}


declare class ListStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {

	public append (iter: TreeIter) : void;
	public clear () : void;
	public insert (iter: TreeIter, position: number) : void;
	public insert_after (iter: TreeIter, sibling: TreeIter) : void;
	public insert_before (iter: TreeIter, sibling: TreeIter) : void;
	public insert_with_values (iter: TreeIter, position: number) : void;
	public insert_with_valuesv (iter: TreeIter, position: number, columns: number[], values: GObject.Value[], n_values: number) : void;
	public iter_is_valid (iter: TreeIter) : boolean;
	public move_after (iter: TreeIter, position: TreeIter) : void;
	public move_before (iter: TreeIter, position: TreeIter) : void;
	public prepend (iter: TreeIter) : void;
	public remove (iter: TreeIter) : boolean;
	public reorder (new_order: number[]) : void;
	public set (iter: TreeIter) : void;
	public set_column_types (n_columns: number, types: GType[]) : void;
	public set_valist (iter: TreeIter, var_args: va_list) : void;
	public set_value (iter: TreeIter, column: number, value: GObject.Value) : void;
	public set_valuesv (iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number) : void;
	public swap (_a: TreeIter, _b: TreeIter) : void;

}


declare class LockButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public permission: Gio.Permission;
	public text_lock: string;
	public text_unlock: string;
	public tooltip_lock: string;
	public tooltip_not_authorized: string;
	public tooltip_unlock: string;

	public get_permission () : Gio.Permission;
	public set_permission (permission: Gio.Permission) : void;

}


declare class LockButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class Menu extends MenuShell implements Atk.ImplementorIface, Buildable {

	public accel_group: AccelGroup;
	public accel_path: string;
	public active: number;
	public attach_widget: Widget;
	public monitor: number;
	public reserve_toggle_size: boolean;
	public tearoff_state: boolean;
	public tearoff_title: string;

	public attach (child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number) : void;
	public attach_to_widget (attach_widget: Widget, detacher: MenuDetachFunc) : void;
	public detach () : void;
	public get_accel_group () : AccelGroup;
	public get_accel_path () : string;
	public get_active () : Widget;
	public get_attach_widget () : Widget;
	public get_monitor () : number;
	public get_reserve_toggle_size () : boolean;
	public get_tearoff_state () : boolean;
	public get_title () : string;
	public popdown () : void;
	public popup (parent_menu_shell: Widget, parent_menu_item: Widget, _func: MenuPositionFunc, data: gpointer, button: number, activate_time: guint32) : void;
	public popup_for_device (device: Gdk.Device, parent_menu_shell: Widget, parent_menu_item: Widget, _func: MenuPositionFunc, data: gpointer, destroy: GLib.DestroyNotify, button: number, activate_time: guint32) : void;
	public reorder_child (child: Widget, position: number) : void;
	public reposition () : void;
	public set_accel_group (accel_group: AccelGroup) : void;
	public set_accel_path (accel_path: string) : void;
	public set_active (index: number) : void;
	public set_monitor (monitor_num: number) : void;
	public set_reserve_toggle_size (reserve_toggle_size: boolean) : void;
	public set_screen (screen: Gdk.Screen) : void;
	public set_tearoff_state (torn_off: boolean) : void;
	public set_title (title: string) : void;

}


declare class MenuAccessible extends MenuShellAccessible implements Atk.Component, Atk.Selection {

}


declare class MenuBar extends MenuShell implements Atk.ImplementorIface, Buildable {

	public child_pack_direction: PackDirection;
	public pack_direction: PackDirection;

	public get_child_pack_direction () : PackDirection;
	public get_pack_direction () : PackDirection;
	public set_child_pack_direction (child_pack_dir: PackDirection) : void;
	public set_pack_direction (pack_dir: PackDirection) : void;

}


declare class MenuButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public align_widget: Container;
	public direction: ArrowType;
	public menu_model: Gio.MenuModel;
	public popover: Popover;
	public popup: Menu;
	public use_popover: boolean;

	public get_align_widget () : Widget;
	public get_direction () : ArrowType;
	public get_menu_model () : Gio.MenuModel;
	public get_popover () : Popover;
	public get_popup () : Menu;
	public get_use_popover () : boolean;
	public set_align_widget (align_widget: Widget) : void;
	public set_direction (direction: ArrowType) : void;
	public set_menu_model (menu_model: Gio.MenuModel) : void;
	public set_popover (popover: Widget) : void;
	public set_popup (menu: Widget) : void;
	public set_use_popover (use_popover: boolean) : void;

}


declare class MenuButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class MenuItem extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public accel_path: string;
	public label: string;
	public right_justified: boolean;
	public submenu: Menu;
	public use_underline: boolean;

	public activate () : void;
	public deselect () : void;
	public get_accel_path () : string;
	public get_label () : string;
	public get_reserve_indicator () : boolean;
	public get_right_justified () : boolean;
	public get_submenu () : Widget;
	public get_use_underline () : boolean;
	public select () : void;
	public set_accel_path (accel_path: string) : void;
	public set_label (label: string) : void;
	public set_reserve_indicator (reserve: boolean) : void;
	public set_right_justified (right_justified: boolean) : void;
	public set_submenu (submenu: Menu) : void;
	public set_use_underline (setting: boolean) : void;
	public toggle_size_allocate (allocation: number) : void;
	public toggle_size_request (requisition: number) : void;

}


declare class MenuItemAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {

}


declare class MenuShell extends Container implements Atk.ImplementorIface, Buildable {

	public take_focus: boolean;

	public activate_item (menu_item: Widget, force_deactivate: boolean) : void;
	public append (child: MenuItem) : void;
	public bind_model (model: Gio.MenuModel, action_namespace: string, with_separators: boolean) : void;
	public cancel () : void;
	public deactivate () : void;
	public deselect () : void;
	public get_parent_shell () : Widget;
	public get_selected_item () : Widget;
	public get_take_focus () : boolean;
	public insert (child: Widget, position: number) : void;
	public prepend (child: Widget) : void;
	public select_first (search_sensitive: boolean) : void;
	public select_item (menu_item: Widget) : void;
	public set_take_focus (take_focus: boolean) : void;

}


declare class MenuShellAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {

}


declare class MenuToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public menu: Menu;

	public get_menu () : Widget;
	public set_arrow_tooltip_markup (markup: string) : void;
	public set_arrow_tooltip_text (text: string) : void;
	public set_menu (menu: Widget) : void;

}


declare class MessageDialog extends Dialog implements Atk.ImplementorIface, Buildable {

	public buttons: ButtonsType;
	public image: Widget;
	public message_area: Widget;
	public message_type: MessageType;
	public secondary_text: string;
	public secondary_use_markup: boolean;
	public text: string;
	public use_markup: boolean;

	public format_secondary_markup (message_format: string) : void;
	public format_secondary_text (message_format: string) : void;
	public get_image () : Widget;
	public get_message_area () : Widget;
	public set_image (image: Widget) : void;
	public set_markup (_str: string) : void;

}


declare class Misc extends Widget implements Atk.ImplementorIface, Buildable {

	public xalign: gfloat;
	public xpad: number;
	public yalign: gfloat;
	public ypad: number;

	public get_alignment (xalign: gfloat, yalign: gfloat) : void;
	public get_padding (xpad: number, ypad: number) : void;
	public set_alignment (xalign: gfloat, yalign: gfloat) : void;
	public set_padding (xpad: number, ypad: number) : void;

}


declare class ModelButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public active: boolean;
	public centered: boolean;
	public icon: Gio.Icon;
	public iconic: boolean;
	public inverted: boolean;
	public menu_name: string;
	public role: ButtonRole;
	public text: string;

}


declare class MountOperation extends Gio.MountOperation {

	public parent: Window;
	public screen: Gdk.Screen;

	public get_parent () : Window;
	public get_screen () : Gdk.Screen;
	public is_showing () : boolean;
	public set_parent (parent: Window) : void;
	public set_screen (screen: Gdk.Screen) : void;

}


declare class Notebook extends Container implements Atk.ImplementorIface, Buildable {

	public enable_popup: boolean;
	public group_name: string;
	public page: number;
	public scrollable: boolean;
	public show_border: boolean;
	public show_tabs: boolean;
	public tab_pos: PositionType;

	public append_page (child: Widget, tab_label: Widget) : number;
	public append_page_menu (child: Widget, tab_label: Widget, menu_label: Widget) : number;
	public detach_tab (child: Widget) : void;
	public get_action_widget (pack_type: PackType) : Widget;
	public get_current_page () : number;
	public get_group_name () : string;
	public get_menu_label (child: Widget) : Widget;
	public get_menu_label_text (child: Widget) : string;
	public get_n_pages () : number;
	public get_nth_page (page_num: number) : Widget;
	public get_scrollable () : boolean;
	public get_show_border () : boolean;
	public get_show_tabs () : boolean;
	public get_tab_detachable (child: Widget) : boolean;
	public get_tab_hborder () : guint16;
	public get_tab_label (child: Widget) : Widget;
	public get_tab_label_text (child: Widget) : string;
	public get_tab_pos () : PositionType;
	public get_tab_reorderable (child: Widget) : boolean;
	public get_tab_vborder () : guint16;
	public insert_page (child: Widget, tab_label: Widget, position: number) : number;
	public insert_page_menu (child: Widget, tab_label: Widget, menu_label: Widget, position: number) : number;
	public next_page () : void;
	public page_num (child: Widget) : number;
	public popup_disable () : void;
	public popup_enable () : void;
	public prepend_page (child: Widget, tab_label: Widget) : number;
	public prepend_page_menu (child: Widget, tab_label: Widget, menu_label: Widget) : number;
	public prev_page () : void;
	public remove_page (page_num: number) : void;
	public reorder_child (child: Widget, position: number) : void;
	public set_action_widget (widget: Widget, pack_type: PackType) : void;
	public set_current_page (page_num: number) : void;
	public set_group_name (group_name: string) : void;
	public set_menu_label (child: Widget, menu_label: Widget) : void;
	public set_menu_label_text (child: Widget, menu_text: string) : void;
	public set_scrollable (scrollable: boolean) : void;
	public set_show_border (show_border: boolean) : void;
	public set_show_tabs (show_tabs: boolean) : void;
	public set_tab_detachable (child: Widget, detachable: boolean) : void;
	public set_tab_label (child: Widget, tab_label: Widget) : void;
	public set_tab_label_text (child: Widget, tab_text: string) : void;
	public set_tab_pos (pos: PositionType) : void;
	public set_tab_reorderable (child: Widget, reorderable: boolean) : void;

}


declare class NotebookAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {

}


declare class NotebookPageAccessible extends Atk.Object implements Atk.Component {

	public invalidate () : void;

}


declare class NumerableIcon extends Gio.EmblemedIcon implements Gio.Icon {

	public background_icon: Gio.Icon;
	public background_icon_name: string;
	public count: number;
	public label: string;
	public style_context: StyleContext;

	public get_background_gicon () : Gio.Icon;
	public get_background_icon_name () : string;
	public get_count () : number;
	public get_label () : string;
	public get_style_context () : StyleContext;
	public set_background_gicon (icon: Gio.Icon) : void;
	public set_background_icon_name (icon_name: string) : void;
	public set_count (count: number) : void;
	public set_label (label: string) : void;
	public set_style_context (style: StyleContext) : void;

}


declare class OffscreenWindow extends Window implements Atk.ImplementorIface, Buildable {

	public get_pixbuf () : GdkPixbuf.Pixbuf;
	public get_surface () : cairo.Surface;

}


declare class Overlay extends Bin implements Atk.ImplementorIface, Buildable {

	public add_overlay (widget: Widget) : void;
	public get_overlay_pass_through (widget: Widget) : boolean;
	public reorder_overlay (child: Widget, position: number) : void;
	public set_overlay_pass_through (widget: Widget, pass_through: boolean) : void;

}


declare class PageSetup extends GObject.Object {

	public copy () : PageSetup;
	public get_bottom_margin (unit: Unit) : gdouble;
	public get_left_margin (unit: Unit) : gdouble;
	public get_orientation () : PageOrientation;
	public get_page_height (unit: Unit) : gdouble;
	public get_page_width (unit: Unit) : gdouble;
	public get_paper_height (unit: Unit) : gdouble;
	public get_paper_size () : PaperSize;
	public get_paper_width (unit: Unit) : gdouble;
	public get_right_margin (unit: Unit) : gdouble;
	public get_top_margin (unit: Unit) : gdouble;
	public load_file (file_name: filename) : boolean;
	public load_key_file (key_file: GLib.KeyFile, group_name: string) : boolean;
	public set_bottom_margin (margin: gdouble, unit: Unit) : void;
	public set_left_margin (margin: gdouble, unit: Unit) : void;
	public set_orientation (orientation: PageOrientation) : void;
	public set_paper_size (size: PaperSize) : void;
	public set_paper_size_and_default_margins (size: PaperSize) : void;
	public set_right_margin (margin: gdouble, unit: Unit) : void;
	public set_top_margin (margin: gdouble, unit: Unit) : void;
	public to_file (file_name: filename) : boolean;
	public to_key_file (key_file: GLib.KeyFile, group_name: string) : void;

}


declare class Paned extends Container implements Atk.ImplementorIface, Buildable, Orientable {

	public max_position: number;
	public min_position: number;
	public position: number;
	public position_set: boolean;
	public wide_handle: boolean;

	public add1 (child: Widget) : void;
	public add2 (child: Widget) : void;
	public get_child1 () : Widget;
	public get_child2 () : Widget;
	public get_handle_window () : Gdk.Window;
	public get_position () : number;
	public get_wide_handle () : boolean;
	public pack1 (child: Widget, resize: boolean, shrink: boolean) : void;
	public pack2 (child: Widget, resize: boolean, shrink: boolean) : void;
	public set_position (position: number) : void;
	public set_wide_handle (wide: boolean) : void;

}


declare class PanedAccessible extends ContainerAccessible implements Atk.Component, Atk.Value {

}


declare class PlacesSidebar extends ScrolledWindow implements Atk.ImplementorIface, Buildable {

	public local_only: boolean;
	public location: Gio.File;
	public open_flags: PlacesOpenFlags;
	public populate_all: boolean;
	public show_connect_to_server: boolean;
	public show_desktop: boolean;
	public show_enter_location: boolean;
	public show_other_locations: boolean;
	public show_recent: boolean;
	public show_trash: boolean;

	public add_shortcut (location: Gio.File) : void;
	public get_local_only () : boolean;
	public get_location () : Gio.File;
	public get_nth_bookmark (_n: number) : Gio.File;
	public get_open_flags () : PlacesOpenFlags;
	public get_show_connect_to_server () : boolean;
	public get_show_desktop () : boolean;
	public get_show_enter_location () : boolean;
	public get_show_other_locations () : boolean;
	public get_show_recent () : boolean;
	public get_show_trash () : boolean;
	public list_shortcuts () : GLib.SList;
	public remove_shortcut (location: Gio.File) : void;
	public set_drop_targets_visible (visible: boolean, context: Gdk.DragContext) : void;
	public set_local_only (local_only: boolean) : void;
	public set_location (location: Gio.File) : void;
	public set_open_flags (flags: PlacesOpenFlags) : void;
	public set_show_connect_to_server (show_connect_to_server: boolean) : void;
	public set_show_desktop (show_desktop: boolean) : void;
	public set_show_enter_location (show_enter_location: boolean) : void;
	public set_show_other_locations (show_other_locations: boolean) : void;
	public set_show_recent (show_recent: boolean) : void;
	public set_show_trash (show_trash: boolean) : void;

}


declare class Plug extends Window implements Atk.ImplementorIface, Buildable {

	public embedded: boolean;
	public socket_window: Gdk.Window;

	public construct (socket_id: xlib.Window) : void;
	public construct_for_display (display: Gdk.Display, socket_id: xlib.Window) : void;
	public get_embedded () : boolean;
	public get_id () : xlib.Window;
	public get_socket_window () : Gdk.Window;

}


declare class Popover extends Bin implements Atk.ImplementorIface, Buildable {

	public modal: boolean;
	public pointing_to: Gdk.Rectangle;
	public position: PositionType;
	public relative_to: Widget;
	public transitions_enabled: boolean;

	public bind_model (model: Gio.MenuModel, action_namespace: string) : void;
	public get_default_widget () : Widget;
	public get_modal () : boolean;
	public get_pointing_to (rect: Gdk.Rectangle) : boolean;
	public get_position () : PositionType;
	public get_relative_to () : Widget;
	public get_transitions_enabled () : boolean;
	public set_default_widget (widget: Widget) : void;
	public set_modal (modal: boolean) : void;
	public set_pointing_to (rect: Gdk.Rectangle) : void;
	public set_position (position: PositionType) : void;
	public set_relative_to (relative_to: Widget) : void;
	public set_transitions_enabled (transitions_enabled: boolean) : void;

}


declare class PopoverAccessible extends ContainerAccessible implements Atk.Component {

}


declare class PopoverMenu extends Popover implements Atk.ImplementorIface, Buildable {

	public visible_submenu: string;

	public open_submenu (name: string) : void;

}


declare class PrintContext extends GObject.Object {

	public create_pango_context () : Pango.Context;
	public create_pango_layout () : Pango.Layout;
	public get_cairo_context () : cairo.Context;
	public get_dpi_x () : gdouble;
	public get_dpi_y () : gdouble;
	public get_hard_margins (top: gdouble, bottom: gdouble, left: gdouble, right: gdouble) : boolean;
	public get_height () : gdouble;
	public get_page_setup () : PageSetup;
	public get_pango_fontmap () : Pango.FontMap;
	public get_width () : gdouble;
	public set_cairo_context (cr: cairo.Context, dpi_x: gdouble, dpi_y: gdouble) : void;

}


declare class PrintOperation extends GObject.Object implements PrintOperationPreview {

	public allow_async: boolean;
	public current_page: number;
	public custom_tab_label: string;
	public default_page_setup: PageSetup;
	public embed_page_setup: boolean;
	public export_filename: string;
	public has_selection: boolean;
	public job_name: string;
	public n_pages: number;
	public n_pages_to_print: number;
	public print_settings: PrintSettings;
	public show_progress: boolean;
	public status: PrintStatus;
	public status_string: string;
	public support_selection: boolean;
	public track_print_status: boolean;
	public unit: Unit;
	public use_full_page: boolean;

	public cancel () : void;
	public draw_page_finish () : void;
	public get_default_page_setup () : PageSetup;
	public get_embed_page_setup () : boolean;
	public get_error () : void;
	public get_has_selection () : boolean;
	public get_n_pages_to_print () : number;
	public get_print_settings () : PrintSettings;
	public get_status () : PrintStatus;
	public get_status_string () : string;
	public get_support_selection () : boolean;
	public is_finished () : boolean;
	public run (action: PrintOperationAction, parent: Window) : PrintOperationResult;
	public set_allow_async (allow_async: boolean) : void;
	public set_current_page (current_page: number) : void;
	public set_custom_tab_label (label: string) : void;
	public set_default_page_setup (default_page_setup: PageSetup) : void;
	public set_defer_drawing () : void;
	public set_embed_page_setup (embed: boolean) : void;
	public set_export_filename (filename: filename) : void;
	public set_has_selection (has_selection: boolean) : void;
	public set_job_name (job_name: string) : void;
	public set_n_pages (n_pages: number) : void;
	public set_print_settings (print_settings: PrintSettings) : void;
	public set_show_progress (show_progress: boolean) : void;
	public set_support_selection (support_selection: boolean) : void;
	public set_track_print_status (track_status: boolean) : void;
	public set_unit (unit: Unit) : void;
	public set_use_full_page (full_page: boolean) : void;

}


declare class PrintSettings extends GObject.Object {

	public copy () : PrintSettings;
	public foreach (_func: PrintSettingsFunc, user_data: gpointer) : void;
	public get (key: string) : string;
	public get_bool (key: string) : boolean;
	public get_collate () : boolean;
	public get_default_source () : string;
	public get_dither () : string;
	public get_double (key: string) : gdouble;
	public get_double_with_default (key: string, _def: gdouble) : gdouble;
	public get_duplex () : PrintDuplex;
	public get_finishings () : string;
	public get_int (key: string) : number;
	public get_int_with_default (key: string, _def: number) : number;
	public get_length (key: string, unit: Unit) : gdouble;
	public get_media_type () : string;
	public get_n_copies () : number;
	public get_number_up () : number;
	public get_number_up_layout () : NumberUpLayout;
	public get_orientation () : PageOrientation;
	public get_output_bin () : string;
	public get_page_ranges (num_ranges: number) : PageRange[];
	public get_page_set () : PageSet;
	public get_paper_height (unit: Unit) : gdouble;
	public get_paper_size () : PaperSize;
	public get_paper_width (unit: Unit) : gdouble;
	public get_print_pages () : PrintPages;
	public get_printer () : string;
	public get_printer_lpi () : gdouble;
	public get_quality () : PrintQuality;
	public get_resolution () : number;
	public get_resolution_x () : number;
	public get_resolution_y () : number;
	public get_reverse () : boolean;
	public get_scale () : gdouble;
	public get_use_color () : boolean;
	public has_key (key: string) : boolean;
	public load_file (file_name: filename) : boolean;
	public load_key_file (key_file: GLib.KeyFile, group_name: string) : boolean;
	public set (key: string, value: string) : void;
	public set_bool (key: string, value: boolean) : void;
	public set_collate (collate: boolean) : void;
	public set_default_source (default_source: string) : void;
	public set_dither (dither: string) : void;
	public set_double (key: string, value: gdouble) : void;
	public set_duplex (duplex: PrintDuplex) : void;
	public set_finishings (finishings: string) : void;
	public set_int (key: string, value: number) : void;
	public set_length (key: string, value: gdouble, unit: Unit) : void;
	public set_media_type (media_type: string) : void;
	public set_n_copies (num_copies: number) : void;
	public set_number_up (number_up: number) : void;
	public set_number_up_layout (number_up_layout: NumberUpLayout) : void;
	public set_orientation (orientation: PageOrientation) : void;
	public set_output_bin (output_bin: string) : void;
	public set_page_ranges (page_ranges: PageRange[], num_ranges: number) : void;
	public set_page_set (page_set: PageSet) : void;
	public set_paper_height (height: gdouble, unit: Unit) : void;
	public set_paper_size (paper_size: PaperSize) : void;
	public set_paper_width (width: gdouble, unit: Unit) : void;
	public set_print_pages (pages: PrintPages) : void;
	public set_printer (printer: string) : void;
	public set_printer_lpi (lpi: gdouble) : void;
	public set_quality (quality: PrintQuality) : void;
	public set_resolution (resolution: number) : void;
	public set_resolution_xy (resolution_x: number, resolution_y: number) : void;
	public set_reverse (reverse: boolean) : void;
	public set_scale (scale: gdouble) : void;
	public set_use_color (use_color: boolean) : void;
	public to_file (file_name: filename) : boolean;
	public to_key_file (key_file: GLib.KeyFile, group_name: string) : void;
	public unset (key: string) : void;

}


declare class ProgressBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {

	public ellipsize: Pango.EllipsizeMode;
	public fraction: gdouble;
	public inverted: boolean;
	public pulse_step: gdouble;
	public show_text: boolean;
	public text: string;

	public get_ellipsize () : Pango.EllipsizeMode;
	public get_fraction () : gdouble;
	public get_inverted () : boolean;
	public get_pulse_step () : gdouble;
	public get_show_text () : boolean;
	public get_text () : string;
	public pulse () : void;
	public set_ellipsize (mode: Pango.EllipsizeMode) : void;
	public set_fraction (fraction: gdouble) : void;
	public set_inverted (inverted: boolean) : void;
	public set_pulse_step (fraction: gdouble) : void;
	public set_show_text (show_text: boolean) : void;
	public set_text (text: string) : void;

}


declare class ProgressBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {

}


declare class RadioAction extends ToggleAction implements Buildable {

	public current_value: number;
	public group: RadioAction;
	public value: number;

	public get_current_value () : number;
	public get_group () : GLib.SList;
	public join_group (group_source: RadioAction) : void;
	public set_current_value (current_value: number) : void;
	public set_group (group: GLib.SList) : void;

}


declare class RadioButton extends CheckButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public group: RadioButton;

	public get_group () : GLib.SList;
	public join_group (group_source: RadioButton) : void;
	public set_group (group: GLib.SList) : void;

}


declare class RadioButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class RadioMenuItem extends CheckMenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public group: RadioMenuItem;

	public get_group () : GLib.SList;
	public join_group (group_source: RadioMenuItem) : void;
	public set_group (group: GLib.SList) : void;

}


declare class RadioMenuItemAccessible extends CheckMenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {

}


declare class RadioToolButton extends ToggleToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public group: RadioToolButton;

	public get_group () : GLib.SList;
	public set_group (group: GLib.SList) : void;

}


declare class Range extends Widget implements Atk.ImplementorIface, Buildable, Orientable {

	public adjustment: Adjustment;
	public fill_level: gdouble;
	public inverted: boolean;
	public lower_stepper_sensitivity: SensitivityType;
	public restrict_to_fill_level: boolean;
	public round_digits: number;
	public show_fill_level: boolean;
	public upper_stepper_sensitivity: SensitivityType;

	public get_adjustment () : Adjustment;
	public get_fill_level () : gdouble;
	public get_flippable () : boolean;
	public get_inverted () : boolean;
	public get_lower_stepper_sensitivity () : SensitivityType;
	public get_min_slider_size () : number;
	public get_range_rect (range_rect: Gdk.Rectangle) : void;
	public get_restrict_to_fill_level () : boolean;
	public get_round_digits () : number;
	public get_show_fill_level () : boolean;
	public get_slider_range (slider_start: number, slider_end: number) : void;
	public get_slider_size_fixed () : boolean;
	public get_upper_stepper_sensitivity () : SensitivityType;
	public get_value () : gdouble;
	public set_adjustment (adjustment: Adjustment) : void;
	public set_fill_level (fill_level: gdouble) : void;
	public set_flippable (flippable: boolean) : void;
	public set_increments (step: gdouble, page: gdouble) : void;
	public set_inverted (setting: boolean) : void;
	public set_lower_stepper_sensitivity (sensitivity: SensitivityType) : void;
	public set_min_slider_size (min_size: number) : void;
	public set_range (min: gdouble, max: gdouble) : void;
	public set_restrict_to_fill_level (restrict_to_fill_level: boolean) : void;
	public set_round_digits (round_digits: number) : void;
	public set_show_fill_level (show_fill_level: boolean) : void;
	public set_slider_size_fixed (size_fixed: boolean) : void;
	public set_upper_stepper_sensitivity (sensitivity: SensitivityType) : void;
	public set_value (value: gdouble) : void;

}


declare class RangeAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {

}


declare class RcStyle extends GObject.Object {

	public copy () : RcStyle;

}


declare class RecentAction extends Action implements Buildable, RecentChooser {

	public show_numbers: boolean;

	public get_show_numbers () : boolean;
	public set_show_numbers (show_numbers: boolean) : void;

}


declare class RecentChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, RecentChooser {

}


declare class RecentChooserMenu extends Menu implements Atk.ImplementorIface, Activatable, Buildable, RecentChooser {

	public show_numbers: boolean;

	public get_show_numbers () : boolean;
	public set_show_numbers (show_numbers: boolean) : void;

}


declare class RecentChooserWidget extends Box implements Atk.ImplementorIface, Buildable, Orientable, RecentChooser {

}


declare class RecentFilter extends GObject.InitiallyUnowned implements Buildable {

	public add_age (days: number) : void;
	public add_application (application: string) : void;
	public add_custom (needed: RecentFilterFlags, _func: RecentFilterFunc, data: gpointer, data_destroy: GLib.DestroyNotify) : void;
	public add_group (group: string) : void;
	public add_mime_type (mime_type: string) : void;
	public add_pattern (pattern: string) : void;
	public add_pixbuf_formats () : void;
	public filter (filter_info: RecentFilterInfo) : boolean;
	public get_name () : string;
	public get_needed () : RecentFilterFlags;
	public set_name (name: string) : void;

}


declare class RecentManager extends GObject.Object {

	public filename: string;
	public size: number;

	public add_full (uri: string, recent_data: RecentData) : boolean;
	public add_item (uri: string) : boolean;
	public get_items () : GLib.List;
	public has_item (uri: string) : boolean;
	public lookup_item (uri: string) : RecentInfo;
	public move_item (uri: string, new_uri: string) : boolean;
	public purge_items () : number;
	public remove_item (uri: string) : boolean;

}


declare class RendererCellAccessible extends CellAccessible implements Atk.Action, Atk.Component {

	public renderer: CellRenderer;

}


declare class Revealer extends Bin implements Atk.ImplementorIface, Buildable {

	public child_revealed: boolean;
	public reveal_child: boolean;
	public transition_duration: number;
	public transition_type: RevealerTransitionType;

	public get_child_revealed () : boolean;
	public get_reveal_child () : boolean;
	public get_transition_duration () : number;
	public get_transition_type () : RevealerTransitionType;
	public set_reveal_child (reveal_child: boolean) : void;
	public set_transition_duration (duration: number) : void;
	public set_transition_type (transition: RevealerTransitionType) : void;

}


declare class Scale extends Range implements Atk.ImplementorIface, Buildable, Orientable {

	public digits: number;
	public draw_value: boolean;
	public has_origin: boolean;
	public value_pos: PositionType;

	public add_mark (value: gdouble, position: PositionType, markup: string) : void;
	public clear_marks () : void;
	public get_digits () : number;
	public get_draw_value () : boolean;
	public get_has_origin () : boolean;
	public get_layout () : Pango.Layout;
	public get_layout_offsets (_x: number, _y: number) : void;
	public get_value_pos () : PositionType;
	public set_digits (digits: number) : void;
	public set_draw_value (draw_value: boolean) : void;
	public set_has_origin (has_origin: boolean) : void;
	public set_value_pos (pos: PositionType) : void;

}


declare class ScaleAccessible extends RangeAccessible implements Atk.Component, Atk.Value {

}


declare class ScaleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {

	public adjustment: Adjustment;
	public icons: string[];
	public size: IconSize;
	public value: gdouble;

	public get_adjustment () : Adjustment;
	public get_minus_button () : Button;
	public get_plus_button () : Button;
	public get_popup () : Widget;
	public get_value () : gdouble;
	public set_adjustment (adjustment: Adjustment) : void;
	public set_icons (icons: string[]) : void;
	public set_value (value: gdouble) : void;

}


declare class ScaleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image, Atk.Value {

}


declare class Scrollbar extends Range implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class ScrolledWindow extends Bin implements Atk.ImplementorIface, Buildable {

	public hadjustment: Adjustment;
	public hscrollbar_policy: PolicyType;
	public kinetic_scrolling: boolean;
	public min_content_height: number;
	public min_content_width: number;
	public overlay_scrolling: boolean;
	public shadow_type: ShadowType;
	public vadjustment: Adjustment;
	public vscrollbar_policy: PolicyType;
	public window_placement: CornerType;
	public window_placement_set: boolean;

	public add_with_viewport (child: Widget) : void;
	public get_capture_button_press () : boolean;
	public get_hadjustment () : Adjustment;
	public get_hscrollbar () : Widget;
	public get_kinetic_scrolling () : boolean;
	public get_min_content_height () : number;
	public get_min_content_width () : number;
	public get_overlay_scrolling () : boolean;
	public get_placement () : CornerType;
	public get_policy (hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType) : void;
	public get_shadow_type () : ShadowType;
	public get_vadjustment () : Adjustment;
	public get_vscrollbar () : Widget;
	public set_capture_button_press (capture_button_press: boolean) : void;
	public set_hadjustment (hadjustment: Adjustment) : void;
	public set_kinetic_scrolling (kinetic_scrolling: boolean) : void;
	public set_min_content_height (height: number) : void;
	public set_min_content_width (width: number) : void;
	public set_overlay_scrolling (overlay_scrolling: boolean) : void;
	public set_placement (window_placement: CornerType) : void;
	public set_policy (hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType) : void;
	public set_shadow_type (_type: ShadowType) : void;
	public set_vadjustment (vadjustment: Adjustment) : void;
	public unset_placement () : void;

}


declare class ScrolledWindowAccessible extends ContainerAccessible implements Atk.Component {

}


declare class SearchBar extends Bin implements Atk.ImplementorIface, Buildable {

	public search_mode_enabled: boolean;
	public show_close_button: boolean;

	public connect_entry (entry: Entry) : void;
	public get_search_mode () : boolean;
	public get_show_close_button () : boolean;
	public handle_event (event: Gdk.Event) : boolean;
	public set_search_mode (search_mode: boolean) : void;
	public set_show_close_button (visible: boolean) : void;

}


declare class SearchEntry extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable {

	public handle_event (event: Gdk.Event) : boolean;

}


declare class Separator extends Widget implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class SeparatorMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

}


declare class SeparatorToolItem extends ToolItem implements Atk.ImplementorIface, Activatable, Buildable {

	public draw: boolean;

	public get_draw () : boolean;
	public set_draw (draw: boolean) : void;

}


declare class Settings extends GObject.Object implements StyleProvider {

	public color_hash: GLib.HashTable;
	public gtk_alternative_button_order: boolean;
	public gtk_alternative_sort_arrows: boolean;
	public gtk_application_prefer_dark_theme: boolean;
	public gtk_auto_mnemonics: boolean;
	public gtk_button_images: boolean;
	public gtk_can_change_accels: boolean;
	public gtk_color_palette: string;
	public gtk_color_scheme: string;
	public gtk_cursor_blink: boolean;
	public gtk_cursor_blink_time: number;
	public gtk_cursor_blink_timeout: number;
	public gtk_cursor_theme_name: string;
	public gtk_cursor_theme_size: number;
	public gtk_decoration_layout: string;
	public gtk_dialogs_use_header: boolean;
	public gtk_dnd_drag_threshold: number;
	public gtk_double_click_distance: number;
	public gtk_double_click_time: number;
	public gtk_enable_accels: boolean;
	public gtk_enable_animations: boolean;
	public gtk_enable_event_sounds: boolean;
	public gtk_enable_input_feedback_sounds: boolean;
	public gtk_enable_mnemonics: boolean;
	public gtk_enable_primary_paste: boolean;
	public gtk_enable_tooltips: boolean;
	public gtk_entry_password_hint_timeout: number;
	public gtk_entry_select_on_focus: boolean;
	public gtk_error_bell: boolean;
	public gtk_fallback_icon_theme: string;
	public gtk_file_chooser_backend: string;
	public gtk_font_name: string;
	public gtk_fontconfig_timestamp: number;
	public gtk_icon_sizes: string;
	public gtk_icon_theme_name: string;
	public gtk_im_module: string;
	public gtk_im_preedit_style: IMPreeditStyle;
	public gtk_im_status_style: IMStatusStyle;
	public gtk_key_theme_name: string;
	public gtk_keynav_cursor_only: boolean;
	public gtk_keynav_wrap_around: boolean;
	public gtk_label_select_on_focus: boolean;
	public gtk_long_press_time: number;
	public gtk_menu_bar_accel: string;
	public gtk_menu_bar_popup_delay: number;
	public gtk_menu_images: boolean;
	public gtk_menu_popdown_delay: number;
	public gtk_menu_popup_delay: number;
	public gtk_modules: string;
	public gtk_primary_button_warps_slider: boolean;
	public gtk_print_backends: string;
	public gtk_print_preview_command: string;
	public gtk_recent_files_enabled: boolean;
	public gtk_recent_files_limit: number;
	public gtk_recent_files_max_age: number;
	public gtk_scrolled_window_placement: CornerType;
	public gtk_shell_shows_app_menu: boolean;
	public gtk_shell_shows_desktop: boolean;
	public gtk_shell_shows_menubar: boolean;
	public gtk_show_input_method_menu: boolean;
	public gtk_show_unicode_menu: boolean;
	public gtk_sound_theme_name: string;
	public gtk_split_cursor: boolean;
	public gtk_theme_name: string;
	public gtk_timeout_expand: number;
	public gtk_timeout_initial: number;
	public gtk_timeout_repeat: number;
	public gtk_titlebar_double_click: string;
	public gtk_titlebar_middle_click: string;
	public gtk_titlebar_right_click: string;
	public gtk_toolbar_icon_size: IconSize;
	public gtk_toolbar_style: ToolbarStyle;
	public gtk_tooltip_browse_mode_timeout: number;
	public gtk_tooltip_browse_timeout: number;
	public gtk_tooltip_timeout: number;
	public gtk_touchscreen_mode: boolean;
	public gtk_visible_focus: PolicyType;
	public gtk_xft_antialias: number;
	public gtk_xft_dpi: number;
	public gtk_xft_hinting: number;
	public gtk_xft_hintstyle: string;
	public gtk_xft_rgba: string;

	public set_double_property (name: string, v_double: gdouble, origin: string) : void;
	public set_long_property (name: string, v_long: glong, origin: string) : void;
	public set_property_value (name: string, svalue: SettingsValue) : void;
	public set_string_property (name: string, v_string: string, origin: string) : void;

}


declare class SizeGroup extends GObject.Object implements Buildable {

	public ignore_hidden: boolean;
	public mode: SizeGroupMode;

	public add_widget (widget: Widget) : void;
	public get_ignore_hidden () : boolean;
	public get_mode () : SizeGroupMode;
	public get_widgets () : GLib.SList;
	public remove_widget (widget: Widget) : void;
	public set_ignore_hidden (ignore_hidden: boolean) : void;
	public set_mode (mode: SizeGroupMode) : void;

}


declare class Socket extends Container implements Atk.ImplementorIface, Buildable {

	public add_id (window: xlib.Window) : void;
	public get_id () : xlib.Window;
	public get_plug_window () : Gdk.Window;

}


declare class SpinButton extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable, Orientable {

	public adjustment: Adjustment;
	public climb_rate: gdouble;
	public digits: number;
	public numeric: boolean;
	public snap_to_ticks: boolean;
	public update_policy: SpinButtonUpdatePolicy;
	public value: gdouble;
	public wrap: boolean;

	public configure (adjustment: Adjustment, climb_rate: gdouble, digits: number) : void;
	public get_adjustment () : Adjustment;
	public get_digits () : number;
	public get_increments (step: gdouble, page: gdouble) : void;
	public get_numeric () : boolean;
	public get_range (min: gdouble, max: gdouble) : void;
	public get_snap_to_ticks () : boolean;
	public get_update_policy () : SpinButtonUpdatePolicy;
	public get_value () : gdouble;
	public get_value_as_int () : number;
	public get_wrap () : boolean;
	public set_adjustment (adjustment: Adjustment) : void;
	public set_digits (digits: number) : void;
	public set_increments (step: gdouble, page: gdouble) : void;
	public set_numeric (numeric: boolean) : void;
	public set_range (min: gdouble, max: gdouble) : void;
	public set_snap_to_ticks (snap_to_ticks: boolean) : void;
	public set_update_policy (policy: SpinButtonUpdatePolicy) : void;
	public set_value (value: gdouble) : void;
	public set_wrap (wrap: boolean) : void;
	public spin (direction: SpinType, increment: gdouble) : void;
	public update () : void;

}


declare class SpinButtonAccessible extends EntryAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text, Atk.Value {

}


declare class Spinner extends Widget implements Atk.ImplementorIface, Buildable {

	public active: boolean;

	public start () : void;
	public stop () : void;

}


declare class SpinnerAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {

}


declare class Stack extends Container implements Atk.ImplementorIface, Buildable {

	public hhomogeneous: boolean;
	public homogeneous: boolean;
	public interpolate_size: boolean;
	public transition_duration: number;
	public transition_running: boolean;
	public transition_type: StackTransitionType;
	public vhomogeneous: boolean;
	public visible_child: Widget;
	public visible_child_name: string;

	public add_named (child: Widget, name: string) : void;
	public add_titled (child: Widget, name: string, title: string) : void;
	public get_child_by_name (name: string) : Widget;
	public get_hhomogeneous () : boolean;
	public get_homogeneous () : boolean;
	public get_interpolate_size () : boolean;
	public get_transition_duration () : number;
	public get_transition_running () : boolean;
	public get_transition_type () : StackTransitionType;
	public get_vhomogeneous () : boolean;
	public get_visible_child () : Widget;
	public get_visible_child_name () : string;
	public set_hhomogeneous (hhomogeneous: boolean) : void;
	public set_homogeneous (homogeneous: boolean) : void;
	public set_interpolate_size (interpolate_size: boolean) : void;
	public set_transition_duration (duration: number) : void;
	public set_transition_type (transition: StackTransitionType) : void;
	public set_vhomogeneous (vhomogeneous: boolean) : void;
	public set_visible_child (child: Widget) : void;
	public set_visible_child_full (name: string, transition: StackTransitionType) : void;
	public set_visible_child_name (name: string) : void;

}


declare class StackSidebar extends Bin implements Atk.ImplementorIface, Buildable {

	public stack: Stack;

	public get_stack () : Stack;
	public set_stack (stack: Stack) : void;

}


declare class StackSwitcher extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public stack: Stack;

	public get_stack () : Stack;
	public set_stack (stack: Stack) : void;

}


declare class StatusIcon extends GObject.Object {

	public embedded: boolean;
	public file: string;
	public gicon: Gio.Icon;
	public has_tooltip: boolean;
	public icon_name: string;
	public orientation: Orientation;
	public pixbuf: GdkPixbuf.Pixbuf;
	public screen: Gdk.Screen;
	public size: number;
	public stock: string;
	public storage_type: ImageType;
	public title: string;
	public tooltip_markup: string;
	public tooltip_text: string;
	public visible: boolean;

	public get_geometry (screen: Gdk.Screen, area: Gdk.Rectangle, orientation: Orientation) : boolean;
	public get_gicon () : Gio.Icon;
	public get_has_tooltip () : boolean;
	public get_icon_name () : string;
	public get_pixbuf () : GdkPixbuf.Pixbuf;
	public get_screen () : Gdk.Screen;
	public get_size () : number;
	public get_stock () : string;
	public get_storage_type () : ImageType;
	public get_title () : string;
	public get_tooltip_markup () : string;
	public get_tooltip_text () : string;
	public get_visible () : boolean;
	public get_x11_window_id () : guint32;
	public is_embedded () : boolean;
	public set_from_file (filename: filename) : void;
	public set_from_gicon (icon: Gio.Icon) : void;
	public set_from_icon_name (icon_name: string) : void;
	public set_from_pixbuf (pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_from_stock (stock_id: string) : void;
	public set_has_tooltip (has_tooltip: boolean) : void;
	public set_name (name: string) : void;
	public set_screen (screen: Gdk.Screen) : void;
	public set_title (title: string) : void;
	public set_tooltip_markup (markup: string) : void;
	public set_tooltip_text (text: string) : void;
	public set_visible (visible: boolean) : void;

}


declare class Statusbar extends Box implements Atk.ImplementorIface, Buildable, Orientable {

	public get_context_id (context_description: string) : number;
	public get_message_area () : Box;
	public pop (context_id: number) : void;
	public push (context_id: number, text: string) : number;
	public remove (context_id: number, message_id: number) : void;
	public remove_all (context_id: number) : void;

}


declare class StatusbarAccessible extends ContainerAccessible implements Atk.Component {

}


declare class Style extends GObject.Object {

	public context: StyleContext;

	public apply_default_background (cr: cairo.Context, window: Gdk.Window, state_type: StateType, _x: number, _y: number, width: number, height: number) : void;
	public attach (window: Gdk.Window) : Style;
	public copy () : Style;
	public detach () : void;
	public get (widget_type: GType, first_property_name: string) : void;
	public get_style_property (widget_type: GType, property_name: string, value: GObject.Value) : void;
	public get_valist (widget_type: GType, first_property_name: string, var_args: va_list) : void;
	public has_context () : boolean;
	public lookup_color (color_name: string, color: Gdk.Color) : boolean;
	public lookup_icon_set (stock_id: string) : IconSet;
	public render_icon (source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget, detail: string) : GdkPixbuf.Pixbuf;
	public set_background (window: Gdk.Window, state_type: StateType) : void;

}


declare class StyleContext extends GObject.Object {

	public direction: TextDirection;
	public paint_clock: Gdk.FrameClock;
	public parent: StyleContext;
	public screen: Gdk.Screen;

	public add_class (class_name: string) : void;
	public add_provider (provider: StyleProvider, priority: number) : void;
	public add_region (region_name: string, flags: RegionFlags) : void;
	public cancel_animations (region_id: gpointer) : void;
	public get (state: StateFlags) : void;
	public get_background_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_border (state: StateFlags, border: Border) : void;
	public get_border_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_direction () : TextDirection;
	public get_font (state: StateFlags) : Pango.FontDescription;
	public get_frame_clock () : Gdk.FrameClock;
	public get_junction_sides () : JunctionSides;
	public get_margin (state: StateFlags, margin: Border) : void;
	public get_padding (state: StateFlags, padding: Border) : void;
	public get_parent () : StyleContext;
	public get_path () : WidgetPath;
	public get_property (property: string, state: StateFlags, value: GObject.Value) : void;
	public get_scale () : number;
	public get_screen () : Gdk.Screen;
	public get_section (property: string) : CssSection;
	public get_state () : StateFlags;
	public get_style () : void;
	public get_style_property (property_name: string, value: GObject.Value) : void;
	public get_style_valist (args: va_list) : void;
	public get_valist (state: StateFlags, args: va_list) : void;
	public has_class (class_name: string) : boolean;
	public has_region (region_name: string, flags_return: RegionFlags) : boolean;
	public invalidate () : void;
	public list_classes () : GLib.List;
	public list_regions () : GLib.List;
	public lookup_color (color_name: string, color: Gdk.RGBA) : boolean;
	public lookup_icon_set (stock_id: string) : IconSet;
	public notify_state_change (window: Gdk.Window, region_id: gpointer, state: StateType, state_value: boolean) : void;
	public pop_animatable_region () : void;
	public push_animatable_region (region_id: gpointer) : void;
	public remove_class (class_name: string) : void;
	public remove_provider (provider: StyleProvider) : void;
	public remove_region (region_name: string) : void;
	public restore () : void;
	public save () : void;
	public scroll_animations (window: Gdk.Window, dx: number, dy: number) : void;
	public set_background (window: Gdk.Window) : void;
	public set_direction (direction: TextDirection) : void;
	public set_frame_clock (frame_clock: Gdk.FrameClock) : void;
	public set_junction_sides (sides: JunctionSides) : void;
	public set_parent (parent: StyleContext) : void;
	public set_path (path: WidgetPath) : void;
	public set_scale (scale: number) : void;
	public set_screen (screen: Gdk.Screen) : void;
	public set_state (flags: StateFlags) : void;
	public state_is_running (state: StateType, progress: gdouble) : boolean;

}


declare class StyleProperties extends GObject.Object implements StyleProvider {

	public clear () : void;
	public get (state: StateFlags) : void;
	public get_property (property: string, state: StateFlags, value: GObject.Value) : boolean;
	public get_valist (state: StateFlags, args: va_list) : void;
	public lookup_color (name: string) : SymbolicColor;
	public map_color (name: string, color: SymbolicColor) : void;
	public merge (props_to_merge: StyleProperties, replace: boolean) : void;
	public set (state: StateFlags) : void;
	public set_property (property: string, state: StateFlags, value: GObject.Value) : void;
	public set_valist (state: StateFlags, args: va_list) : void;
	public unset_property (property: string, state: StateFlags) : void;

}


declare class Switch extends Widget implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public active: boolean;
	public state: boolean;

	public get_active () : boolean;
	public get_state () : boolean;
	public set_active (is_active: boolean) : void;
	public set_state (state: boolean) : void;

}


declare class SwitchAccessible extends WidgetAccessible implements Atk.Action, Atk.Component {

}


declare class Table extends Container implements Atk.ImplementorIface, Buildable {

	public column_spacing: number;
	public homogeneous: boolean;
	public n_columns: number;
	public n_rows: number;
	public row_spacing: number;

	public attach (child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number) : void;
	public attach_defaults (widget: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number) : void;
	public get_col_spacing (column: number) : number;
	public get_default_col_spacing () : number;
	public get_default_row_spacing () : number;
	public get_homogeneous () : boolean;
	public get_row_spacing (_row: number) : number;
	public get_size (_rows: number, columns: number) : void;
	public resize (_rows: number, columns: number) : void;
	public set_col_spacing (column: number, spacing: number) : void;
	public set_col_spacings (spacing: number) : void;
	public set_homogeneous (homogeneous: boolean) : void;
	public set_row_spacing (_row: number, spacing: number) : void;
	public set_row_spacings (spacing: number) : void;

}


declare class TearoffMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

}


declare class TextBuffer extends GObject.Object {

	public copy_target_list: TargetList;
	public cursor_position: number;
	public has_selection: boolean;
	public paste_target_list: TargetList;
	public tag_table: TextTagTable;
	public text: string;

	public add_mark (mark: TextMark, where: TextIter) : void;
	public add_selection_clipboard (clipboard: Clipboard) : void;
	public apply_tag (tag: TextTag, start: TextIter, _end: TextIter) : void;
	public apply_tag_by_name (name: string, start: TextIter, _end: TextIter) : void;
	public backspace (iter: TextIter, interactive: boolean, default_editable: boolean) : boolean;
	public begin_user_action () : void;
	public copy_clipboard (clipboard: Clipboard) : void;
	public create_child_anchor (iter: TextIter) : TextChildAnchor;
	public create_mark (mark_name: string, where: TextIter, left_gravity: boolean) : TextMark;
	public create_tag (tag_name: string, first_property_name: string) : TextTag;
	public cut_clipboard (clipboard: Clipboard, default_editable: boolean) : void;
	public delete (start: TextIter, _end: TextIter) : void;
	public delete_interactive (start_iter: TextIter, end_iter: TextIter, default_editable: boolean) : boolean;
	public delete_mark (mark: TextMark) : void;
	public delete_mark_by_name (name: string) : void;
	public delete_selection (interactive: boolean, default_editable: boolean) : boolean;
	public deserialize (content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: guint8[], length: gsize) : boolean;
	public deserialize_get_can_create_tags (format: Gdk.Atom) : boolean;
	public deserialize_set_can_create_tags (format: Gdk.Atom, can_create_tags: boolean) : void;
	public end_user_action () : void;
	public get_bounds (start: TextIter, _end: TextIter) : void;
	public get_char_count () : number;
	public get_copy_target_list () : TargetList;
	public get_deserialize_formats (n_formats: number) : Gdk.Atom[];
	public get_end_iter (iter: TextIter) : void;
	public get_has_selection () : boolean;
	public get_insert () : TextMark;
	public get_iter_at_child_anchor (iter: TextIter, anchor: TextChildAnchor) : void;
	public get_iter_at_line (iter: TextIter, line_number: number) : void;
	public get_iter_at_line_index (iter: TextIter, line_number: number, byte_index: number) : void;
	public get_iter_at_line_offset (iter: TextIter, line_number: number, char_offset: number) : void;
	public get_iter_at_mark (iter: TextIter, mark: TextMark) : void;
	public get_iter_at_offset (iter: TextIter, char_offset: number) : void;
	public get_line_count () : number;
	public get_mark (name: string) : TextMark;
	public get_modified () : boolean;
	public get_paste_target_list () : TargetList;
	public get_selection_bound () : TextMark;
	public get_selection_bounds (start: TextIter, _end: TextIter) : boolean;
	public get_serialize_formats (n_formats: number) : Gdk.Atom[];
	public get_slice (start: TextIter, _end: TextIter, include_hidden_chars: boolean) : string;
	public get_start_iter (iter: TextIter) : void;
	public get_tag_table () : TextTagTable;
	public get_text (start: TextIter, _end: TextIter, include_hidden_chars: boolean) : string;
	public insert (iter: TextIter, text: string, len: number) : void;
	public insert_at_cursor (text: string, len: number) : void;
	public insert_child_anchor (iter: TextIter, anchor: TextChildAnchor) : void;
	public insert_interactive (iter: TextIter, text: string, len: number, default_editable: boolean) : boolean;
	public insert_interactive_at_cursor (text: string, len: number, default_editable: boolean) : boolean;
	public insert_markup (iter: TextIter, markup: string, len: number) : void;
	public insert_pixbuf (iter: TextIter, pixbuf: GdkPixbuf.Pixbuf) : void;
	public insert_range (iter: TextIter, start: TextIter, _end: TextIter) : void;
	public insert_range_interactive (iter: TextIter, start: TextIter, _end: TextIter, default_editable: boolean) : boolean;
	public insert_with_tags (iter: TextIter, text: string, len: number, first_tag: TextTag) : void;
	public insert_with_tags_by_name (iter: TextIter, text: string, len: number, first_tag_name: string) : void;
	public move_mark (mark: TextMark, where: TextIter) : void;
	public move_mark_by_name (name: string, where: TextIter) : void;
	public paste_clipboard (clipboard: Clipboard, override_location: TextIter, default_editable: boolean) : void;
	public place_cursor (where: TextIter) : void;
	public register_deserialize_format (mime_type: string, _function: TextBufferDeserializeFunc, user_data: gpointer, user_data_destroy: GLib.DestroyNotify) : Gdk.Atom;
	public register_deserialize_tagset (tagset_name: string) : Gdk.Atom;
	public register_serialize_format (mime_type: string, _function: TextBufferSerializeFunc, user_data: gpointer, user_data_destroy: GLib.DestroyNotify) : Gdk.Atom;
	public register_serialize_tagset (tagset_name: string) : Gdk.Atom;
	public remove_all_tags (start: TextIter, _end: TextIter) : void;
	public remove_selection_clipboard (clipboard: Clipboard) : void;
	public remove_tag (tag: TextTag, start: TextIter, _end: TextIter) : void;
	public remove_tag_by_name (name: string, start: TextIter, _end: TextIter) : void;
	public select_range (_ins: TextIter, bound: TextIter) : void;
	public serialize (content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, _end: TextIter, length: gsize) : guint8[];
	public set_modified (setting: boolean) : void;
	public set_text (text: string, len: number) : void;
	public unregister_deserialize_format (format: Gdk.Atom) : void;
	public unregister_serialize_format (format: Gdk.Atom) : void;

}


declare class TextCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.Text {

}


declare class TextChildAnchor extends GObject.Object {

	public get_deleted () : boolean;
	public get_widgets () : GLib.List;

}


declare class TextMark extends GObject.Object {

	public left_gravity: boolean;
	public name: string;

	public get_buffer () : TextBuffer;
	public get_deleted () : boolean;
	public get_left_gravity () : boolean;
	public get_name () : string;
	public get_visible () : boolean;
	public set_visible (setting: boolean) : void;

}


declare class TextTag extends GObject.Object {

	public accumulative_margin: boolean;
	public background: string;
	public background_full_height: boolean;
	public background_full_height_set: boolean;
	public background_gdk: Gdk.Color;
	public background_rgba: Gdk.RGBA;
	public background_set: boolean;
	public direction: TextDirection;
	public editable: boolean;
	public editable_set: boolean;
	public fallback: boolean;
	public fallback_set: boolean;
	public family: string;
	public family_set: boolean;
	public font: string;
	public font_desc: Pango.FontDescription;
	public font_features: string;
	public font_features_set: boolean;
	public foreground: string;
	public foreground_gdk: Gdk.Color;
	public foreground_rgba: Gdk.RGBA;
	public foreground_set: boolean;
	public indent: number;
	public indent_set: boolean;
	public invisible: boolean;
	public invisible_set: boolean;
	public justification: Justification;
	public justification_set: boolean;
	public language: string;
	public language_set: boolean;
	public left_margin: number;
	public left_margin_set: boolean;
	public letter_spacing: number;
	public letter_spacing_set: boolean;
	public name: string;
	public paragraph_background: string;
	public paragraph_background_gdk: Gdk.Color;
	public paragraph_background_rgba: Gdk.RGBA;
	public paragraph_background_set: boolean;
	public pixels_above_lines: number;
	public pixels_above_lines_set: boolean;
	public pixels_below_lines: number;
	public pixels_below_lines_set: boolean;
	public pixels_inside_wrap: number;
	public pixels_inside_wrap_set: boolean;
	public right_margin: number;
	public right_margin_set: boolean;
	public rise: number;
	public rise_set: boolean;
	public scale: gdouble;
	public scale_set: boolean;
	public size: number;
	public size_points: gdouble;
	public size_set: boolean;
	public stretch: Pango.Stretch;
	public stretch_set: boolean;
	public strikethrough: boolean;
	public strikethrough_rgba: Gdk.RGBA;
	public strikethrough_rgba_set: boolean;
	public strikethrough_set: boolean;
	public style: Pango.Style;
	public style_set: boolean;
	public tabs: Pango.TabArray;
	public tabs_set: boolean;
	public underline: Pango.Underline;
	public underline_rgba: Gdk.RGBA;
	public underline_rgba_set: boolean;
	public underline_set: boolean;
	public variant: Pango.Variant;
	public variant_set: boolean;
	public weight: number;
	public weight_set: boolean;
	public wrap_mode: WrapMode;
	public wrap_mode_set: boolean;

	public event (event_object: GObject.Object, event: Gdk.Event, iter: TextIter) : boolean;
	public get_priority () : number;
	public set_priority (priority: number) : void;

}


declare class TextTagTable extends GObject.Object implements Buildable {

	public add (tag: TextTag) : boolean;
	public foreach (_func: TextTagTableForeach, data: gpointer) : void;
	public get_size () : number;
	public lookup (name: string) : TextTag;
	public remove (tag: TextTag) : void;

}


declare class TextView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {

	public accepts_tab: boolean;
	public bottom_margin: number;
	public buffer: TextBuffer;
	public cursor_visible: boolean;
	public editable: boolean;
	public im_module: string;
	public indent: number;
	public input_hints: InputHints;
	public input_purpose: InputPurpose;
	public justification: Justification;
	public left_margin: number;
	public monospace: boolean;
	public overwrite: boolean;
	public pixels_above_lines: number;
	public pixels_below_lines: number;
	public pixels_inside_wrap: number;
	public populate_all: boolean;
	public right_margin: number;
	public tabs: Pango.TabArray;
	public top_margin: number;
	public wrap_mode: WrapMode;

	public add_child_at_anchor (child: Widget, anchor: TextChildAnchor) : void;
	public add_child_in_window (child: Widget, which_window: TextWindowType, xpos: number, ypos: number) : void;
	public backward_display_line (iter: TextIter) : boolean;
	public backward_display_line_start (iter: TextIter) : boolean;
	public buffer_to_window_coords (win: TextWindowType, buffer_x: number, buffer_y: number, window_x: number, window_y: number) : void;
	public forward_display_line (iter: TextIter) : boolean;
	public forward_display_line_end (iter: TextIter) : boolean;
	public get_accepts_tab () : boolean;
	public get_border_window_size (_type: TextWindowType) : number;
	public get_bottom_margin () : number;
	public get_buffer () : TextBuffer;
	public get_cursor_locations (iter: TextIter, strong: Gdk.Rectangle, weak: Gdk.Rectangle) : void;
	public get_cursor_visible () : boolean;
	public get_default_attributes () : TextAttributes;
	public get_editable () : boolean;
	public get_hadjustment () : Adjustment;
	public get_indent () : number;
	public get_input_hints () : InputHints;
	public get_input_purpose () : InputPurpose;
	public get_iter_at_location (iter: TextIter, _x: number, _y: number) : void;
	public get_iter_at_position (iter: TextIter, trailing: number, _x: number, _y: number) : void;
	public get_iter_location (iter: TextIter, location: Gdk.Rectangle) : void;
	public get_justification () : Justification;
	public get_left_margin () : number;
	public get_line_at_y (target_iter: TextIter, _y: number, line_top: number) : void;
	public get_line_yrange (iter: TextIter, _y: number, height: number) : void;
	public get_monospace () : boolean;
	public get_overwrite () : boolean;
	public get_pixels_above_lines () : number;
	public get_pixels_below_lines () : number;
	public get_pixels_inside_wrap () : number;
	public get_right_margin () : number;
	public get_tabs () : Pango.TabArray;
	public get_top_margin () : number;
	public get_vadjustment () : Adjustment;
	public get_visible_rect (visible_rect: Gdk.Rectangle) : void;
	public get_window (win: TextWindowType) : Gdk.Window;
	public get_window_type (window: Gdk.Window) : TextWindowType;
	public get_wrap_mode () : WrapMode;
	public im_context_filter_keypress (event: Gdk.EventKey) : boolean;
	public move_child (child: Widget, xpos: number, ypos: number) : void;
	public move_mark_onscreen (mark: TextMark) : boolean;
	public move_visually (iter: TextIter, count: number) : boolean;
	public place_cursor_onscreen () : boolean;
	public reset_im_context () : void;
	public scroll_mark_onscreen (mark: TextMark) : void;
	public scroll_to_iter (iter: TextIter, within_margin: gdouble, use_align: boolean, xalign: gdouble, yalign: gdouble) : boolean;
	public scroll_to_mark (mark: TextMark, within_margin: gdouble, use_align: boolean, xalign: gdouble, yalign: gdouble) : void;
	public set_accepts_tab (accepts_tab: boolean) : void;
	public set_border_window_size (_type: TextWindowType, size: number) : void;
	public set_bottom_margin (bottom_margin: number) : void;
	public set_buffer (buffer: TextBuffer) : void;
	public set_cursor_visible (setting: boolean) : void;
	public set_editable (setting: boolean) : void;
	public set_indent (indent: number) : void;
	public set_input_hints (hints: InputHints) : void;
	public set_input_purpose (purpose: InputPurpose) : void;
	public set_justification (justification: Justification) : void;
	public set_left_margin (left_margin: number) : void;
	public set_monospace (monospace: boolean) : void;
	public set_overwrite (overwrite: boolean) : void;
	public set_pixels_above_lines (pixels_above_lines: number) : void;
	public set_pixels_below_lines (pixels_below_lines: number) : void;
	public set_pixels_inside_wrap (pixels_inside_wrap: number) : void;
	public set_right_margin (right_margin: number) : void;
	public set_tabs (tabs: Pango.TabArray) : void;
	public set_top_margin (top_margin: number) : void;
	public set_wrap_mode (wrap_mode: WrapMode) : void;
	public starts_display_line (iter: TextIter) : boolean;
	public window_to_buffer_coords (win: TextWindowType, window_x: number, window_y: number, buffer_x: number, buffer_y: number) : void;

}


declare class TextViewAccessible extends ContainerAccessible implements Atk.Component, Atk.EditableText, Atk.StreamableContent, Atk.Text {

}


declare class ThemingEngine extends GObject.Object {

	public name: string;

	public get (state: StateFlags) : void;
	public get_background_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_border (state: StateFlags, border: Border) : void;
	public get_border_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_color (state: StateFlags, color: Gdk.RGBA) : void;
	public get_direction () : TextDirection;
	public get_font (state: StateFlags) : Pango.FontDescription;
	public get_junction_sides () : JunctionSides;
	public get_margin (state: StateFlags, margin: Border) : void;
	public get_padding (state: StateFlags, padding: Border) : void;
	public get_path () : WidgetPath;
	public get_property (property: string, state: StateFlags, value: GObject.Value) : void;
	public get_screen () : Gdk.Screen;
	public get_state () : StateFlags;
	public get_style () : void;
	public get_style_property (property_name: string, value: GObject.Value) : void;
	public get_style_valist (args: va_list) : void;
	public get_valist (state: StateFlags, args: va_list) : void;
	public has_class (style_class: string) : boolean;
	public has_region (style_region: string, flags: RegionFlags) : boolean;
	public lookup_color (color_name: string, color: Gdk.RGBA) : boolean;
	public state_is_running (state: StateType, progress: gdouble) : boolean;

}


declare class ToggleAction extends Action implements Buildable {

	public active: boolean;
	public draw_as_radio: boolean;

	public get_active () : boolean;
	public get_draw_as_radio () : boolean;
	public set_active (is_active: boolean) : void;
	public set_draw_as_radio (draw_as_radio: boolean) : void;
	public toggled () : void;

}


declare class ToggleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public active: boolean;
	public draw_indicator: boolean;
	public inconsistent: boolean;

	public get_active () : boolean;
	public get_inconsistent () : boolean;
	public get_mode () : boolean;
	public set_active (is_active: boolean) : void;
	public set_inconsistent (setting: boolean) : void;
	public set_mode (draw_indicator: boolean) : void;
	public toggled () : void;

}


declare class ToggleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {

}


declare class ToggleToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public active: boolean;

	public get_active () : boolean;
	public set_active (is_active: boolean) : void;

}


declare class ToolButton extends ToolItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {

	public icon_name: string;
	public icon_widget: Widget;
	public label: string;
	public label_widget: Widget;
	public stock_id: string;
	public use_underline: boolean;

	public get_icon_name () : string;
	public get_icon_widget () : Widget;
	public get_label () : string;
	public get_label_widget () : Widget;
	public get_stock_id () : string;
	public get_use_underline () : boolean;
	public set_icon_name (icon_name: string) : void;
	public set_icon_widget (icon_widget: Widget) : void;
	public set_label (label: string) : void;
	public set_label_widget (label_widget: Widget) : void;
	public set_stock_id (stock_id: string) : void;
	public set_use_underline (use_underline: boolean) : void;

}


declare class ToolItem extends Bin implements Atk.ImplementorIface, Activatable, Buildable {

	public is_important: boolean;
	public visible_horizontal: boolean;
	public visible_vertical: boolean;

	public get_ellipsize_mode () : Pango.EllipsizeMode;
	public get_expand () : boolean;
	public get_homogeneous () : boolean;
	public get_icon_size () : number;
	public get_is_important () : boolean;
	public get_orientation () : Orientation;
	public get_proxy_menu_item (menu_item_id: string) : Widget;
	public get_relief_style () : ReliefStyle;
	public get_text_alignment () : gfloat;
	public get_text_orientation () : Orientation;
	public get_text_size_group () : SizeGroup;
	public get_toolbar_style () : ToolbarStyle;
	public get_use_drag_window () : boolean;
	public get_visible_horizontal () : boolean;
	public get_visible_vertical () : boolean;
	public rebuild_menu () : void;
	public retrieve_proxy_menu_item () : Widget;
	public set_expand (expand: boolean) : void;
	public set_homogeneous (homogeneous: boolean) : void;
	public set_is_important (is_important: boolean) : void;
	public set_proxy_menu_item (menu_item_id: string, menu_item: Widget) : void;
	public set_tooltip_markup (markup: string) : void;
	public set_tooltip_text (text: string) : void;
	public set_use_drag_window (use_drag_window: boolean) : void;
	public set_visible_horizontal (visible_horizontal: boolean) : void;
	public set_visible_vertical (visible_vertical: boolean) : void;
	public toolbar_reconfigured () : void;

}


declare class ToolItemGroup extends Container implements Atk.ImplementorIface, Buildable, ToolShell {

	public collapsed: boolean;
	public ellipsize: Pango.EllipsizeMode;
	public header_relief: ReliefStyle;
	public label: string;
	public label_widget: Widget;

	public get_collapsed () : boolean;
	public get_drop_item (_x: number, _y: number) : ToolItem;
	public get_ellipsize () : Pango.EllipsizeMode;
	public get_header_relief () : ReliefStyle;
	public get_item_position (item: ToolItem) : number;
	public get_label () : string;
	public get_label_widget () : Widget;
	public get_n_items () : number;
	public get_nth_item (index: number) : ToolItem;
	public insert (item: ToolItem, position: number) : void;
	public set_collapsed (collapsed: boolean) : void;
	public set_ellipsize (ellipsize: Pango.EllipsizeMode) : void;
	public set_header_relief (style: ReliefStyle) : void;
	public set_item_position (item: ToolItem, position: number) : void;
	public set_label (label: string) : void;
	public set_label_widget (label_widget: Widget) : void;

}


declare class ToolPalette extends Container implements Atk.ImplementorIface, Buildable, Orientable, Scrollable {

	public icon_size: IconSize;
	public icon_size_set: boolean;
	public toolbar_style: ToolbarStyle;

	public add_drag_dest (widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction) : void;
	public get_drag_item (selection: SelectionData) : Widget;
	public get_drop_group (_x: number, _y: number) : ToolItemGroup;
	public get_drop_item (_x: number, _y: number) : ToolItem;
	public get_exclusive (group: ToolItemGroup) : boolean;
	public get_expand (group: ToolItemGroup) : boolean;
	public get_group_position (group: ToolItemGroup) : number;
	public get_hadjustment () : Adjustment;
	public get_icon_size () : number;
	public get_style () : ToolbarStyle;
	public get_vadjustment () : Adjustment;
	public set_drag_source (targets: ToolPaletteDragTargets) : void;
	public set_exclusive (group: ToolItemGroup, exclusive: boolean) : void;
	public set_expand (group: ToolItemGroup, expand: boolean) : void;
	public set_group_position (group: ToolItemGroup, position: number) : void;
	public set_icon_size (icon_size: number) : void;
	public set_style (style: ToolbarStyle) : void;
	public unset_icon_size () : void;
	public unset_style () : void;

}


declare class Toolbar extends Container implements Atk.ImplementorIface, Buildable, Orientable, ToolShell {

	public icon_size: IconSize;
	public icon_size_set: boolean;
	public show_arrow: boolean;
	public toolbar_style: ToolbarStyle;

	public get_drop_index (_x: number, _y: number) : number;
	public get_icon_size () : IconSize;
	public get_item_index (item: ToolItem) : number;
	public get_n_items () : number;
	public get_nth_item (_n: number) : ToolItem;
	public get_relief_style () : ReliefStyle;
	public get_show_arrow () : boolean;
	public get_style () : ToolbarStyle;
	public insert (item: ToolItem, pos: number) : void;
	public set_drop_highlight_item (tool_item: ToolItem, index_: number) : void;
	public set_icon_size (icon_size: IconSize) : void;
	public set_show_arrow (show_arrow: boolean) : void;
	public set_style (style: ToolbarStyle) : void;
	public unset_icon_size () : void;
	public unset_style () : void;

}


declare class Tooltip extends GObject.Object {

	public set_custom (custom_widget: Widget) : void;
	public set_icon (pixbuf: GdkPixbuf.Pixbuf) : void;
	public set_icon_from_gicon (gicon: Gio.Icon, size: number) : void;
	public set_icon_from_icon_name (icon_name: string, size: number) : void;
	public set_icon_from_stock (stock_id: string, size: number) : void;
	public set_markup (markup: string) : void;
	public set_text (text: string) : void;
	public set_tip_area (rect: Gdk.Rectangle) : void;

}


declare class ToplevelAccessible extends Atk.Object {

	public get_children () : GLib.List;

}


declare class TreeModelFilter extends GObject.Object implements TreeDragSource, TreeModel {

	public child_model: TreeModel;
	public virtual_root: TreePath;

	public clear_cache () : void;
	public convert_child_iter_to_iter (filter_iter: TreeIter, child_iter: TreeIter) : boolean;
	public convert_child_path_to_path (child_path: TreePath) : TreePath;
	public convert_iter_to_child_iter (child_iter: TreeIter, filter_iter: TreeIter) : void;
	public convert_path_to_child_path (filter_path: TreePath) : TreePath;
	public get_model () : TreeModel;
	public refilter () : void;
	public set_modify_func (n_columns: number, types: GType[], _func: TreeModelFilterModifyFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_visible_column (column: number) : void;
	public set_visible_func (_func: TreeModelFilterVisibleFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;

}


declare class TreeModelSort extends GObject.Object implements TreeDragSource, TreeModel, TreeSortable {

	public model: TreeModel;

	public clear_cache () : void;
	public convert_child_iter_to_iter (sort_iter: TreeIter, child_iter: TreeIter) : boolean;
	public convert_child_path_to_path (child_path: TreePath) : TreePath;
	public convert_iter_to_child_iter (child_iter: TreeIter, sorted_iter: TreeIter) : void;
	public convert_path_to_child_path (sorted_path: TreePath) : TreePath;
	public get_model () : TreeModel;
	public iter_is_valid (iter: TreeIter) : boolean;
	public reset_default_sort_func () : void;

}


declare class TreeSelection extends GObject.Object {

	public mode: SelectionMode;

	public count_selected_rows () : number;
	public get_mode () : SelectionMode;
	public get_select_function () : TreeSelectionFunc;
	public get_selected (model: TreeModel, iter: TreeIter) : boolean;
	public get_selected_rows (model: TreeModel) : GLib.List;
	public get_tree_view () : TreeView;
	public get_user_data () : gpointer;
	public iter_is_selected (iter: TreeIter) : boolean;
	public path_is_selected (path: TreePath) : boolean;
	public select_all () : void;
	public select_iter (iter: TreeIter) : void;
	public select_path (path: TreePath) : void;
	public select_range (start_path: TreePath, end_path: TreePath) : void;
	public selected_foreach (_func: TreeSelectionForeachFunc, data: gpointer) : void;
	public set_mode (_type: SelectionMode) : void;
	public set_select_function (_func: TreeSelectionFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public unselect_all () : void;
	public unselect_iter (iter: TreeIter) : void;
	public unselect_path (path: TreePath) : void;
	public unselect_range (start_path: TreePath, end_path: TreePath) : void;

}


declare class TreeStore extends GObject.Object implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable {

	public append (iter: TreeIter, parent: TreeIter) : void;
	public clear () : void;
	public insert (iter: TreeIter, parent: TreeIter, position: number) : void;
	public insert_after (iter: TreeIter, parent: TreeIter, sibling: TreeIter) : void;
	public insert_before (iter: TreeIter, parent: TreeIter, sibling: TreeIter) : void;
	public insert_with_values (iter: TreeIter, parent: TreeIter, position: number) : void;
	public insert_with_valuesv (iter: TreeIter, parent: TreeIter, position: number, columns: number[], values: GObject.Value[], n_values: number) : void;
	public is_ancestor (iter: TreeIter, descendant: TreeIter) : boolean;
	public iter_depth (iter: TreeIter) : number;
	public iter_is_valid (iter: TreeIter) : boolean;
	public move_after (iter: TreeIter, position: TreeIter) : void;
	public move_before (iter: TreeIter, position: TreeIter) : void;
	public prepend (iter: TreeIter, parent: TreeIter) : void;
	public remove (iter: TreeIter) : boolean;
	public reorder (parent: TreeIter, new_order: number[]) : void;
	public set (iter: TreeIter) : void;
	public set_column_types (n_columns: number, types: GType[]) : void;
	public set_valist (iter: TreeIter, var_args: va_list) : void;
	public set_value (iter: TreeIter, column: number, value: GObject.Value) : void;
	public set_valuesv (iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number) : void;
	public swap (_a: TreeIter, _b: TreeIter) : void;

}


declare class TreeView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {

	public activate_on_single_click: boolean;
	public enable_grid_lines: TreeViewGridLines;
	public enable_search: boolean;
	public enable_tree_lines: boolean;
	public expander_column: TreeViewColumn;
	public fixed_height_mode: boolean;
	public headers_clickable: boolean;
	public headers_visible: boolean;
	public hover_expand: boolean;
	public hover_selection: boolean;
	public level_indentation: number;
	public model: TreeModel;
	public reorderable: boolean;
	public rubber_banding: boolean;
	public rules_hint: boolean;
	public search_column: number;
	public show_expanders: boolean;
	public tooltip_column: number;
	public ubuntu_almost_fixed_height_mode: boolean;

	public append_column (column: TreeViewColumn) : number;
	public collapse_all () : void;
	public collapse_row (path: TreePath) : boolean;
	public columns_autosize () : void;
	public convert_bin_window_to_tree_coords (bx: number, _by: number, tx: number, _ty: number) : void;
	public convert_bin_window_to_widget_coords (bx: number, _by: number, wx: number, wy: number) : void;
	public convert_tree_to_bin_window_coords (tx: number, _ty: number, bx: number, _by: number) : void;
	public convert_tree_to_widget_coords (tx: number, _ty: number, wx: number, wy: number) : void;
	public convert_widget_to_bin_window_coords (wx: number, wy: number, bx: number, _by: number) : void;
	public convert_widget_to_tree_coords (wx: number, wy: number, tx: number, _ty: number) : void;
	public create_row_drag_icon (path: TreePath) : cairo.Surface;
	public enable_model_drag_dest (targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public enable_model_drag_source (start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public expand_all () : void;
	public expand_row (path: TreePath, open_all: boolean) : boolean;
	public expand_to_path (path: TreePath) : void;
	public get_activate_on_single_click () : boolean;
	public get_background_area (path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle) : void;
	public get_bin_window () : Gdk.Window;
	public get_cell_area (path: TreePath, column: TreeViewColumn, rect: Gdk.Rectangle) : void;
	public get_column (_n: number) : TreeViewColumn;
	public get_columns () : GLib.List;
	public get_cursor (path: TreePath, focus_column: TreeViewColumn) : void;
	public get_dest_row_at_pos (drag_x: number, drag_y: number, path: TreePath, pos: TreeViewDropPosition) : boolean;
	public get_drag_dest_row (path: TreePath, pos: TreeViewDropPosition) : void;
	public get_enable_search () : boolean;
	public get_enable_tree_lines () : boolean;
	public get_expander_column () : TreeViewColumn;
	public get_fixed_height_mode () : boolean;
	public get_grid_lines () : TreeViewGridLines;
	public get_hadjustment () : Adjustment;
	public get_headers_clickable () : boolean;
	public get_headers_visible () : boolean;
	public get_hover_expand () : boolean;
	public get_hover_selection () : boolean;
	public get_level_indentation () : number;
	public get_model () : TreeModel;
	public get_n_columns () : number;
	public get_path_at_pos (_x: number, _y: number, path: TreePath, column: TreeViewColumn, cell_x: number, cell_y: number) : boolean;
	public get_reorderable () : boolean;
	public get_row_separator_func () : TreeViewRowSeparatorFunc;
	public get_rubber_banding () : boolean;
	public get_rules_hint () : boolean;
	public get_search_column () : number;
	public get_search_entry () : Entry;
	public get_search_equal_func () : TreeViewSearchEqualFunc;
	public get_search_position_func () : TreeViewSearchPositionFunc;
	public get_selection () : TreeSelection;
	public get_show_expanders () : boolean;
	public get_tooltip_column () : number;
	public get_tooltip_context (_x: number, _y: number, keyboard_tip: boolean, model: TreeModel, path: TreePath, iter: TreeIter) : boolean;
	public get_vadjustment () : Adjustment;
	public get_visible_range (start_path: TreePath, end_path: TreePath) : boolean;
	public get_visible_rect (visible_rect: Gdk.Rectangle) : void;
	public insert_column (column: TreeViewColumn, position: number) : number;
	public insert_column_with_attributes (position: number, title: string, cell: CellRenderer) : number;
	public insert_column_with_data_func (position: number, title: string, cell: CellRenderer, _func: TreeCellDataFunc, data: gpointer, dnotify: GLib.DestroyNotify) : number;
	public is_blank_at_pos (_x: number, _y: number, path: TreePath, column: TreeViewColumn, cell_x: number, cell_y: number) : boolean;
	public is_rubber_banding_active () : boolean;
	public map_expanded_rows (_func: TreeViewMappingFunc, data: gpointer) : void;
	public move_column_after (column: TreeViewColumn, base_column: TreeViewColumn) : void;
	public remove_column (column: TreeViewColumn) : number;
	public row_activated (path: TreePath, column: TreeViewColumn) : void;
	public row_expanded (path: TreePath) : boolean;
	public scroll_to_cell (path: TreePath, column: TreeViewColumn, use_align: boolean, row_align: gfloat, col_align: gfloat) : void;
	public scroll_to_point (tree_x: number, tree_y: number) : void;
	public set_activate_on_single_click (single: boolean) : void;
	public set_column_drag_function (_func: TreeViewColumnDropFunc, user_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_cursor (path: TreePath, focus_column: TreeViewColumn, start_editing: boolean) : void;
	public set_cursor_on_cell (path: TreePath, focus_column: TreeViewColumn, focus_cell: CellRenderer, start_editing: boolean) : void;
	public set_destroy_count_func (_func: TreeDestroyCountFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_drag_dest_row (path: TreePath, pos: TreeViewDropPosition) : void;
	public set_enable_search (enable_search: boolean) : void;
	public set_enable_tree_lines (enabled: boolean) : void;
	public set_expander_column (column: TreeViewColumn) : void;
	public set_fixed_height_mode (enable: boolean) : void;
	public set_grid_lines (grid_lines: TreeViewGridLines) : void;
	public set_hadjustment (adjustment: Adjustment) : void;
	public set_headers_clickable (setting: boolean) : void;
	public set_headers_visible (headers_visible: boolean) : void;
	public set_hover_expand (expand: boolean) : void;
	public set_hover_selection (hover: boolean) : void;
	public set_level_indentation (indentation: number) : void;
	public set_model (model: TreeModel) : void;
	public set_reorderable (reorderable: boolean) : void;
	public set_row_separator_func (_func: TreeViewRowSeparatorFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_rubber_banding (enable: boolean) : void;
	public set_rules_hint (setting: boolean) : void;
	public set_search_column (column: number) : void;
	public set_search_entry (entry: Entry) : void;
	public set_search_equal_func (search_equal_func: TreeViewSearchEqualFunc, search_user_data: gpointer, search_destroy: GLib.DestroyNotify) : void;
	public set_search_position_func (_func: TreeViewSearchPositionFunc, data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_show_expanders (enabled: boolean) : void;
	public set_tooltip_cell (tooltip: Tooltip, path: TreePath, column: TreeViewColumn, cell: CellRenderer) : void;
	public set_tooltip_column (column: number) : void;
	public set_tooltip_row (tooltip: Tooltip, path: TreePath) : void;
	public set_vadjustment (adjustment: Adjustment) : void;
	public unset_rows_drag_dest () : void;
	public unset_rows_drag_source () : void;

}


declare class TreeViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection, Atk.Table, CellAccessibleParent {

}


declare class TreeViewColumn extends GObject.InitiallyUnowned implements Buildable, CellLayout {

	public alignment: gfloat;
	public cell_area: CellArea;
	public clickable: boolean;
	public expand: boolean;
	public fixed_width: number;
	public max_width: number;
	public min_width: number;
	public reorderable: boolean;
	public resizable: boolean;
	public sizing: TreeViewColumnSizing;
	public sort_column_id: number;
	public sort_indicator: boolean;
	public sort_order: SortType;
	public spacing: number;
	public title: string;
	public visible: boolean;
	public widget: Widget;
	public width: number;
	public x_offset: number;

	public add_attribute (cell_renderer: CellRenderer, attribute: string, column: number) : void;
	public cell_get_position (cell_renderer: CellRenderer, x_offset: number, width: number) : boolean;
	public cell_get_size (cell_area: Gdk.Rectangle, x_offset: number, y_offset: number, width: number, height: number) : void;
	public cell_is_visible () : boolean;
	public cell_set_cell_data (tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) : void;
	public clear () : void;
	public clear_attributes (cell_renderer: CellRenderer) : void;
	public clicked () : void;
	public focus_cell (cell: CellRenderer) : void;
	public get_alignment () : gfloat;
	public get_button () : Widget;
	public get_clickable () : boolean;
	public get_expand () : boolean;
	public get_fixed_width () : number;
	public get_max_width () : number;
	public get_min_width () : number;
	public get_reorderable () : boolean;
	public get_resizable () : boolean;
	public get_sizing () : TreeViewColumnSizing;
	public get_sort_column_id () : number;
	public get_sort_indicator () : boolean;
	public get_sort_order () : SortType;
	public get_spacing () : number;
	public get_title () : string;
	public get_tree_view () : Widget;
	public get_visible () : boolean;
	public get_widget () : Widget;
	public get_width () : number;
	public get_x_offset () : number;
	public pack_end (cell: CellRenderer, expand: boolean) : void;
	public pack_start (cell: CellRenderer, expand: boolean) : void;
	public queue_resize () : void;
	public set_alignment (xalign: gfloat) : void;
	public set_attributes (cell_renderer: CellRenderer) : void;
	public set_cell_data_func (cell_renderer: CellRenderer, _func: TreeCellDataFunc, func_data: gpointer, destroy: GLib.DestroyNotify) : void;
	public set_clickable (clickable: boolean) : void;
	public set_expand (expand: boolean) : void;
	public set_fixed_width (fixed_width: number) : void;
	public set_max_width (max_width: number) : void;
	public set_min_width (min_width: number) : void;
	public set_reorderable (reorderable: boolean) : void;
	public set_resizable (resizable: boolean) : void;
	public set_sizing (_type: TreeViewColumnSizing) : void;
	public set_sort_column_id (sort_column_id: number) : void;
	public set_sort_indicator (setting: boolean) : void;
	public set_sort_order (order: SortType) : void;
	public set_spacing (spacing: number) : void;
	public set_title (title: string) : void;
	public set_visible (visible: boolean) : void;
	public set_widget (widget: Widget) : void;

}


declare class UIManager extends GObject.Object implements Buildable {

	public add_tearoffs: boolean;
	public ui: string;

	public add_ui (merge_id: number, path: string, name: string, action: string, _type: UIManagerItemType, top: boolean) : void;
	public add_ui_from_file (filename: filename) : number;
	public add_ui_from_resource (resource_path: string) : number;
	public add_ui_from_string (buffer: string, length: gssize) : number;
	public ensure_update () : void;
	public get_accel_group () : AccelGroup;
	public get_action (path: string) : Action;
	public get_action_groups () : GLib.List;
	public get_add_tearoffs () : boolean;
	public get_toplevels (types: UIManagerItemType) : GLib.SList;
	public get_ui () : string;
	public get_widget (path: string) : Widget;
	public insert_action_group (action_group: ActionGroup, pos: number) : void;
	public new_merge_id () : number;
	public remove_action_group (action_group: ActionGroup) : void;
	public remove_ui (merge_id: number) : void;
	public set_add_tearoffs (add_tearoffs: boolean) : void;

}


declare class VBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class VButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class VPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class VScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class VScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class VSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {

}


declare class Viewport extends Bin implements Atk.ImplementorIface, Buildable, Scrollable {

	public shadow_type: ShadowType;

	public get_bin_window () : Gdk.Window;
	public get_hadjustment () : Adjustment;
	public get_shadow_type () : ShadowType;
	public get_vadjustment () : Adjustment;
	public get_view_window () : Gdk.Window;
	public set_hadjustment (adjustment: Adjustment) : void;
	public set_shadow_type (_type: ShadowType) : void;
	public set_vadjustment (adjustment: Adjustment) : void;

}


declare class VolumeButton extends ScaleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable {

	public use_symbolic: boolean;

}


declare class Widget extends GObject.InitiallyUnowned implements Atk.ImplementorIface, Buildable {

	public app_paintable: boolean;
	public can_default: boolean;
	public can_focus: boolean;
	public composite_child: boolean;
	public double_buffered: boolean;
	public events: Gdk.EventMask;
	public expand: boolean;
	public halign: Align;
	public has_tooltip: boolean;
	public height_request: number;
	public hexpand: boolean;
	public hexpand_set: boolean;
	public margin: number;
	public margin_bottom: number;
	public margin_end: number;
	public margin_left: number;
	public margin_right: number;
	public margin_start: number;
	public margin_top: number;
	public name: string;
	public no_show_all: boolean;
	public opacity: gdouble;
	public parent: Container;
	public receives_default: boolean;
	public scale_factor: number;
	public sensitive: boolean;
	public style: Style;
	public tooltip_markup: string;
	public tooltip_text: string;
	public valign: Align;
	public vexpand: boolean;
	public vexpand_set: boolean;
	public visible: boolean;
	public width_request: number;
	public window: Gdk.Window;

	public activate () : boolean;
	public add_accelerator (accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags) : void;
	public add_device_events (device: Gdk.Device, events: Gdk.EventMask) : void;
	public add_events (events: number) : void;
	public add_mnemonic_label (label: Widget) : void;
	public add_tick_callback (callback: TickCallback, user_data: gpointer, notify: GLib.DestroyNotify) : number;
	public can_activate_accel (signal_id: number) : boolean;
	public child_focus (direction: DirectionType) : boolean;
	public child_notify (child_property: string) : void;
	public class_path (path_length: number, path: string, path_reversed: string) : void;
	public compute_expand (orientation: Orientation) : boolean;
	public create_pango_context () : Pango.Context;
	public create_pango_layout (text: string) : Pango.Layout;
	public destroy () : void;
	public destroyed (widget_pointer: Widget) : void;
	public device_is_shadowed (device: Gdk.Device) : boolean;
	public drag_begin (targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event) : Gdk.DragContext;
	public drag_begin_with_coordinates (targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event, _x: number, _y: number) : Gdk.DragContext;
	public drag_check_threshold (start_x: number, start_y: number, current_x: number, current_y: number) : boolean;
	public drag_dest_add_image_targets () : void;
	public drag_dest_add_text_targets () : void;
	public drag_dest_add_uri_targets () : void;
	public drag_dest_find_target (context: Gdk.DragContext, target_list: TargetList) : Gdk.Atom;
	public drag_dest_get_target_list () : TargetList;
	public drag_dest_get_track_motion () : boolean;
	public drag_dest_set (flags: DestDefaults, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public drag_dest_set_proxy (proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean) : void;
	public drag_dest_set_target_list (target_list: TargetList) : void;
	public drag_dest_set_track_motion (track_motion: boolean) : void;
	public drag_dest_unset () : void;
	public drag_get_data (context: Gdk.DragContext, target: Gdk.Atom, time_: guint32) : void;
	public drag_highlight () : void;
	public drag_source_add_image_targets () : void;
	public drag_source_add_text_targets () : void;
	public drag_source_add_uri_targets () : void;
	public drag_source_get_target_list () : TargetList;
	public drag_source_set (start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction) : void;
	public drag_source_set_icon_gicon (icon: Gio.Icon) : void;
	public drag_source_set_icon_name (icon_name: string) : void;
	public drag_source_set_icon_pixbuf (pixbuf: GdkPixbuf.Pixbuf) : void;
	public drag_source_set_icon_stock (stock_id: string) : void;
	public drag_source_set_target_list (target_list: TargetList) : void;
	public drag_source_unset () : void;
	public drag_unhighlight () : void;
	public draw (cr: cairo.Context) : void;
	public ensure_style () : void;
	public error_bell () : void;
	public event (event: Gdk.Event) : boolean;
	public freeze_child_notify () : void;
	public get_accessible () : Atk.Object;
	public get_action_group (prefix: string) : Gio.ActionGroup;
	public get_allocated_baseline () : number;
	public get_allocated_height () : number;
	public get_allocated_width () : number;
	public get_allocation (allocation: Allocation) : void;
	public get_ancestor (widget_type: GType) : Widget;
	public get_app_paintable () : boolean;
	public get_can_default () : boolean;
	public get_can_focus () : boolean;
	public get_child_requisition (requisition: Requisition) : void;
	public get_child_visible () : boolean;
	public get_clip (clip: Allocation) : void;
	public get_clipboard (selection: Gdk.Atom) : Clipboard;
	public get_composite_name () : string;
	public get_device_enabled (device: Gdk.Device) : boolean;
	public get_device_events (device: Gdk.Device) : Gdk.EventMask;
	public get_direction () : TextDirection;
	public get_display () : Gdk.Display;
	public get_double_buffered () : boolean;
	public get_events () : number;
	public get_font_map () : Pango.FontMap;
	public get_font_options () : cairo.FontOptions;
	public get_frame_clock () : Gdk.FrameClock;
	public get_halign () : Align;
	public get_has_tooltip () : boolean;
	public get_has_window () : boolean;
	public get_hexpand () : boolean;
	public get_hexpand_set () : boolean;
	public get_mapped () : boolean;
	public get_margin_bottom () : number;
	public get_margin_end () : number;
	public get_margin_left () : number;
	public get_margin_right () : number;
	public get_margin_start () : number;
	public get_margin_top () : number;
	public get_modifier_mask (intent: Gdk.ModifierIntent) : Gdk.ModifierType;
	public get_modifier_style () : RcStyle;
	public get_name () : string;
	public get_no_show_all () : boolean;
	public get_opacity () : gdouble;
	public get_pango_context () : Pango.Context;
	public get_parent () : Widget;
	public get_parent_window () : Gdk.Window;
	public get_path () : WidgetPath;
	public get_pointer (_x: number, _y: number) : void;
	public get_preferred_height (minimum_height: number, natural_height: number) : void;
	public get_preferred_height_and_baseline_for_width (width: number, minimum_height: number, natural_height: number, minimum_baseline: number, natural_baseline: number) : void;
	public get_preferred_height_for_width (width: number, minimum_height: number, natural_height: number) : void;
	public get_preferred_size (minimum_size: Requisition, natural_size: Requisition) : void;
	public get_preferred_width (minimum_width: number, natural_width: number) : void;
	public get_preferred_width_for_height (height: number, minimum_width: number, natural_width: number) : void;
	public get_realized () : boolean;
	public get_receives_default () : boolean;
	public get_request_mode () : SizeRequestMode;
	public get_requisition (requisition: Requisition) : void;
	public get_root_window () : Gdk.Window;
	public get_scale_factor () : number;
	public get_screen () : Gdk.Screen;
	public get_sensitive () : boolean;
	public get_settings () : Settings;
	public get_size_request (width: number, height: number) : void;
	public get_state () : StateType;
	public get_state_flags () : StateFlags;
	public get_style () : Style;
	public get_style_context () : StyleContext;
	public get_support_multidevice () : boolean;
	public get_template_child (widget_type: GType, name: string) : GObject.Object;
	public get_tooltip_markup () : string;
	public get_tooltip_text () : string;
	public get_tooltip_window () : Window;
	public get_toplevel () : Widget;
	public get_valign () : Align;
	public get_valign_with_baseline () : Align;
	public get_vexpand () : boolean;
	public get_vexpand_set () : boolean;
	public get_visible () : boolean;
	public get_visual () : Gdk.Visual;
	public get_window () : Gdk.Window;
	public grab_add () : void;
	public grab_default () : void;
	public grab_focus () : void;
	public grab_remove () : void;
	public has_default () : boolean;
	public has_focus () : boolean;
	public has_grab () : boolean;
	public has_rc_style () : boolean;
	public has_screen () : boolean;
	public has_visible_focus () : boolean;
	public hide () : void;
	public hide_on_delete () : boolean;
	public in_destruction () : boolean;
	public init_template () : void;
	public input_shape_combine_region (region: cairo.Region) : void;
	public insert_action_group (name: string, group: Gio.ActionGroup) : void;
	public intersect (area: Gdk.Rectangle, intersection: Gdk.Rectangle) : boolean;
	public is_ancestor (ancestor: Widget) : boolean;
	public is_composited () : boolean;
	public is_drawable () : boolean;
	public is_focus () : boolean;
	public is_sensitive () : boolean;
	public is_toplevel () : boolean;
	public is_visible () : boolean;
	public keynav_failed (direction: DirectionType) : boolean;
	public list_accel_closures () : GLib.List;
	public list_action_prefixes () : string[];
	public list_mnemonic_labels () : GLib.List;
	public map () : void;
	public mnemonic_activate (group_cycling: boolean) : boolean;
	public modify_base (state: StateType, color: Gdk.Color) : void;
	public modify_bg (state: StateType, color: Gdk.Color) : void;
	public modify_cursor (primary: Gdk.Color, secondary: Gdk.Color) : void;
	public modify_fg (state: StateType, color: Gdk.Color) : void;
	public modify_font (font_desc: Pango.FontDescription) : void;
	public modify_style (style: RcStyle) : void;
	public modify_text (state: StateType, color: Gdk.Color) : void;
	public override_background_color (state: StateFlags, color: Gdk.RGBA) : void;
	public override_color (state: StateFlags, color: Gdk.RGBA) : void;
	public override_cursor (cursor: Gdk.RGBA, secondary_cursor: Gdk.RGBA) : void;
	public override_font (font_desc: Pango.FontDescription) : void;
	public override_symbolic_color (name: string, color: Gdk.RGBA) : void;
	public path (path_length: number, path: string, path_reversed: string) : void;
	public queue_compute_expand () : void;
	public queue_draw () : void;
	public queue_draw_area (_x: number, _y: number, width: number, height: number) : void;
	public queue_draw_region (region: cairo.Region) : void;
	public queue_resize () : void;
	public queue_resize_no_redraw () : void;
	public realize () : void;
	public region_intersect (region: cairo.Region) : cairo.Region;
	public register_window (window: Gdk.Window) : void;
	public remove_accelerator (accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType) : boolean;
	public remove_mnemonic_label (label: Widget) : void;
	public remove_tick_callback (_id: number) : void;
	public render_icon (stock_id: string, size: number, detail: string) : GdkPixbuf.Pixbuf;
	public render_icon_pixbuf (stock_id: string, size: number) : GdkPixbuf.Pixbuf;
	public reparent (new_parent: Widget) : void;
	public reset_rc_styles () : void;
	public reset_style () : void;
	public send_expose (event: Gdk.Event) : number;
	public send_focus_change (event: Gdk.Event) : boolean;
	public set_accel_path (accel_path: string, accel_group: AccelGroup) : void;
	public set_allocation (allocation: Allocation) : void;
	public set_app_paintable (app_paintable: boolean) : void;
	public set_can_default (can_default: boolean) : void;
	public set_can_focus (can_focus: boolean) : void;
	public set_child_visible (is_visible: boolean) : void;
	public set_clip (clip: Allocation) : void;
	public set_composite_name (name: string) : void;
	public set_device_enabled (device: Gdk.Device, enabled: boolean) : void;
	public set_device_events (device: Gdk.Device, events: Gdk.EventMask) : void;
	public set_direction (dir: TextDirection) : void;
	public set_double_buffered (double_buffered: boolean) : void;
	public set_events (events: number) : void;
	public set_font_map (font_map: Pango.FontMap) : void;
	public set_font_options (options: cairo.FontOptions) : void;
	public set_halign (align: Align) : void;
	public set_has_tooltip (has_tooltip: boolean) : void;
	public set_has_window (has_window: boolean) : void;
	public set_hexpand (expand: boolean) : void;
	public set_hexpand_set (set: boolean) : void;
	public set_mapped (mapped: boolean) : void;
	public set_margin_bottom (margin: number) : void;
	public set_margin_end (margin: number) : void;
	public set_margin_left (margin: number) : void;
	public set_margin_right (margin: number) : void;
	public set_margin_start (margin: number) : void;
	public set_margin_top (margin: number) : void;
	public set_name (name: string) : void;
	public set_no_show_all (no_show_all: boolean) : void;
	public set_opacity (opacity: gdouble) : void;
	public set_parent (parent: Widget) : void;
	public set_parent_window (parent_window: Gdk.Window) : void;
	public set_realized (realized: boolean) : void;
	public set_receives_default (receives_default: boolean) : void;
	public set_redraw_on_allocate (redraw_on_allocate: boolean) : void;
	public set_sensitive (sensitive: boolean) : void;
	public set_size_request (width: number, height: number) : void;
	public set_state (state: StateType) : void;
	public set_state_flags (flags: StateFlags, clear: boolean) : void;
	public set_style (style: Style) : void;
	public set_support_multidevice (support_multidevice: boolean) : void;
	public set_tooltip_markup (markup: string) : void;
	public set_tooltip_text (text: string) : void;
	public set_tooltip_window (custom_window: Window) : void;
	public set_valign (align: Align) : void;
	public set_vexpand (expand: boolean) : void;
	public set_vexpand_set (set: boolean) : void;
	public set_visible (visible: boolean) : void;
	public set_visual (visual: Gdk.Visual) : void;
	public set_window (window: Gdk.Window) : void;
	public shape_combine_region (region: cairo.Region) : void;
	public show () : void;
	public show_all () : void;
	public show_now () : void;
	public size_allocate (allocation: Allocation) : void;
	public size_allocate_with_baseline (allocation: Allocation, baseline: number) : void;
	public size_request (requisition: Requisition) : void;
	public style_attach () : void;
	public style_get (first_property_name: string) : void;
	public style_get_property (property_name: string, value: GObject.Value) : void;
	public style_get_valist (first_property_name: string, var_args: va_list) : void;
	public thaw_child_notify () : void;
	public translate_coordinates (dest_widget: Widget, src_x: number, src_y: number, dest_x: number, dest_y: number) : boolean;
	public trigger_tooltip_query () : void;
	public unmap () : void;
	public unparent () : void;
	public unrealize () : void;
	public unregister_window (window: Gdk.Window) : void;
	public unset_state_flags (flags: StateFlags) : void;

}


declare class WidgetAccessible extends Accessible implements Atk.Component {

}


declare class Window extends Bin implements Atk.ImplementorIface, Buildable {

	public accept_focus: boolean;
	public application: Application;
	public attached_to: Widget;
	public decorated: boolean;
	public default_height: number;
	public default_width: number;
	public deletable: boolean;
	public destroy_with_parent: boolean;
	public focus_on_map: boolean;
	public focus_visible: boolean;
	public gravity: Gdk.Gravity;
	public has_resize_grip: boolean;
	public hide_titlebar_when_maximized: boolean;
	public icon: GdkPixbuf.Pixbuf;
	public icon_name: string;
	public mnemonics_visible: boolean;
	public modal: boolean;
	public resizable: boolean;
	public resize_grip_visible: boolean;
	public role: string;
	public screen: Gdk.Screen;
	public skip_pager_hint: boolean;
	public skip_taskbar_hint: boolean;
	public startup_id: string;
	public title: string;
	public transient_for: Window;
	public type: WindowType;
	public type_hint: Gdk.WindowTypeHint;
	public urgency_hint: boolean;
	public window_position: WindowPosition;

	public activate_default () : boolean;
	public activate_focus () : boolean;
	public activate_key (event: Gdk.EventKey) : boolean;
	public add_accel_group (accel_group: AccelGroup) : void;
	public add_mnemonic (keyval: number, target: Widget) : void;
	public begin_move_drag (button: number, root_x: number, root_y: number, timestamp: guint32) : void;
	public begin_resize_drag (edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: guint32) : void;
	public close () : void;
	public deiconify () : void;
	public fullscreen () : void;
	public fullscreen_on_monitor (screen: Gdk.Screen, monitor: number) : void;
	public get_accept_focus () : boolean;
	public get_application () : Application;
	public get_attached_to () : Widget;
	public get_decorated () : boolean;
	public get_default_size (width: number, height: number) : void;
	public get_default_widget () : Widget;
	public get_deletable () : boolean;
	public get_destroy_with_parent () : boolean;
	public get_focus () : Widget;
	public get_focus_on_map () : boolean;
	public get_focus_visible () : boolean;
	public get_gravity () : Gdk.Gravity;
	public get_group () : WindowGroup;
	public get_has_resize_grip () : boolean;
	public get_hide_titlebar_when_maximized () : boolean;
	public get_icon () : GdkPixbuf.Pixbuf;
	public get_icon_list () : GLib.List;
	public get_icon_name () : string;
	public get_mnemonic_modifier () : Gdk.ModifierType;
	public get_mnemonics_visible () : boolean;
	public get_modal () : boolean;
	public get_opacity () : gdouble;
	public get_position (root_x: number, root_y: number) : void;
	public get_resizable () : boolean;
	public get_resize_grip_area (rect: Gdk.Rectangle) : boolean;
	public get_role () : string;
	public get_screen () : Gdk.Screen;
	public get_size (width: number, height: number) : void;
	public get_skip_pager_hint () : boolean;
	public get_skip_taskbar_hint () : boolean;
	public get_title () : string;
	public get_titlebar () : Widget;
	public get_transient_for () : Window;
	public get_type_hint () : Gdk.WindowTypeHint;
	public get_urgency_hint () : boolean;
	public get_window_type () : WindowType;
	public has_group () : boolean;
	public has_toplevel_focus () : boolean;
	public iconify () : void;
	public is_active () : boolean;
	public is_maximized () : boolean;
	public maximize () : void;
	public mnemonic_activate (keyval: number, modifier: Gdk.ModifierType) : boolean;
	public move (_x: number, _y: number) : void;
	public parse_geometry (geometry: string) : boolean;
	public present () : void;
	public present_with_time (timestamp: guint32) : void;
	public propagate_key_event (event: Gdk.EventKey) : boolean;
	public remove_accel_group (accel_group: AccelGroup) : void;
	public remove_mnemonic (keyval: number, target: Widget) : void;
	public reshow_with_initial_size () : void;
	public resize (width: number, height: number) : void;
	public resize_grip_is_visible () : boolean;
	public resize_to_geometry (width: number, height: number) : void;
	public set_accept_focus (setting: boolean) : void;
	public set_application (application: Application) : void;
	public set_attached_to (attach_widget: Widget) : void;
	public set_decorated (setting: boolean) : void;
	public set_default (default_widget: Widget) : void;
	public set_default_geometry (width: number, height: number) : void;
	public set_default_size (width: number, height: number) : void;
	public set_deletable (setting: boolean) : void;
	public set_destroy_with_parent (setting: boolean) : void;
	public set_focus (focus: Widget) : void;
	public set_focus_on_map (setting: boolean) : void;
	public set_focus_visible (setting: boolean) : void;
	public set_geometry_hints (geometry_widget: Widget, geometry: Gdk.Geometry, geom_mask: Gdk.WindowHints) : void;
	public set_gravity (gravity: Gdk.Gravity) : void;
	public set_has_resize_grip (value: boolean) : void;
	public set_has_user_ref_count (setting: boolean) : void;
	public set_hide_titlebar_when_maximized (setting: boolean) : void;
	public set_icon (icon: GdkPixbuf.Pixbuf) : void;
	public set_icon_from_file (filename: filename) : boolean;
	public set_icon_list (list: GLib.List) : void;
	public set_icon_name (name: string) : void;
	public set_keep_above (setting: boolean) : void;
	public set_keep_below (setting: boolean) : void;
	public set_mnemonic_modifier (modifier: Gdk.ModifierType) : void;
	public set_mnemonics_visible (setting: boolean) : void;
	public set_modal (modal: boolean) : void;
	public set_opacity (opacity: gdouble) : void;
	public set_position (position: WindowPosition) : void;
	public set_resizable (resizable: boolean) : void;
	public set_role (role: string) : void;
	public set_screen (screen: Gdk.Screen) : void;
	public set_skip_pager_hint (setting: boolean) : void;
	public set_skip_taskbar_hint (setting: boolean) : void;
	public set_startup_id (startup_id: string) : void;
	public set_title (title: string) : void;
	public set_titlebar (titlebar: Widget) : void;
	public set_transient_for (parent: Window) : void;
	public set_type_hint (hint: Gdk.WindowTypeHint) : void;
	public set_urgency_hint (setting: boolean) : void;
	public set_wmclass (wmclass_name: string, wmclass_class: string) : void;
	public stick () : void;
	public unfullscreen () : void;
	public unmaximize () : void;
	public unstick () : void;

}


declare class WindowAccessible extends ContainerAccessible implements Atk.Component, Atk.Window {

}


declare class WindowGroup extends GObject.Object {

	public add_window (window: Window) : void;
	public get_current_device_grab (device: Gdk.Device) : Widget;
	public get_current_grab () : Widget;
	public list_windows () : GLib.List;
	public remove_window (window: Window) : void;

}


