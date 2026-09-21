# Connectors

## Onboard Connectors

| Connector | Color | Description |
|-----------|--------|-------------|
| Battery JST connector | Orange | Primary battery input |
| Battery screw terminals | Green | Alternative battery input |
| DC motor JST connectors | White | Primary motor outputs (up to 2 motors) |
| DC motor screw terminals | Green | Alternative motor outputs (up to 2 additional motors) |
| Servo headers | - | 4 servo outputs (A0, A1, A2, A3), powered by the 6 V regulator |
| Slide switch | - | Switches shield power on/off |
<!-- | PCA9685 I2C header | - | Expansion header for up to 16 additional servos | -->
<!-- | ICSP header | - | In-circuit serial programming | -->

---

## Servo Header Mapping

| Header label | Arduino pin |
|--------------|------------|
| A0 | A0 |
| A1 | A1 |
| A2 | A2 |
| A3 | A3 |

---

## DC Motor Pin Mapping

### Shield v3.0.0+

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 8 |
| IN2 | 7 | 9 |
| Enable (PWM) | 5 | 6 |

### Shield v2.0.0+

!!! note "Bought a kit after 2026?"
    You have a v3 shield. Ignore this section.

| Signal | Left motor | Right motor |
|--------|-----------|------------|
| IN1 | 4 | 12 |
| IN2 | 5 | 13 |
| Enable (PWM) | 6 | 11 |

The Enable pins are PWM-capable, allowing variable motor speed (0-255).

For the v2 pin mapping, define `SNAPPYXO_SHIELDV2` before including the library:

```cpp
#define SNAPPYXO_SHIELDV2
#include <SnappyXOShield.h>
```
