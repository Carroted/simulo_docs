# RemoteSpring

If you return a spring in a `RemoteScene:run`, you will get a `RemoteSpring` instead of a `Spring`.

From a `RemoteSpring`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to a `Spring`, without you needing to send an ID and call `Scene:get_spring`.

## Fields

---

### .id

Identifier for the spring. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:get_type()

Returns "spring". Mainly used after `object:get_joints()` to determine what type of joint it is.

