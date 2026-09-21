# Getting Started - SnappyXO Motor Shield

## What You Need

- SnappyXO Motor Shield
- Arduino Uno (R3, R4 Minima, or R4 WiFi)
- Battery (6 V pack, 9 V battery, or 1S-3S LiPo)
- Up to 2 DC motors (JST connectors) or up to 4 (JST + screw terminals)
- Up to 4 servos (optional)
- [SnappyXOShield library](../../software/snappyxoshield/getting-started.md) installed in the Arduino IDE

---

## 1. Stack the Shield

Press the motor shield firmly onto the Arduino Uno header pins. The shield sits flush on top of the board.

---

## 2. Connect Your Motors

Plug DC motors into the **white JST motor connectors** on the shield - these are the primary motor outputs. The **green screw terminals** are available as an alternative if your motors don't have JST connectors.

| JST connector | Motor |
|---------------|-------|
| Motor A JST | Left motor |
| Motor B JST | Right motor |

If your motors are spinning the wrong way after uploading a sketch, use the inversion flags in `initMotors()` - see the [SnappyXOShield API reference](../../software/snappyxoshield/api-reference.md). Alternatively, you can swap the two wires on that motor's connector.

---

## 3. Connect Power

Plug your battery into the **orange battery JST connector**. The **green screw terminals** are available as an alternative.

Flip the **slide switch on the bottom right of the shield** to power it on. The shield power LED should turn on. If the motors are not responding, this switch is the first thing to check.

!!! note "Common issue"
    The robot will not move if the slide switch is off, even if the Arduino is powered via USB.

!!! warning "Polarity"
    The shield includes reverse polarity protection, but always connect the battery with the correct polarity.

**Supported batteries:**

| Battery | Notes |
|---------|-------|
| 6 V battery pack | Most common - powers Arduino even under motor load |
| 9 V battery | Common - suitable for light use |
| 1S-3S LiPo | |

---

## 4. Upload a Sketch

Install the [SnappyXOShield library](../../software/snappyxoshield/getting-started.md) from the Arduino Library Manager, then upload the BasicMotorControl example:

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

The robot should drive forward, reverse, turn left, turn right, then pause - repeating in a loop.

---

## Next Steps

- [Connectors](connectors.md) - full connector and pin mapping reference
- [Expansion](expansion.md) - PCA9685, ICSP, and the 9 V output solder pad
- [SnappyXOShield API Reference](../../software/snappyxoshield/api-reference.md) - all motor control functions
