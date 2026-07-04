# Chapter 05 - Literals

This chapter covers all JavaScript literal types — numbers, strings, null, undefined, and template literals — with real-world Playwright examples.

---

## Files Overview

| File | Topic |
|------|-------|
| [22_Literal.js](22_Literal.js) | Introduction to literals and the `typeof` operator |
| [23_null_undefined.js](23_null_undefined.js) | `null` vs `undefined` — differences and comparisons |
| [24_null.js](24_null.js) | Quick examples of `null`, `undefined`, `0`, and `""` |
| [25_literal_all.js](25_literal_all.js) | Overview of all literal types including hex, octal, exponential |
| [26_literal_number_all.js](26_literal_number_all.js) | Complete number reference — binary, octal, hex, BigInt, NaN, Infinity |
| [27_string.js](27_string.js) | String literals using single and double quotes |
| [28_template_literal.js](28_template_literal.js) | Template literals — string interpolation and dynamic values |
| [29_Backtick_single_double.js](29_Backtick_single_double.js) | Comparison of single quotes, double quotes, and backticks |

---

## Concepts Explained

### 1. What is a Literal?

A literal is a **fixed value written directly in code** — not a variable or calculation result.

```js
let age       = 25;      // numeric literal
let name      = "Pramod"; // string literal
let isActive  = true;    // boolean literal
let nothing   = null;    // null literal
let x;                   // undefined (not assigned)
```

---

### 2. `typeof` Operator

Returns the data type of a value as a string.

```js
console.log(typeof 25);        // "number"
console.log(typeof "Pramod");  // "string"
console.log(typeof true);      // "boolean"
console.log(typeof null);      // "object"  ← JS quirk
console.log(typeof undefined); // "undefined"
console.log(typeof 42n);       // "bigint"
```

> `typeof null` returns `"object"` — this is a known JavaScript bug that was never fixed for backwards compatibility.

---

### 3. `null` vs `undefined`

| | `undefined` | `null` |
|--|-------------|--------|
| Meaning | Not yet assigned — JavaScript sets this automatically | Intentionally empty — developer sets this on purpose |
| Set by | JavaScript engine | Developer |
| `typeof` | `"undefined"` | `"object"` |
| `== null` | `true` | `true` |
| `=== null` | `false` | `true` |

```js
let userName;             // undefined — not assigned
let profilePicture = null; // null — intentionally empty

console.log(userName == profilePicture);   // true  (loose)
console.log(userName === profilePicture);  // false (strict)
```

---

### 4. Number Literals

JavaScript supports multiple number formats:

```js
// Decimal (base 10)
let decimal = 42;

// Binary (base 2) — prefix 0b
let binary = 0b1010;      // 10 in decimal

// Octal (base 8) — prefix 0o
let octal = 0o52;         // 42 in decimal

// Hexadecimal (base 16) — prefix 0x
let hex = 0x2A;           // 42 in decimal
let color = 0xFF0000;     // red in hex

// Exponential notation
let million = 1e6;        // 1,000,000
let tiny    = 1.5e-3;     // 0.0015

// Numeric separator (ES2021) — improves readability
let bigNum = 1_000_000;   // 1000000
```

**Special Values:**

```js
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log(0 / 0);        // NaN
console.log("hi" * 2);     // NaN
console.log(typeof NaN);   // "number"  ← JS quirk
```

**BigInt — for very large integers:**

```js
let big = 123456789012345678901234567890n;
console.log(typeof big);   // "bigint"
console.log(big + 1n);     // BigInt arithmetic needs 'n' suffix
```

**Number Constants:**

```js
Number.MAX_SAFE_INTEGER   // 9007199254740991
Number.MIN_SAFE_INTEGER   // -9007199254740991
Number.MAX_VALUE          // ~1.79e308
Number.EPSILON            // smallest difference between floats
```

---

### 5. String Literals

Three ways to write strings in JavaScript:

```js
let single = 'Hello World';          // single quotes
let double = "Hello World";          // double quotes
let template = `Hello World`;        // backtick (template literal)
```

**Single vs Double quotes — identical behavior, use consistently:**

```js
let a = 'She said "hi"';   // single quotes can contain double quotes
let b = "It's a test";     // double quotes can contain single quotes
```

---

### 6. Template Literals (Backticks)

Template literals use backticks `` ` `` and allow embedding variables and expressions directly inside a string using `${}`.

**Variable interpolation:**
```js
let firstname = "Pramod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);  // Hi Pramod Dutta
```

**Expressions inside `${}`:**
```js
let sum = `10 + 20 = ${10 + 20}`;
console.log(sum);  // 10 + 20 = 30
```

**Multi-line strings:**
```js
let multiLine = `
  Line 1
  Line 2
  Line 3
`;
```

**Dynamic URLs — common in Playwright/API testing:**
```js
let env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);  // https://api-prod.tekion.com/users/12345
```

**Dynamic JSON payload:**
```js
const username = "pramod";
const role     = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
```

---

### 7. Single vs Double vs Backtick — Quick Comparison

| Feature | `' '` | `" "` | `` ` ` `` |
|---------|-------|-------|-----------|
| Simple text | Yes | Yes | Yes |
| Variable injection `${}` | No | No | Yes |
| Multi-line | No | No | Yes |
| Expression inside | No | No | Yes |
| Escape needed for `'` | Yes | No | No |
| Escape needed for `"` | No | Yes | No |

---

### 8. Template Literals in Playwright

```js
async function playwrightExamples(page) {
    const rowIndex    = 3;
    const columnName  = "email";

    // Dynamic locator
    await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

    // Dynamic screenshot path
    const testCase  = "checkout_flow";
    const timestamp = Date.now();
    await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });
}

// Test result logging
const testName = "Login Test";
const status   = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);
// [FAILED] Login Test completed in 2.3s
```

---

## Running a File

```bash
node chapter_05_Literals/22_Literal.js
node chapter_05_Literals/28_template_literal.js
```
