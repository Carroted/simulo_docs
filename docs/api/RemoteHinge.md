# RemoteHinge

If you return a hinge in a `RemoteScene:run`, you will get a `RemoteHinge` instead of a `Hinge`.

From a `RemoteHinge`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to a `Hinge`, without you needing to send an ID and call `Scene:get_hinge`.

## Fields

---

### .id

Identifier for the hinge. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:get_type()

Returns "hinge". Mainly used after `object:get_joints()` to determine what type of joint it is.

