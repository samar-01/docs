# Power

## Specifications

| Parameter | Value |
|-----------|-------|
| Input voltage | 3-13 V |
| Supported batteries | 6 V pack, 9 V battery, 1S-3S LiPo |
| Regulated output | 6 V (buck-boost regulator) |
| Reverse polarity protection | Yes |
| Overcurrent protection | Self-resetting fuse |

The 6 V regulator powers both the DC motor outputs and the servo headers. The battery input also powers the Arduino through the VIN pin, while remaining compatible with USB or barrel jack power.

---

## How Power Sources Interact

The shield and Arduino each have independent power inputs that interact depending on what is connected and whether the slide switch is on.

**Shield battery (orange JST or green screw terminals + slide switch)**

- Switch **on**: powers the motors, servos, and the Arduino (via VIN). This is the normal operating state.
- Switch **off**: the shield battery is effectively disconnected. Motors will not run. The Arduino can still be powered by USB or its barrel jack.
- If a 9 V or higher battery is connected to the Arduino barrel jack at the same time, the Arduino will take power from the barrel jack instead of the shield, since the barrel jack voltage is higher.

**Arduino barrel jack and USB**

- Either will power the Arduino regardless of the shield switch state.
- Both will still allow motors to run, as long as the shield battery is also connected and switched on.

---

## Recommended Power Setups

**Two-battery setup (recommended for Bluetooth use)**

Connect a **9 V battery to the Arduino barrel jack** and a **6 V pack to the shield**. This lets you disable the motors by flipping the shield switch off, while keeping the Arduino and Bluetooth connection alive. To turn everything off, flip the switch and remove the barrel jack.

**Single-battery setup (recommended for simplest on/off)**

Connect a single battery to the shield only. The slide switch turns everything on and off together, including the Arduino. This is the easiest setup for a robot you want to switch on and off quickly.

---

## Battery Life

A standard 9 V alkaline battery has low capacity (around 500 mAh) and will drain quickly under motor load - often within minutes of active use. A 6 V AA battery pack has much higher capacity (typically 1500-2000 mAh) and will last significantly longer for the same workload. For this reason, a 6 V pack is strongly recommended over a 9 V for any extended use.
