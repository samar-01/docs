# MicroBlue

MicroBlue is an Arduino library that enables Bluetooth Low Energy (BLE) communication between the [MicroBlue mobile app](https://github.com/snappyxo/microblue-arduino) and Arduino boards. It provides a simple, unified API regardless of whether you are using an external HM-10 module or the built-in BLE radio on the Arduino UNO R4 WiFi.

## Supported Hardware

| Board | BLE Transport |
|-------|--------------|
| Arduino UNO R4 WiFi | Built-in BLE (requires ArduinoBLE library) |
| Arduino UNO R4 Minima | HM-10 module via Serial1 |
| Arduino UNO R3 | HM-10 module via SoftwareSerial |

## Key Features

- **Single class** - `MicroBlueManager` works with both HM-10 and built-in BLE transports
- **Message-based protocol** - compact framing using ID + value pairs
- **Simple API** - `begin()`, `read()`, `write()`, `isConnected()`
- **MIT licensed** - free for personal and commercial use

## Source

- **Version**: 2.0.0
- **GitHub**: [snappyxo/microblue-arduino](https://github.com/snappyxo/microblue-arduino)
- **License**: MIT (main library & examples) / GPL v3 (`Rename_HM10_Bluetooth` utility only)
