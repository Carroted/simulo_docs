# RemoteComponent

If you return a component in a `RemoteScene:run`, you will get a `RemoteComponent` instead of a `Component`.

From a `RemoteComponent`, you can only get the `id` field. It is otherwise useless, but the point of it is, when you send it back to the remote scene, it'll be converted back to an `Component`, without you needing to send an ID and call `Scene:get_component`.

## Fields

---

### .id

Identifier for the component. Is a <Type name="number" />.

