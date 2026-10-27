# SnappyXO Motor Shield

SnappyXOShield is an Arduino library for driving the two motors on the SnappyXO Motor Shield. Everything lives in a `SnappyXOShield` object - `shield.forward()`, `shield.reverse()`, `shield.spinLeft()`, `shield.spinRight()` - plus speed variants and a joystick-style `shield.drive()` for analog/BLE-controlled robots.

## Supported Hardware

The shield version should match (v2 or v3) what is written on the box of your kit. The shield version is also written on the bottom right of the back side (for v3 shields) or on the left side of the top (for v2 shields). There's no default - every sketch declares which one it's written for:

| Shield version | In the sketch |
|----------------|--------------|
| v3 | `SnappyXOShield shield(SnappyXOShield::V3);` |
| v2 | `SnappyXOShield shield(SnappyXOShield::V2);` |

--8<-- "snippets/v2-note.md"

## Key Features

- Full-speed and variable-speed movement commands
- In-place spin turns (`spinLeft()` / `spinRight()`)
- Per-wheel speed control with `setMotors(left, right)`
- Coasting stop (`stop()`) and instant active brake (`brake()`)
- `drive(throttle, steering)` joystick-style mixing, with squared inputs for gentler steering
- `invertLeft()`, `invertRight()`, `swapMotors()` for reversed or swapped wiring

## Installation

Install from the **Arduino Library Manager**: search for `SnappyXOShield` and click Install.

## Source

- **Version**: <span id="lib-version-snappyxoshield">0.3.0</span>
- **GitHub**: [snappyxo/SnappyXOShield](https://github.com/snappyxo/SnappyXOShield)
- **License**: MIT
