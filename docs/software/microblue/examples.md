# Examples

All examples ship with the library and are accessible via **File → Examples → MicroBlue** in the Arduino IDE.

---

## UNO R4 WiFi Examples (Built-in BLE)

### UNO_R4_WIFI_LED

Reads a BLE message from the app and turns the built-in LED on (`"1"`) or off (`"0"`).

```cpp
#include <MicroBlue.h>

MicroBlueManager manager;

void setup() {
  manager.begin("My Arduino");
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.id == "LED") {
    digitalWrite(LED_BUILTIN, msg.value == "1" ? HIGH : LOW);
  }
}
```

### UNO_R4_WIFI_SERVO

Controls a servo motor. The app sends an angle value (0-180) which is forwarded to a `Servo` object.

```cpp
#include <Servo.h>
#include <MicroBlue.h>

MicroBlueManager manager;
Servo myServo;

void setup() {
  myServo.attach(9);
  manager.begin("Servo Bot");
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.id == "angle") {
    myServo.write(msg.value.toInt());
  }
}
```

### UNO_R4_WIFI_WRITE_BUTTON

Sends a message *to* the app when a button is pressed. Demonstrates the `write()` direction.

```cpp
#include <MicroBlue.h>

MicroBlueManager manager;
const int BTN = 2;

void setup() {
  pinMode(BTN, INPUT_PULLUP);
  manager.begin("Button Board");
}

void loop() {
  if (digitalRead(BTN) == LOW) {
    manager.write("btn", "pressed");
    delay(200); // debounce
  }
}
```

---

## UNO R4 Minima Examples (HM-10 via Serial1)

### UNO_R4_MINIMA_LED

LED control over HM-10 on the UNO R4 Minima.

### UNO_R4_MINIMA_RGB_LED

Controls an RGB LED using three separate BLE channels (`"R"`, `"G"`, `"B"`), each carrying a value from `0` to `255`.

---

## UNO R3 Examples (HM-10 via SoftwareSerial)

### UNO_R3_LED

Reads a BLE message from the app and turns the built-in LED on or off. Uses `SoftwareSerial` on pins 10/11.

```cpp
#include <SoftwareSerial.h>
#include <MicroBlue.h>

SoftwareSerial bleSerial(10, 11);
MicroBlueManager manager(bleSerial);

void setup() {
  bleSerial.begin(9600);
  manager.begin();
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  MicroBlueMessage msg = manager.read();
  if (msg.id == "LED") {
    digitalWrite(LED_BUILTIN, msg.value == "1" ? HIGH : LOW);
  }
}
```

### UNO_R3_RGB_LED

RGB LED control over HM-10 on the UNO R3.

---

## HM-10 Utility Examples

These examples work on any board with an HM-10 module attached.

### HM10_BLE_READ_LED

Demonstrates reading BLE messages and controlling an LED.

### HM10_BLE_WRITE_BUTTON

Sends a BLE message when a button is pressed.

### HM10_BLE_WRITE_REPEAT

Periodically sends a message to the app at a fixed interval - useful for streaming sensor data.

### HM10_BLE_WRITE_ULTRASONIC_SENSOR

Reads distance from an HC-SR04 ultrasonic sensor and streams readings to the app.

### Rename_HM10_Bluetooth *(GPL v3)*

A standalone configuration utility. Sends AT commands to rename the HM-10 module's BLE advertisement name. Run this once during hardware setup; it does not use the `MicroBlueManager` class.

!!! note "License"
    This example is distributed under **GPL v3**, not MIT. It is a one-time configuration tool, not application code.
