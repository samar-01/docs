# API Reference - MicroBlue

Include the library with:

```cpp
#include <MicroBlue.h>
```

---

## `MicroBlueMessage`

Represents a single BLE message received from or sent to the MicroBlue app.

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | `String` | The command identifier (e.g. `"d0"`, `"LED"`) |
| `value` | `String` | The payload associated with the command |

### Methods

#### `hasId()`

```cpp
bool hasId();
```

Returns `true` if `id` is non-empty. Use this to check whether a message was actually received before accessing `id`.

#### `hasValue()`

```cpp
bool hasValue();
```

Returns `true` if `value` is non-empty.

#### `toString()`

```cpp
String toString();
```

Returns the raw framed string representation of the message (see [Message Protocol](protocol.md)).

#### `MicroBlueMessage::parse()` *(static)*

```cpp
static MicroBlueMessage parse(String raw);
```

Parses a raw framed string and returns a `MicroBlueMessage`. Useful when reading raw bytes manually.

---

## `MicroBlueManager`

Manages the BLE connection and message I/O.

### Constructors

#### Built-in BLE mode *(UNO R4 WiFi)*

```cpp
MicroBlueManager();
```

No arguments - uses the board's integrated BLE radio via the ArduinoBLE library.

```cpp
MicroBlueManager manager;
```

#### HM-10 mode *(UNO R4 Minima, UNO R3, or any board with an HM-10 module)*

```cpp
MicroBlueManager(Stream &s);
```

Pass a `HardwareSerial`, `SoftwareSerial`, or any `Stream`-compatible object.

```cpp
// UNO R4 Minima
MicroBlueManager manager(Serial1);

// UNO R3
SoftwareSerial bleSerial(10, 11);
MicroBlueManager manager(bleSerial);
```

### Methods

#### `begin()`

```cpp
void begin(const char* name);    // Built-in BLE mode - sets the BLE device name
void begin();                    // HM-10 mode
```

Initialises the BLE transport. Call once in `setup()`.

#### `isConnected()`

```cpp
bool isConnected();
```

Returns `true` when a mobile device is currently connected.

#### `read()`

```cpp
MicroBlueMessage read();
```

Reads one message from the BLE buffer. If no complete message is available, returns an empty `MicroBlueMessage` (both `id` and `value` are empty strings). Call this every iteration of `loop()`.

```cpp
void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.hasId()) {
    // process msg.id and msg.value
  }
}
```

#### `write()`

```cpp
void write(MicroBlueMessage msg);
void write(String id, String value);
```

Sends a message to the connected mobile device.

```cpp
manager.write("temp", "23.5");
```
