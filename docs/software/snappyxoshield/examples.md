# Examples

All examples ship with the library and are accessible via **File → Examples → SnappyXOShield** in the Arduino IDE.

---

## BasicMotorControl

A simple timed sequence: forward → reverse → turn left → turn right → pause. Good for verifying that wiring and motor direction are correct.

```cpp
#include <SnappyXOShield.h>

void setup() {
  initMotors();
}

void loop() {
  forward();
  delay(1000);

  reverse();
  delay(1000);

  turnLeft();
  delay(500);

  turnRight();
  delay(500);

  pause();
  delay(1000);
}
```

---

## MicroBlueRobot

Bluetooth-controlled robot using the [MicroBlue](../microblue/index.md) library and the UNO R4 WiFi's built-in BLE. The MicroBlue app sends joystick data as two comma-separated integers (steering, throttle) under message IDs `"d0"` or `"d1"`.

**Requires**: MicroBlue library (install separately from Library Manager).

```cpp
// This example shows driving with the MicroBlue app on Arduino UNO R4 WiFi.
// Must install MicroBlue library to use.

#include <MicroBlue.h>
#include <SnappyXOShield.h>

MicroBlueManager manager;

void setup() {
  initMotors();
  manager.begin("My BLE Module");
}

void loop() {
  MicroBlueMessage msg = manager.read();

  if (msg.id == "d0" || msg.id == "d1") {
    int throttle, steering;
    sscanf(msg.value.c_str(), "%d,%d", &steering, &throttle);
    throttle -= 512;  // centre around 0
    steering -= 512;
    drive(throttle, steering);
  }
}
```

The app sends joystick values in the range 0-1024; subtracting 512 maps them to the -512 to +512 range expected by `drive()`. See the [MicroBlue examples](../microblue/examples.md) for more BLE communication patterns.

---

## BasicMotorControl_ShieldV2

!!! note "Bought a kit after 2026?"
    You have a v3 shield. Ignore this example and use `BasicMotorControl` instead.

Identical logic to `BasicMotorControl`, but targets the **SnappyXO Motor Shield v2**. The only difference is the `#define` before the include.

```cpp
// WARNING: This sketch is for the SnappyXO Motor Shield v2 ONLY.
// Do not upload this to a board using any other shield version.

#define SNAPPYXO_SHIELDV2
#include <SnappyXOShield.h>

void setup() {
  initMotors();
}

void loop() {
  forward();
  delay(1000);

  reverse();
  delay(1000);

  turnLeft();
  delay(500);

  turnRight();
  delay(500);

  pause();
  delay(1000);
}
```
