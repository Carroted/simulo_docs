---
title: Components
description: Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo.
---

# Components

Components are scripts you place on objects in Simulo. They're very powerful and allow doing almost anything with scripting, even creating a platformer game in Simulo.

At the moment, no UI exists for creating components (though this will be changed before public release), but we can still create them using scripting.

```lua
local box = Scene:add_box({
    position = vec2(0, 0),
    size = vec2(0.5, 0.5),
    color = 0xe5d3b9,
    is_static = false,
});

local hash = Scene:add_component({
    name = "Player Component",
    id = "@amytimed/test/player_component",
    version = "0.2.0",

    -- Lua/Luau code to make box "jump" when we press W key
    code = [[
        function on_update()
            if Input:key_just_pressed("W") then
                self:apply_force_to_center(vec2(0, 500));
            end;
        end;
    ]],
});

box:add_component(hash); -- We can reuse the hash on other objects
```

You simply add a new component to the scene with `Scene:add_component`, which returns a hash. You can then use `:add_component(hash)` on objects to apply the script on them.

## Events

Components have **event handler** functions which are called at certain times, such as `on_update`, which is called each time the physics is updated.

### on_start

This is called immediately when the component is added on an object.

At the moment, it is thus not particularly useful, since code ran outside of `on_start` will run at the same time, but by the full release of Simulo, this function will get a table parameter called `data`. An additional event named `on_save` will be available, where the object can return a table to be passed to its `on_start` when it is loaded.

### on_update

This is called each time the physics is updated. At the moment, that means `64` times per second, though this will be changed to `60` soon.

### on_event

This function is not currently ever called, but it is coming in The Future

### on_destroy

This function is called when the object is about to be destroyed. When it is called, the object is still completely intact.

## Examples

For some examples, check out the [Components section of the Samples](/category/components).
