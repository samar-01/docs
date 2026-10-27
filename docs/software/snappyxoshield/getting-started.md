# Getting Started

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

## Declare Your Shield

Every sketch names the shield version printed on the board - there's no default:

```cpp
#include <SnappyXOShield.h>

SnappyXOShield shield(SnappyXOShield::V3);  // or SnappyXOShield::V2
```

**Pin mapping:**

| Signal | v3 left | v3 right | v2 left | v2 right |
|--------|---------|----------|---------|----------|
| IN1 | 4 | 8 | 4 | 12 |
| IN2 | 7 | 9 | 5 | 13 |
| Enable (PWM) | 5 | 6 | 6 | 11 |
| Servo headers | A0, A1, A2, A3 | | 9, 10, A0, A1 | |

The library only sets up the motor pins - a sketch shouldn't use them for anything else. On the UNO R3, the IRremote library takes over the timer behind pin 11, so an IR receiver and the v2 shield's motors don't work together; the v3 shield's speed pins (5 and 6) aren't affected.

--8<-- "snippets/v2-note.md"

---

## Minimal Sketch

```cpp
#include <SnappyXOShield.h>

SnappyXOShield shield(SnappyXOShield::V3);

void setup() {
  shield.begin();
}

void loop() {
  shield.forward();
  delay(1000);

  shield.reverse();
  delay(1000);

  shield.stop();
  delay(500);
}
```

---

## Motor Inversion

If a wheel turns the wrong way, or left and right are swapped, call these in `setup()` after `begin()`:

```cpp
shield.begin();

shield.invertLeft();   // left motor turns the wrong way
shield.invertRight();  // right motor turns the wrong way
shield.swapMotors();   // left and right are plugged in the other way round
```

See the [API Reference](api-reference.md) for full details.

---

## Next Steps

- [API Reference](api-reference.md) - all methods documented
- [Examples](examples.md) - BasicMotorControl and the MicroBlue drive example
