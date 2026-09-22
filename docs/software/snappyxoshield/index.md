# SnappyXO Motor Shield

SnappyXOShield is an Arduino library for simplified motor control with the SnappyXO Motor Shield. It exposes intuitive movement commands - `forward()`, `reverse()`, `turnLeft()`, `turnRight()` - as well as speed variants and a joystick-style `drive()` function for analog/BLE-controlled robots.

## Supported Hardware

The shield version should match (v2 or v3) what is written on the box of your kit. The shield version is also written on the bottom right of the back side (for v3 shields) or on the left side of the top (for v2 shields).

| Shield version | How to select |
|----------------|--------------|
| v3.0.0 | Default - just `#include <SnappyXOShield.h>` |
| v2.x.x | Define `SNAPPYXO_SHIELDV2` *before* the `#include` |

--8<-- "snippets/v2-note.md"

## Key Features

- Full-speed and variable-speed movement commands
- In-place pivot turns
- Gradual coast stop (`pause()`) and instant active brake (`brake()`)
- `drive(throttle, steering)` differential mixing with clamping - no dead zones
- Motor inversion flags for reversed or swapped wiring
- Header-only - no `.cpp` file to compile

## Installation

Install from the **Arduino Library Manager**: search for `SnappyXOShield` and click Install.

## Source

- **Version**: <span id="lib-version-snappyxoshield">0.2.0</span>
- **GitHub**: [snappyxo/SnappyXOShield](https://github.com/snappyxo/SnappyXOShield)
- **License**: GPL-3.0
