# RemoteFixedJoint

If you return a fixed joint in a `RemoteScene:run`, you will get a `RemoteFixedJoint` instead of a `FixedJoint`.

From a `RemoteFixedJoint`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to a `FixedJoint`, without you needing to send an ID and call `Scene:get_fixed_joint`.

## Fields

---

### .id

Identifier for the fixed joint. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:get_type()

Returns "fixed_joint". Mainly used after `object:get_joints()` to determine what type of joint it is.

