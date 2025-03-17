# FixedJoint

A fixed joint keeps 2 objects together, and tries to prevent relative movement or rotation between them.

## Fields

---

### .id

Identifier for the fixed joint. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:destroy()

Destroys the fixed joint.

---

### \:is_destroyed()

Returns whether or not the fixed joint still exists.

---

### \:get_local_anchor_a()

Gets the anchor of the fixed joint on the first object as a <Type name="vec2" />.

---

### \:get_local_anchor_b()

Gets the anchor of the fixed joint on the second object as a <Type name="vec2" />.

---

### \:set_local_anchor_a()

Moves the anchor of the fixed joint on the first object to a <Type name="vec2" />. Note that this currently only works if the object_a is nil.

---

### \:set_local_anchor_b()

Moves the anchor of the fixed joint on the second object to a <Type name="vec2" />. Note that this currently only works if the object_a is nil.

---

### \:get_world_anchor_a()

Gets where the first anchor of the fixed joint is in the world as a <Type name="vec2" />.

---

### \:get_world_anchor_b()

Gets where the second anchor of the fixed joint is in the world as a <Type name="vec2" />.

---

### \:get_object_a()

Gets the first object the fixed joint is attached to. Can be <Type name="nil" /> if the fixed joint is connected to the world on that end.

---

### \:get_object_b()

Gets the second object the fixed joint is attached to. Can be <Type name="nil" /> if the fixed joint is connected to the world on that end.

---

### \:get_collide_connected()

Gets whether or not the object A will collide with object B

---

### \:get_angular_damping()

Get the angular damping

---

### \:get_linear_damping()

Get the linear damping

---

### \:get_angular_frequency()

Get the angular hertz

---

### \:get_linear_frequency()

Get the linear hertz

---

### \:get_type()

Returns "fixed_joint". Mainly used after `object:get_joints()` to determine what type of joint it is.

