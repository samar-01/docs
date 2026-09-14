# API Reference — SnappyXO Shield

Include the library with:

```cpp
#include <SnappyXOShield.h>
```

The library is header-only — all functions are defined in `SnappyXOShield.h`.

For Shield v2.0.0+ only, define `SNAPPYXO_SHIELDV2` **before** the include:

```cpp
#define SNAPPYXO_SHIELDV2
#include <SnappyXOShield.h>
```

---

## Initialisation

### `initMotors()`

```cpp
void initMotors(bool invertL = false, bool invertR = false, bool invertLR = false);
```

Sets all motor pins as outputs and configures inversion flags. Call once in `setup()`.

| Parameter | Default | Description |
|-----------|---------|-------------|
| `invertL` | `false` | Reverse the left motor's direction |
| `invertR` | `false` | Reverse the right motor's direction |
| `invertLR` | `false` | Swap left and right motors entirely |

```cpp
initMotors();                    // no inversions
initMotors(true, false, false);  // left motor reversed
initMotors(false, false, true);  // left and right swapped
```

---

## Movement Commands

All movement functions call the internal `_motorWrite(leftSpeed, rightSpeed)` helper, which respects the inversion flags set by `initMotors()`.

### `forward()`

```cpp
void forward();
void forward(int speed);
```

Drives both motors forward. `speed` is 0–255 (full speed when omitted).

### `reverse()`

```cpp
void reverse();
void reverse(int speed);
```

Drives both motors in reverse. `speed` is 0–255.

### `turnLeft()`

```cpp
void turnLeft();
void turnLeft(int speed);
```

Pivots left in place — left motor backward, right motor forward. `speed` is 0–255.

### `turnRight()`

```cpp
void turnRight();
void turnRight(int speed);
```

Pivots right in place — left motor forward, right motor backward. `speed` is 0–255.

---

## Stop Functions

### `pause()`

```cpp
void pause();
```

**Coasting stop.** Sets both Enable (PWM) pins to 0, letting the motors spin down naturally. Use when a smooth, gradual stop is acceptable.

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
```

Joystick-style differential drive. Mixes throttle and steering into independent left/right motor speeds.

| Parameter | Range | Description |
|-----------|-------|-------------|
| `throttle` | −512 to +512 | Forward (+) / reverse (−) |
| `steering` | −512 to +512 | Right (+) / left (−) |

**Behaviour:**

- `left = throttle + steering`, `right = throttle - steering`
- If either value exceeds ±512, both are scaled down proportionally, preserving the speed ratio
- Zero throttle with non-zero steering produces in-place turns
- The dead-zone-free design means small joystick inputs still produce movement

```cpp
// Full speed forward
drive(512, 0);

// Turn right at half speed
drive(256, 128);

// Spin left in place
drive(0, -300);
```

---

## Internal Helper

### `_motorWrite()` *(internal)*

```cpp
void _motorWrite(int leftSpeed, int rightSpeed);
```

Low-level motor write. `leftSpeed` and `rightSpeed` are −255 to +255; positive = forward. Applies inversion flags and sets the H-bridge pins directly. Prefer the named movement functions over calling this directly.
