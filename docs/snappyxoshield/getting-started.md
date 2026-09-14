# Getting Started - SnappyXO Shield

## Installation

### Arduino Library Manager (recommended)

1. Open the Arduino IDE.
2. Go to **Sketch → Include Library → Manage Libraries**.
3. Search for `SnappyXOShield` and click **Install**.

### Manual Installation

1. Download the `.zip` from [GitHub](https://github.com/snappyxo/SnappyXOShield).
2. In the Arduino IDE go to **Sketch → Include Library → Add .ZIP Library**.
3. Or extract to your Arduino libraries folder:
    - **Windows**: `Documents\Arduino\libraries\`
    - **macOS / Linux**: `~/Arduino/libraries/`

---

## Shield v3.0.0+

No special setup required. Just include the library:

```cpp
#include <SnappyXOShield.h>
```

**Pin mapping:**

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 8 |
| IN2 | 7 | 9 |
| Enable (PWM) | 5 | 6 |

---

## Other Hardware - Shield v2.0.0+

Define `SNAPPYXO_SHIELDV2` **before** the `#include` to select the v2 pin mapping:

```cpp
#define SNAPPYXO_SHIELDV2
#include <SnappyXOShield.h>
```

**Pin mapping:**

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 12 |
| IN2 | 5 | 13 |
| Enable (PWM) | 6 | 11 |

---

## Minimal Sketch

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

  pause();
  delay(500);
}
```

---

## Motor Inversion

If your motors are wired in reverse, or left and right are swapped, pass flags to `initMotors()`:

```cpp
// Invert the left motor only
initMotors(true, false, false);

// Swap left and right entirely
initMotors(false, false, true);
```

See the [API Reference](api-reference.md) for full details.

---

## Next Steps

- [API Reference](api-reference.md) - all functions documented
- [Examples](examples.md) - BasicMotorControl, v2 variant, and MicroBlue robot
