# LocalOverlay

If you want to create your own tool with a fancy preview of what it will do, Your overlay is your best friend in a tooled. Look at umm box tool and drag tool in packages/core/tools/, you can use File -> Open Simulo Folder in simu

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:set_rect()

Set rectangular with `{ point_a = aaa, point_b = aaa, color = 0, fill = 0 }` and either color or fill can be nil

---

### \:set_circle()

Set circle with `{ center = aaa, radius = 1, color = 0, fill = 0 }` and either color or fill can be nil

---

### \:set_capsule()

Set capsuled with `{ point_a = aaa, point_b = aaa, radius = 1, color = 0, fill = 0 }` and either color or fill can be nil

---

### \:set_polygon()

Set poly goner with `{ points = {vec2(0, 0), ...}, color = 0, fill = 0, radius = 0 }` and either color or fill can be nil and you dont need radius

---

### \:set_line()

Set line with `{ points = {vec2(0, 0), vec2(1, 0)}, color = 0 }`

---

### \:destroy()

Total annihilation

