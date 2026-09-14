# Message Protocol - MicroBlue

MicroBlue uses a lightweight framed binary protocol to carry ID/value pairs over the BLE serial stream.

## Frame Format

```
[STX] [ID] [SEP] [VALUE] [ETX]
```

| Symbol | Byte value | Role |
|--------|-----------|------|
| `STX` | `0x01` | Start of transmission |
| `ID` | UTF-8 string | Command identifier |
| `SEP` | `0x02` | Separator between ID and value |
| `VALUE` | UTF-8 string | Command payload |
| `ETX` | `0x03` | End of transmission |

## Example

A message with ID `"LED"` and value `"1"` is transmitted as:

```
\x01 L E D \x02 1 \x03
```

In decimal bytes: `1 76 69 68 2 49 3`

## Notes

- Both `ID` and `VALUE` are variable-length UTF-8 strings - there is no length prefix.
- The delimiter bytes (`0x01`, `0x02`, `0x03`) must not appear in the ID or value payload.
- If no value is needed, `VALUE` can be an empty string - the `SEP` byte is still present.
- The `MicroBlueMessage::parse()` static method handles framing transparently; you do not need to implement parsing manually.
