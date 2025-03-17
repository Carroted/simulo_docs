# Component

Components are

## Fields

---

### .id

Identifier for the component. Is a <Type name="number" />.

---

### .hash

The hash of the component's definition. Is a <Type name="string" />.

## Functions

:::note
Make sure to use `:function()` and not `.function()`, or you'll get an error
:::

---

### \:destroy()

Destroys this component, removing it from its parent object or attachment

---

### \:is_destroyed()

Returns whether this component has been destroyed

---

### \:get_property()

Gets a property value by ID

---

### \:get_properties()

Gets all properties as a table

---

### \:set_property()

Sets a property value. It'll send_event with id "property_changed" and data being the property id.

---

### \:send_event()

Sends an event to the component

