# SnappyXO Motor Shield

SnappyXOShield is an Arduino library for simplified motor control with the SnappyXO Motor Shield. It exposes intuitive movement commands — `forward()`, `reverse()`, `turnLeft()`, `turnRight()` — as well as speed variants and a joystick-style `drive()` function for analog/BLE-controlled robots.

## Supported Hardware

| Shield version | How to select |
|----------------|--------------|
| v3.0.0+ | Default — just `#include <SnappyXOShield.h>` |
| v2.0.0+ | Define `SNAPPYXO_SHIELDV2` *before* the `#include` |

## Key Features

- Full-speed and variable-speed movement commands
- In-place pivot turns
- Gradual coast stop (`pause()`) and instant active brake (`brake()`)
- `drive(throttle, steering)` differential mixing with clamping — no dead zones
- Motor inversion flags for reversed or swapped wiring
- Header-only — no `.cpp` file to compile

## Source

- **Version**: 0.2.0
- **GitHub**: [snappyxo/SnappyXOShield](https://github.com/snappyxo/SnappyXOShield)
- **License**: GPL-3.0
