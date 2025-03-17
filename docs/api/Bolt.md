# Bolt

A bolt keeps 2 objects together, and prevents all relative movement or rotation between them.

## Fields

---

### .id

Identifier for the bolt. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:destroy()

Destroys the bolt.

---

### \:is_destroyed()

Returns whether or not the bolt still exists.

---

### \:get_object_a()

Gets the first object the bolt is attached to. Can be <Type name="nil" /> if the bolt is connected to the world on that end.

---

### \:get_object_b()

Gets the second object the bolt is attached to. Can be <Type name="nil" /> if the bolt is connected to the world on that end.

---

### \:get_reference_angle()

Difference in angle between the two

---

### \:get_type()

Returns "bolt". Mainly used after `object:get_joints()` to determine what type of joint it is.

