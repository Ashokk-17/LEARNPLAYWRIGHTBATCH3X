# Chapter 08 - Switch Statement

This chapter covers the `switch` statement in JavaScript — basic syntax, fall-through behavior, `default`, grouped cases, and interview-style gotchas around strict comparison and duplicate cases.

---

## Files Overview

| File | Topic |
|------|------|
| [59_switch.js](59_switch.js) | Basic `switch` with `break` on every case, mapping a day number to a name |
| [60_no_break.js](60_no_break.js) | `switch` without `break` — demonstrates fall-through into subsequent cases |
| [61_default.js](61_default.js) | `switch` with `break` and a `default` case for unmatched values |
| [62_real_example.js](62_real_example.js) | Real-world example: branching on an API response status code |
| [63_switch_group.js](63_switch_group.js) | Grouped cases — multiple `case` labels sharing one block (e.g. Chromium-based browsers) |
| [64_IQ1.js](64_IQ1.js) | Interview question: fall-through when `break` is omitted |
| [65_IQ2.js](65_IQ2.js) | Interview question: `switch (true)` with relational conditions for range checks |
| [66_IQ3.js](66_IQ3.js) | Interview question: duplicate `case` values — first match wins |
| [67_IQ4.js](67_IQ4.js) | Interview question: strict (`===`) comparison in `switch` — type mismatches like `0` vs `false` |

---

## Concepts Explained

### 1. Basic `switch` / `break`

```js
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid day");
}
```

`break` stops execution from falling into the next case once a match is found.

---

### 2. Fall-Through (missing `break`)

```js
switch (2) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
  case 3:
    console.log("Wednesday");
}
// Logs "Tuesday" and "Wednesday" — execution keeps running until a break or the end
```

---

### 3. Grouped Cases

Multiple `case` labels can share one block by stacking them without a `break` in between:

```js
switch (browser) {
  case "Chrome":
  case "Edge":
  case "Brave":
    console.log("Chromium Project!");
    break;
  case "Firefox":
    console.log("Mozilla Project!");
    break;
}
```

---

### 4. `switch (true)` for Range Checks

```js
let score = 85;
switch (true) {
  case (score >= 90):
    console.log("A");
    break;
  case (score >= 75):
    console.log("B");
    break;
  default:
    console.log("C or below");
}
```

---

### 5. Duplicate Cases

If two `case` labels have the same value, only the first one is ever reached — the second is dead code.

---

### 6. Strict Comparison Gotcha

`switch` uses strict equality (`===`) internally, so `0` and `false`, or `5` and `"5"`, are never considered equal matches.

```js
switch (0) {
  case false:
    console.log("Not reached — 0 !== false");
    break;
  case 0:
    console.log("0 matched");
    break;
}
```

---

## Running a File

```bash
node chapter_08_Switch_Statement/62_real_example.js
node chapter_08_Switch_Statement/67_IQ4.js
```
