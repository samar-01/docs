# SnappyXO Motor Shield

The SnappyXO Motor Shield stacks onto an Arduino Uno and provides regulated power, motor control, and servo output for robotics projects.

[Get started](getting-started.md) | [Connectors](connectors.md) | [Expansion](expansion.md)

![SnappyXO Motor Shield v3](motorshieldv3.avif)

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
| Input voltage | 3-13 V |
| Supported batteries | 6 V pack, 9 V battery, 1S-3S LiPo |
| Regulated output | 6 V (buck-boost regulator) |
| Reverse polarity protection | Yes |
| Overcurrent protection | Self-resetting fuse |

The 6 V regulator powers both the DC motor outputs and the servo headers. The battery input also powers the Arduino through the VIN pin, while remaining compatible with USB or barrel jack power.

---

## Shield Versions

| Version | Notes |
|---------|-------|
| v3.0.0+ | Current version - default pin mapping |
| v2.0.0+ | Previous version - select with `#define SNAPPYXO_SHIELDV2` |

!!! note "Bought a kit after 2026?"
    You have a v3 shield. Ignore all v2 information on this page.

---

## Software Library

The [SnappyXOShield](../../software/snappyxoshield/index.md) Arduino library provides a simple API for this hardware. Install it via the Arduino Library Manager.
