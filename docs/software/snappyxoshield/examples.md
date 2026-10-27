# Examples

All examples ship with the library and are accessible via **File → Examples → SnappyXOShield** in the Arduino IDE.

---

## BasicMotorControl

A timed sequence exercising every movement call. Good for verifying that wiring and motor direction are correct.

```cpp
#include <SnappyXOShield.h>

SnappyXOShield shield(SnappyXOShield::V3);  // the shield version printed on the board: V3 or V2

void setup() {
  shield.begin();  // sets up the motor pins

  // If a wheel turns the wrong way, uncomment the line that fixes it:
  // shield.invertLeft();   // the left motor turns backward when it should go forward
  // shield.invertRight();  // the right motor turns backward when it should go forward
  // shield.swapMotors();   // the left and right motors are plugged in the other way round
}

void loop() {
  shield.forward();  // both wheels forward at full speed (255)
  delay(1000);

  shield.reverse(150);  // both wheels backward at speed 150 (0-255)
  delay(1000);

  shield.spinLeft();  // left wheel backward, right wheel forward: spins left in place
  delay(500);

  shield.spinRight();  // left wheel forward, right wheel backward: spins right in place
  delay(500);

  shield.setMotors(255, 100);  // each wheel's speed, -255 to 255: left faster, so it curves right
  delay(1000);

  shield.drive(200, -100);  // joystick-style: throttle 200 (forward), steering -100 (left)
  delay(1000);

  shield.stop();  // cuts the power, the robot coasts to a stop
  delay(1000);
}
```

---

## MicroBlueDrive

Drives from the MicroBlue app's Drive screen, using the UNO R4 WiFi's built-in Bluetooth. The robot stops if the phone disconnects or the app's heartbeat stops.

**Requires**: MicroBlue library 2.1 or later (install separately from Library Manager).

```cpp
#include <MicroBlue.h>
#include <SnappyXOShield.h>

MicroBlueManager manager;  // talks to the MicroBlue app over the built-in Bluetooth
SnappyXOShield shield(SnappyXOShield::V3);  // v3 shield

void setup() {
  shield.begin();  // sets up the motor pins
  // If a wheel turns backward when it should go forward, uncomment its line:
  // shield.invertLeft();   // left wheel
  // shield.invertRight();  // right wheel

  manager.begin("SnappyXO Robot");  // the name the app shows when you connect: change it to tell robots apart
}

void loop() {
  if (manager.isConnected()) {
    MicroBlueMessage msg = manager.read();  // the latest message from the app, if any

    // The D-Pad, Joystick and Tilt send "x,y" on IDs d0 and d1, each 0-1023:
    // 1023 is right or forward, 0 is left or back, and 512,512 is the center (stop)
    if (msg.id == "d0" || msg.id == "d1") {
      int x, y;
      if (sscanf(msg.value.c_str(), "%d,%d", &x, &y) == 2) {
        int throttle = map(y, 0, 1023, -255, 255);  // forward and back
        int steering = map(x, 0, 1023, -255, 255);  // left and right
        shield.drive(throttle, steering);
      }
    }
  }

  // Checked outside isConnected(), so the robot also stops after a disconnect
  if (!manager.isConnected() || manager.heartbeatLost()) {
    shield.stop();
  }
}
```

See the [MicroBlue examples](../microblue/examples.md) for more BLE communication patterns.
