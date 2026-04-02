# Symbol Images

Place your symbol image files in this folder. Each file must be named using the `sign` field from `data/symbols.js`.

**Default format:** PNG — `<sign>.png`  
**SVG also supported:** add `"ext": "svg"` to the symbol entry in `data/symbols.js`

> If an image file is missing the quiz still works — it shows a placeholder with the filename instead.

---

## Current image files

| Filename               | Symbol name      |
|------------------------|------------------|
| `bracket.png`          | Bracket          |
| `crescendo.png`        | Crescendo        |
| `decresendo.png`       | Decrescendo      |
| `flat.png`             | Flat (♭)         |
| `forte.png`            | Forte            |
| `fortissimo.png`       | Fortissimo       |
| `glissando.png`        | Glissando        |
| `left_hand.png`        | Left Hand        |
| `mezzo_forte.png`      | Mezzo Forte      |
| `mezzo_piano.png`      | Mezzo Piano      |
| `muffle.png`           | Muffle           |
| `natural.png`          | Natural (♮)      |
| `octave.png`           | Octave (8va/8vb) |
| `pianissimo.png`       | Pianissimo       |
| `piano.png`            | Piano            |
| `right_hand.png`       | Right Hand       |
| `ritardando.png`       | Ritardando       |
| `sharp.png`            | Sharp (♯)        |
| `simile.png`           | Simile           |

---

## Adding a new symbol

1. Drop the image file here (e.g. `my_symbol.png`)
2. Open `data/symbols.js` and add a new entry:

```js
{
  name:    "My Symbol",
  meaning: "What this symbol instructs the performer to do.",
  sign:    "my_symbol"          // filename without extension
}
```

3. Reload `harp.html` — the new symbol is included in the quiz automatically.
