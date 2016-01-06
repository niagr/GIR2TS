# GIR2TS

Reads [GObject Introspection][GI site] GIR files to produce [TypeScript][TS] declaration files aimed for use with [GJS][GJS]. It is a NodeJS script itself written in TypeScript.

[GI site]: https://wiki.gnome.org/Projects/GObjectIntrospection
[TS]: http://www.typescriptlang.org/
[GJS]: https://wiki.gnome.org/Projects/Gjs

## Status
Currently generates the bindings hosted on [GJS-TS].

## Usage

```
git clone https://github.com/niagr/GIR2TS.git
cd GIR2TS/src
node ./sctipt.js --excludedir=../exceptions --outdir=../typings --girdir=../gir
```

### Options:
```--outdir```      The directory to put the .d.ts files in.

```--girdir```      The directory to read the .gir files from

```--excludedir```  The directory from which to read the json files describing the manual overrides

Currently applies the following mappings:

### Class
Generates an interface corresponding to the instance side of the class and a matching object of the same name as the constructor that contains the constructor and static methods. Properties are not included in the declarations because they cause naming conflicts with the methods and signals. Most properties should be accessed using getters and setters anyway and for the rare times when that's not an option we can always cast to ```any```.
```typescript
interface Window {
    set_default_size (width: number, height: number): void;
    set_title (title: string): void;
    // rest of methods
}
let Window : {
    new (): Window;
}
```

### Interfaces
Maps to typescript interfaces.

### Functions
Map to typescript function declarations.

### Enums and Bitfields
Maps to typescript enums.

### Record
Maps to typescript classes with properties and methods.

### Callbacks
Map to typescript interfaces with call signatures. For example:
```typescript
interface CellAllocCallback {
	(renderer: CellRenderer, cell_area: Gdk.Rectangle, cell_background: Gdk.Rectangle, data: any) : boolean;
}
```

### Unions
Currently map to blank typescript interfaces. To access members cast to any or an ad hoc interface.

### Alias
Map to typescript ```type``` declarations. For example:
```typescript
type Allocation = Gdk.Rectangle;
```

### Manual Overrides
Sometimes, since the GObject property names are computed dynamically, methods, signals and properties often end up having the same names and interfaces overload inherited methods which doesn't fly with TypeScript. For this reason, certain classes, methods, etc. are ommited manually. These are commented out in the declaration files.

These manual overrides are specified in json files, one for each GIR file. The ```exceptions``` directory contains these files.
For example, this is the overrides file for Gtk:
```json
{
    "exclude": {
        "class": {
            "Widget": [
                "activate",
                "child_notify",
                "get_window",
                "mnemonic_activate",
                "get_direction",
                "get_state",
                "grab_focus",
                "set_direction",
                "set_state",
                "set_style",
                "get_style"
            ],
            "Container": [
                "remove"
            ],
            "CellAreaBox": [
                "pack_end",
                "pack_start"
            ]
        },
        "function": [
            "false",
            "true"
        ]
    }
}
```

[GJS-TS]: https://github.com/niagr/gjs-ts

## TODO
* constructor support
* in out parameter
* signals
