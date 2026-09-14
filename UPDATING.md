# Updating the Docs

Follow this guide whenever a new version of either library is released. The steps are the same whether you are a human or an agent.

---

## 1. Find what changed

Check the GitHub release notes for the library that was updated:

- **MicroBlue**: https://github.com/snappyxo/microblue-arduino/releases
- **SnappyXO Shield**: https://github.com/snappyxo/SnappyXOShield/releases

Read the diff or changelog carefully before editing any docs. Only update what actually changed.

---

## 2. Update the version number (3 places)

Replace the old version string with the new one in all three locations:

### `docs/index.md`
The installation table has a Version column:
```
| MicroBlue | 2.0.0 | ...
| SnappyXO Shield | 0.2.0 | ...
```

### `docs/microblue/index.md` or `docs/snappyxoshield/index.md`
The Source section at the bottom of the relevant overview page:
```
- **Version**: 2.0.0
```

### `docs/javascripts/version-check.js`
The `DOCUMENTED` constant at the top of the file:
```js
const DOCUMENTED = {
  microblue: "2.0.0",
  snappyxoshield: "0.2.0",
};
```
Updating this clears the outdated-docs banner for users. **Do not update this until the rest of the docs are also updated**, otherwise users will see no warning when the docs are still stale.

---

## 3. Update the affected doc pages

Edit only the pages relevant to what changed. The files for each library are:

### MicroBlue (`docs/microblue/`)

| File | Update when... |
|------|---------------|
| `index.md` | Supported boards, key features, or license changes |
| `getting-started.md` | Installation steps, wiring, or minimal sketch changes |
| `api-reference.md` | Any class, method, constructor, or parameter changes |
| `protocol.md` | The message frame format changes |
| `examples.md` | Examples are added, removed, or their behaviour changes |

### SnappyXO Shield (`docs/snappyxoshield/`)

| File | Update when... |
|------|---------------|
| `index.md` | Supported shield versions, key features, or license changes |
| `getting-started.md` | Installation steps, pin mappings, or minimal sketch changes |
| `api-reference.md` | Any function signature, parameter, or behaviour changes |
| `examples.md` | Examples are added, removed, or their behaviour changes |

---

## 4. Ordering rules

These rules must be preserved when editing or adding content:

- **MicroBlue**: UNO R4 WiFi (built-in BLE) always appears first. UNO R4 Minima second. UNO R3 third.
- **SnappyXO Shield**: Shield v3.0.0+ always appears first. Shield v2.0.0+ below, under an "Other Hardware" heading.

---

## 5. Build and verify

```bash
mkdocs build
```

Check the build output for errors. Then run:

```bash
mkdocs serve
```

And manually visit the updated pages to confirm the content looks correct.

To verify the version banner works, temporarily set the documented version to an older value in `version-check.js`, clear the `release_check_*` keys from browser localStorage, and reload a library page. Revert the version when done.

---

## Checklist

- [ ] Read the release notes
- [ ] Updated version in `docs/index.md`
- [ ] Updated version in `docs/<library>/index.md`
- [ ] Updated all affected doc pages
- [ ] Updated version in `docs/javascripts/version-check.js` **last**
- [ ] `mkdocs build` passes with no errors
- [ ] Spot-checked the updated pages in the browser
