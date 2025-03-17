# RemoteObject

If you return an object in a `RemoteScene:run`, you will get a `RemoteObject` instead of an `Object`.

From a `RemoteObject`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to an `Object`, without you needing to send an ID and call `Scene:get_object`.

## Fields

---

### .id

Identifier for the object. Is a <Type name="number" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:get_type()

Returns `"object"`.

