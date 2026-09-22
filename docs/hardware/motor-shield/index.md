# SnappyXO Motor Shield

The SnappyXO Motor Shield stacks onto an Arduino Uno and provides regulated power, motor control, and servo output for robotics projects.

[Get started](getting-started.md) | [Power](power.md) | [Connectors](connectors.md) | [Expansion](expansion.md)

<div style="display: flex; gap: 1rem;">
  <img src="motorshieldv3.avif" style="width: 48%;">
  <img src="motorshieldv3back.avif" style="width: 48%;">
</div>

---

## Compatible Boards

- Arduino UNO R3
- Arduino UNO R4 Minima
- Arduino UNO R4 WiFi

---

## Motor and Servo Capacity

| Configuration | DC Motors | Servos |
|---------------|-----------|--------|
| Typical | 2 (via JST) | 4 (onboard headers) |
| Maximum | 4 (JST + screw terminals) | 4 onboard + 16 via PCA9685 expansion |

---

## Power

| Parameter | Value |
|-----------|-------|
| Input voltage | 3-12 V |
| Supported batteries | 6 V pack, 9 V battery, 1S-3S LiPo |
| Regulated output | 6 V (buck-boost regulator) |
| Reverse polarity protection | Yes |
| Overcurrent protection | Self-resetting fuse |

See the [Power](power.md) page for details on how power sources interact and recommended setups.

---

## LEDs

| LED | Color | Indicates |
|-----|-------|-----------|
| Shield power | Green | Shield battery is connected and the slide switch is on |
| UNO power | Green | Arduino is powered - either by the shield, or by its own barrel jack or USB |
| D13 | White | Connected to digital pin 13, same as the Arduino's built-in LED |

---

## Shield Versions

The shield version should match (v2 or v3) what is written on the box of your kit. The shield version is also written on the bottom right of the back side (for v3 shields) or on the left side of the top (for v2 shields).

| Version | Notes |Produced from|
|---------|-------|-------------|
| v3.0.0 | version - default pin mapping | 2026 - Present |
| v2.x.x | Previous version - select with `#define SNAPPYXO_SHIELDV2`. Also requires different power options. | 2022 - 2026|

--8<-- "snippets/v2-note.md"

---

## Software Library

The [SnappyXOShield](../../software/snappyxoshield/index.md) Arduino library provides a simple API for this hardware. Install it via the Arduino Library Manager.
