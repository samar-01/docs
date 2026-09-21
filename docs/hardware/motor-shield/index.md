# SnappyXO Motor Shield

The SnappyXO Motor Shield is an Arduino shield for controlling two DC motors. It uses an H-bridge motor driver circuit and stacks directly onto an Arduino Uno board.

## Compatible Boards

- Arduino UNO R3
- Arduino UNO R4 Minima
- Arduino UNO R4 WiFi

## Shield Versions

| Version | Notes |
|---------|-------|
| v3.0.0+ | Current version - default pin mapping |
| v2.0.0+ | Previous version - select with `#define SNAPPYXO_SHIELDV2` |

---

## Pin Mapping

### v3.0.0+

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 8 |
| IN2 | 7 | 9 |
| Enable (PWM) | 5 | 6 |

### v2.0.0+

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 12 |
| IN2 | 5 | 13 |
| Enable (PWM) | 6 | 11 |

The Enable pins are PWM-capable, allowing variable motor speed (0-255).

---

## Electrical Specifications

| Parameter | Value |
|-----------|-------|
| Motor supply voltage | <!-- e.g. 6-12 V --> |
| Logic voltage | 5 V |
| Max motor current (per channel) | <!-- e.g. 1 A --> |
| Motor driver IC | <!-- e.g. L298N --> |

!!! note
    Fill in the table above with the values from the hardware datasheet.

---

## Using the Software Library

The [SnappyXOShield](../../software/snappyxoshield/index.md) Arduino library provides a simple API for this hardware. Install it via the Arduino Library Manager and call `initMotors()` in your sketch setup.

```cpp
#include <SnappyXOShield.h>

void setup() {
  initMotors();
}

void loop() {
  forward();
  delay(1000);
  pause();
  delay(1000);
}
```

See the [SnappyXOShield getting started guide](../../software/snappyxoshield/getting-started.md) for full wiring and usage instructions.
