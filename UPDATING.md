# Updating the Docs

Follow this guide whenever a new version of either library is released, or when hardware docs need updating. The steps are the same whether you are a human or an agent.

---

## Folder Structure

```
docs/
  index.md                        - Home page
  software/
    microblue/                    - MicroBlue library docs
    snappyxoshield/               - SnappyXOShield library docs
  hardware/
    motor-shield/                 - SnappyXO Motor Shield hardware doc
  javascripts/
    version-check.js              - Version banner script
```

---

## 1. Find what changed

Check the GitHub release notes for the library that was updated:

- **MicroBlue**: https://github.com/snappyxo/microblue-arduino/releases
- **SnappyXOShield**: https://github.com/snappyxo/SnappyXOShield/releases

Read the diff or changelog carefully before editing any docs. Only update what actually changed.

---

## 2. Update the version number (3 places)

Replace the old version string with the new one in all three locations:

### `docs/index.md`
The installation table has a Version column:
```
| MicroBlue | 2.0.0 | ...
| SnappyXOShield | 0.2.0 | ...
```

### `docs/software/microblue/index.md` or `docs/software/snappyxoshield/index.md`
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

### MicroBlue (`docs/software/microblue/`)

| File | Update when... |
|------|---------------|
| `index.md` | Supported boards, key features, or license changes |
| `getting-started.md` | Installation steps, wiring, or minimal sketch changes |
| `api-reference.md` | Any class, method, constructor, or parameter changes |
| `protocol.md` | The message frame format changes |
| `examples.md` | Examples are added, removed, or their behaviour changes |

### SnappyXOShield (`docs/software/snappyxoshield/`)

| File | Update when... |
|------|---------------|
| `index.md` | Supported shield versions, key features, or license changes |
| `getting-started.md` | Installation steps, pin mappings, or minimal sketch changes |
| `api-reference.md` | Any function signature, parameter, or behaviour changes |
| `examples.md` | Examples are added, removed, or their behaviour changes |

### SnappyXO Motor Shield (`docs/hardware/motor-shield/`)

| File | Update when... |
|------|---------------|
| `index.md` | Pin mappings, electrical specs, compatible boards, or shield versions change |

---

## 4. Ordering rules

These rules must be preserved when editing or adding content:

- **MicroBlue**: UNO R4 WiFi (built-in BLE) always appears first. UNO R4 Minima second. UNO R3 third.
- **SnappyXOShield**: Shield v3.0.0+ always appears first. Shield v2.0.0+ below, under an "Other Hardware" heading.

---

## 5. Version banner

The site automatically fetches the latest GitHub release for each library and shows a banner if it is newer than what is documented. The banner has two levels:

- **Patch change only** (e.g. 2.0.0 - 2.0.1): blue note — docs likely still accurate.
- **Minor or major change** (e.g. 2.0.0 - 2.1.0): yellow warning — docs may be outdated.

To test the banner locally without making a real release, add `?mock_release=x.x.x` to any library page URL:

```
http://localhost:8000/software/microblue/getting-started/?mock_release=3.0.0
```

The GitHub API response is cached in browser `localStorage` for 1 hour under the keys `release_check_microblue-arduino` and `release_check_SnappyXOShield`. Clear these to force a fresh fetch.

---

## 6. Build and verify

```bash
mkdocs build
```

Check the build output for errors. Then run:

```bash
mkdocs serve
```

And manually visit the updated pages to confirm the content looks correct.

---

## Checklist

- [ ] Read the release notes
- [ ] Updated version in `docs/index.md`
- [ ] Updated version in `docs/software/<library>/index.md`
- [ ] Updated all affected doc pages
- [ ] Updated version in `docs/javascripts/version-check.js` **last**
- [ ] `mkdocs build` passes with no errors
- [ ] Spot-checked the updated pages in the browser
