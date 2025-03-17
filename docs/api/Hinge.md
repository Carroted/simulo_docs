# Hinge

A hinge is a joint between 2 objects.

## Fields

---

### .id

Identifier for the hinge. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:destroy()

Destroys the hinge.

---

### \:is_destroyed()

Returns whether or not the hinge still exists.

---

### \:get_local_anchor_a()

Gets the anchor of the hinge on the first object as a <Type name="vec2" />.

---

### \:get_local_anchor_b()

Gets the anchor of the hinge on the second object as a <Type name="vec2" />.

---

### \:set_local_anchor_a()

Moves the anchor of the hinge on the first object to a <Type name="vec2" />. Note that this currently only works if the object_a is nil.

---

### \:set_local_anchor_b()

Moves the anchor of the hinge on the second object to a <Type name="vec2" />. Note that this currently only works if the object_a is nil.

---

### \:get_world_anchor_a()

Gets where the first anchor of the hinge is in the world as a <Type name="vec2" />.

---

### \:get_world_anchor_b()

Gets where the second anchor of the hinge is in the world as a <Type name="vec2" />.

---

### \:get_force()

Gets the force applied by the hinge as a <Type name="vec2" />.

---

### \:get_angle()

Gets the angle of the hinge in radians as a <Type name="number" />.

---

### \:get_torque()

Gets the torque applied by the hinge as a <Type name="number" />.

---

### \:get_motor_enabled()

Returns whether or not the hinge's motor is enabled.

---

### \:set_motor_enabled()

Enables or disables the hinge's motor.

---

### \:get_motor_speed()

Gets the speed of the hinge's motor as a <Type name="number" />.

---

### \:set_motor_speed()

Sets the speed of the hinge's motor.

---

### \:get_max_motor_torque()

Gets the maximum torque of the hinge's motor as a <Type name="number" />.

---

### \:set_max_motor_torque()

Sets the maximum torque of the hinge's motor.

---

### \:get_motor_current_torque()

Gets the current torque of the hinge's motor as a <Type name="number" />.

---

### \:get_object_a()

Gets the first object the hinge is attached to. Can be <Type name="nil" /> if the hinge is connected to the world on that end.

---

### \:get_object_b()

Gets the second object the hinge is attached to. Can be <Type name="nil" /> if the hinge is connected to the world on that end.

---

### \:get_collide_connected()

Gets whether or not the object A will collide with object B

---

### \:get_type()

Returns "hinge". Mainly used after `object:get_joints()` to determine what type of joint it is.

