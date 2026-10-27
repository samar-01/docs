# API Reference

Include the library and create a shield object, naming the version printed on the board:

```cpp
#include <SnappyXOShield.h>

SnappyXOShield shield(SnappyXOShield::V3);  // or SnappyXOShield::V2
```

There's no default version - `SnappyXOShield shield;` without one, it fails to compile, with a message telling you to add it.

Speeds run from **-255** (full backward) to **255** (full forward); 0 is stop. Values outside that range are clamped.

---

## Initialisation

### `begin()`

```cpp
void begin();
```

Sets the motor pins as outputs and stops both motors. Call once in `setup()`.

---

## Motors That Turn the Wrong Way

Call these in `setup()`, after `begin()`.

### `invertLeft()` / `invertRight()`

```cpp
void invertLeft(bool invert = true);
void invertRight(bool invert = true);
```

Reverses the motor on the shield's left or right output.

### `swapMotors()`

```cpp
void swapMotors(bool swap = true);
```

Swaps the left and right outputs, for motors plugged in the other way round.

---

## Movement Commands

### `forward()` / `reverse()`

```cpp
void forward(int speed = 255);
void reverse(int speed = 255);
```

Drives both wheels forward or backward. `speed` is 0-255 (full speed when omitted).

### `spinLeft()` / `spinRight()`

```cpp
void spinLeft(int speed = 255);
void spinRight(int speed = 255);
```

Spins in place: `spinLeft()` drives the left wheel backward and the right wheel forward; `spinRight()` is the reverse. `speed` is 0-255.

### `setMotors()`

```cpp
void setMotors(int left, int right);
```

Sets each wheel's speed directly, -255 to 255, with no shaping. Applies the inversion/swap flags set above.

---

## Stop Functions

### `stop()`

```cpp
void stop();
```

**Coasting stop.** Cuts power to both motors (Enable/PWM pins to 0); the robot rolls to a halt. Use when a smooth, gradual stop is acceptable.

### `brake()`

```cpp
void brake();
```

**Active brake.** Drives both IN pins HIGH and sets Enable to 255, locking the motor shafts immediately. Use when precise stopping position matters.

---

## Differential Drive

### `drive()`

```cpp
void drive(int throttle, int steering);
void drive(int throttle, int steering, bool squareThrottle, bool squareSteering);
```

Drives a two-wheeled car like a joystick.

| Parameter | Range | Description |
|-----------|-------|--------------|
| `throttle` | -255 to 255 | Forward (+) / backward (-) |
| `steering` | -255 to 255 | Right (+) / left (-) |

Before mixing, `drive()` shapes the inputs to make the car easier to drive:

1. **Values under 10 count as 0**, so a thumb resting near center doesn't creep or turn.
2. **Steering is squared** (sign preserved) by default - small pushes give fine corrections, a full push still turns fully. Pass `squareThrottle`/`squareSteering` as `false` to drive an axis linearly instead.
3. **Turning uses a share of the motors' power** - see `setTurnSpeed()` below.

It then mixes the shaped values into wheel speeds: `left = throttle + steering`, `right = throttle - steering`. If either exceeds the ±255 range, both wheels are scaled down by the same factor, preserving the turn's shape. Zero throttle with nonzero steering spins the car in place.

```cpp
// Full speed forward
shield.drive(255, 0);

// Turn right at half speed
shield.drive(128, 64);

// Spin left in place
shield.drive(0, -150);
```

To set each wheel's speed exactly, with no shaping, use `setMotors()`.

### `setTurnSpeed()`

```cpp
void setTurnSpeed(int percent);
```

How much of the motors' power `drive()` uses for turning, 0-100 (60 when not set). A full sideways push at the default turns at 153 instead of 255. Lower for gentler steering, 100 for the full range.

---

## Shield Versions

| | v3 | v2 |
|---|---|---|
| Board | UNO R4 WiFi, or UNO R3 | UNO R3 with an HM-10 module |
| In the sketch | `SnappyXOShield shield(SnappyXOShield::V3);` | `SnappyXOShield shield(SnappyXOShield::V2);` |

--8<-- "snippets/v2-note.md"
