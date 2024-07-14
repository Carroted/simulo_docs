---
sidebar_position: 2
title: Scene
description: The Scene global provides fields and functions relating to the Simulo scene.
---

# Scene

The `Scene` global provides fields and functions relating to the Simulo scene.

## Fields

| Field                    | Description                                     | Note      | Default            | Type                   |
| ------------------------ | ----------------------------------------------- | --------- | ------------------ | ---------------------- |
| `Scene.title`            | The name of the scene                           |           | `"Untitled Scene"` | <Type name="string" /> |
| `Scene.background_color` | The color shown behind the scene                |           | `0x34213d`         | <Type name="number" /> |
| `Scene.runtime_version`  | The version of the Simulo Runtime               | Read-only |                    | <Type name="string" /> |
| `Scene.box2d_version`    | The version of Box2D used in the Simulo runtime | Read-only | `3.0.0`            | <Type name="string" /> |

## Functions

:::note
Make sure to use `Scene:function()` and not `Scene.function()`, or you'll get an error
:::

---

### Scene\:add_box(...)

Adds a new box to the scene. Takes a table as parameter, returns a <Type name="object" />.

#### Example

```lua
Scene:add_box({
    position = vec2(0, 0),
    size = vec2(1, 1),
    color = 0xe5d3b9,
    is_static = false,
});
```

#### Table Fields

| Table Field                         | Description                                             | Note     |
| ----------------------------------- | ------------------------------------------------------- | -------- |
| `position` <Type name="vec2" />     | Where to spawn the box                                  |          |
| `size` <Type name="vec2" />         | Size of the box in meters                               |          |
| `color` <Type name="number" />      | Color of the box, like `0xe5d3b9`                       |          |
| `is_static` <Type name="boolean" /> | Should the box be "glued to the background"?            |          |
| `name` <Type name="string" />       | What should the name of the box be? Defaults to `"Box"` | Optional |

---

### Scene\:add_circle(...)

Adds a new circle to the scene. Takes a table as parameter, returns a <Type name="object" />.

#### Example

```lua
Scene:add_circle({
    position = vec2(0, 0),
    radius = 1,
    color = 0xe5d3b9,
    is_static = false,
});
```

#### Table Fields

| Table Field                         | Description                                                   | Note     |
| ----------------------------------- | ------------------------------------------------------------- | -------- |
| `position` <Type name="vec2" />     | Where to spawn the circle                                     |          |
| `radius` <Type name="number" />     | Radius of the circle in meters                                |          |
| `color` <Type name="number" />      | Color of the circle, like `0xe5d3b9`                          |          |
| `is_static` <Type name="boolean" /> | Should the circle be "glued to the background"?               |          |
| `name` <Type name="string" />       | What should the name of the circle be? Defaults to `"Circle"` | Optional |

---

### Scene\:add_component(...)

Adds a new component to the scene. Takes a table as parameter, returns a <Type name="hash" />.

For a detailed explanation, check out the [Components section of the API Docs](/api/components/).

#### Example

```lua
Scene:add_component({
    name = "My Component",
    version = "0.1.0",
    id = "@john_doe/test/my_component",

    -- Lua/Luau code
    code = [[
        function on_start()
            print("Hello, worlds!");
        end;
    ]],
});
```

#### Table Fields

| Table Field                      | Description                                                                                    | Note     |
| -------------------------------- | ---------------------------------------------------------------------------------------------- | -------- |
| `name` <Type name="string" />    | Where to spawn the circle                                                                      |          |
| `version` <Type name="string" /> | Component metadata version, defaults to `"0.1.0"`                                              | Optional |
| `id` <Type name="string" />      | Unique ID for your component, should be something like `"@yourname/projectname/componentname"` |          |
| `code` <Type name="string" />    | Luau script for the component                                                                  |          |

---

### Scene\:add_simulon(...)

Adds a simulon to the scene, Simulo's mascot. Returns nothing.

This function may be removed by public release, where users will instead be able to spawn simulons just like any other saved object.

#### Example

```lua
Scene:add_simulon({
    position = vec2(0, 0),
    density = 1,
    color = 0xff0000,
});
```

#### Table Fields

| Table Field                      | Description                           | Note     |
| -------------------------------- | ------------------------------------- | -------- |
| `position` <Type name="vec2" />  | Where to spawn the simulon            |          |
| `density` <Type name="number" /> | Density for the simulon               |          |
| `color` <Type name="number" />   | Simulon color, defaults to `0xa9bc67` | Optional |

---

### Scene\:get_object_by_guid(...)

Returns the <Type name="object" /> of the given <Type name="guid" />, or <Type name="nil" /> if it doesn't exist.

#### Example

```lua
local object = Scene:get_object_by_guid(20);
```

---

### Scene\:get_all_objects()

Returns a <Type name="table" /> which is a list of <Type name="object" />s.

#### Example

```lua
local objects = Scene:get_all_objects();

-- Destroy all objects in scene
for i=1,#objects do
    objs[i]:destroy();
end;
```

---

### Scene\:get_gravity()

Returns a <Type name="vec2" /> of the scene's gravity.

#### Example

```lua
local gravity = Scene:get_gravity();

print(tostring(gravity));
```

---

### Scene\:set_gravity(...)

Sets the scene's gravity to a <Type name="vec2" />. Returns nothing.

#### Example

```lua
Scene:set_gravity(vec2(0, -15));
```

---

### Scene\:overlap_circle(...)

Returns a <Type name="table" /> which is a list of <Type name="object" />s that overlap with a circle. Does not actually create any circle shape.

#### Example

```lua
local objects_in_circle = Scene:overlap_circle({
    position = vec2(0, 0),
    radius = 10,
});

-- Print the GUIDs
for i=1,#objects do
    print("Object of GUID " .. tostring(objs[i].guid) .. " was in circle");
end;
```

#### Table Fields

| Table Field                     | Description          | Note |
| ------------------------------- | -------------------- | ---- |
| `position` <Type name="vec2" /> | Center of the circle |      |
| `radius` <Type name="number" /> | Radius of the circle |      |

---

### Scene\:explode(...)

Applies an impulse in the scene at a given point to all objects in its radius.

:::note
The explosion impulse does not depend on distance, all objects in the radius will get the same impulse.
:::

#### Example

```lua
Scene:explode({
    position = vec2(0, 0),
    radius = 10,
    impulse = 10.
});
```

#### Table Fields

| Table Field                      | Description              | Note |
| -------------------------------- | ------------------------ | ---- |
| `position` <Type name="vec2" />  | Center of the explosion  |      |
| `radius` <Type name="number" />  | Radius of the explosion  |      |
| `impulse` <Type name="number" /> | Impulse of the explosion |      |
