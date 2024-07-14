# Resetting The Scene

The Simulo API currently has no built-in way to reset the scene to its default state. However, by using the following code, we can accomplish it anyway:

```lua
function reset()
    -- Get all objects in the scene
    local objs = Scene:get_all_objects();

    -- Loop from 1 to the number of objects, thus looping over all objects in the scene
    for i=1,#objs do
        objs[i]:destroy(); -- Destroy each object in objs
    end;

    Scene:set_gravity(vec2(0, -9.805)); -- Reset gravity
    Scene.background_color = 0x34213d; -- Reset background color

    -- Re-add the Simulo ground
    Scene:add_box({
        position = vec2(0, -120),
        size = vec2(1000, 100),
        color = 0xb9a1c4,
        is_static = true,
    });
end;
```

After defining this in the Script Box, we can now run `reset();` to clear the scene. This is very useful when prototyping or iterating on a script, as we can keep rerunning it without restarting the game.
