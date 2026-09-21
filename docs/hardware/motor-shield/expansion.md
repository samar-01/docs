# Expansion - SnappyXO Motor Shield

## PCA9685 I2C Header

The PCA9685 header exposes the I2C bus (SDA/SCL) and allows connecting a PCA9685 PWM controller for up to 16 additional servo channels. The additional servos require their own external power supply - they are not powered by the shield's 6 V regulator.

Connecting the PCA9685 does not prevent other I2C devices from operating simultaneously on the same bus, as long as their addresses do not conflict. The shield itself does not occupy any I2C addresses.

## ICSP Header

The ICSP header is exposed on the shield for in-circuit serial programming. It has been verified to work with PixyCam.

---

## 9 V Output Solder Pad

A solder pad on the back of the shield, when bridged, switches the regulator output from 6 V to 9 V. This increases motor and servo supply voltage, which can result in higher motor speeds.

!!! danger "Risk of damage - use at your own risk"
    Operating at 9 V exceeds the rated voltage of most hobby servos and many DC motors. This can cause overheating, reduced lifespan, or immediate damage to motors and servos. Only use this option if you have confirmed your motors and servos are rated for 9 V operation. This modification is made at your own risk.
