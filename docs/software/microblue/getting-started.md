# Getting Started

## Installation

### Arduino Library Manager (recommended)

1. Open the Arduino IDE.
2. Go to **Sketch → Include Library → Manage Libraries**.
3. Search for `MicroBlue` and click **Install**.

For the UNO R4 WiFi you also need the **ArduinoBLE** library - install it the same way.

### Manual Installation

1. Download the `.zip` from [GitHub](https://github.com/snappyxo/microblue-arduino).
2. In the Arduino IDE go to **Sketch → Include Library → Add .ZIP Library**.
3. Alternatively, extract the archive to your Arduino libraries folder:
    - **Windows**: `Documents\Arduino\libraries\`
    - **macOS**: `~/Documents/Arduino/libraries/`
    - **Linux**: `~/Arduino/libraries/`

---

## UNO R4 WiFi - Built-in BLE

No external module or wiring needed. The built-in BLE radio is used automatically.

```cpp
#include <MicroBlue.h>

MicroBlueManager manager; // no Serial argument = built-in BLE

void setup() {
  manager.begin("My Robot");
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.hasId()) {
    // handle message
  }
}
```

---

## Other Boards - HM-10 Module

For boards without built-in BLE, connect an HM-10 module and pass its serial stream to `MicroBlueManager`.

### Wiring

**UNO R4 Minima - Serial1**

| HM-10 pin | Arduino pin |
|-----------|-------------|
| VCC | 3.3 V |
| GND | GND |
| TX | D0 (Serial1 RX) |
| RX | D1 (Serial1 TX) |

**UNO R3 - SoftwareSerial**

| HM-10 pin | Arduino pin |
|-----------|-------------|
| VCC | 3.3 V |
| GND | GND |
| TX | D10 (SoftwareSerial RX) |
| RX | D11 (SoftwareSerial TX) |

!!! warning "Voltage divider on RX (UNO R3)"
    The HM-10 RX pin is 3.3 V tolerant. Use a voltage divider (e.g. 1 kΩ + 2 kΩ) when connecting from the 5 V UNO R3 TX line.

### UNO R4 Minima sketch

```cpp
#include <MicroBlue.h>

MicroBlueManager manager(Serial1);

void setup() {
  Serial1.begin(9600);
  manager.begin();
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.hasId()) {
    // handle message
  }
}
```

### UNO R3 sketch

```cpp
#include <SoftwareSerial.h>
#include <MicroBlue.h>

SoftwareSerial bleSerial(10, 11); // RX, TX
MicroBlueManager manager(bleSerial);

void setup() {
  bleSerial.begin(9600);
  manager.begin();
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.hasId()) {
    // handle message
  }
}
```

---

## Next Steps

- [API Reference](api-reference.md) - full class and method documentation
- [Message Protocol](protocol.md) - wire format details
- [Examples](examples.md) - working sketches for LEDs, buttons, sensors, and servos
