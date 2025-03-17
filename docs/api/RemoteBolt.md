# RemoteBolt

If you return a bolt in a `RemoteScene:run`, you will get a `RemoteBolt` instead of a `Bolt`.

From a `RemoteBolt`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to a `Bolt`, without you needing to send an ID and call `Scene:get_bolt`.

## Fields

---

### .id

Identifier for the bolt. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:get_type()

Returns "bolt". Mainly used after `object:get_joints()` to determine what type of joint it is.

