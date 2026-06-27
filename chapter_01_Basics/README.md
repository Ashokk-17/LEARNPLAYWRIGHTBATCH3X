# Chapter 01 - Basics

This chapter sets up the foundation — writing your first JavaScript code, using loops and functions, and verifying your Node.js environment.

---

## Files Overview

| File | Topic |
|------|-------|
| [01_basics.js](01_basics.js) | Hello World — `console.log()` and basic variable output |
| [02_hotcode.js](02_hotcode.js) | Loops and functions — `for` loop with function call |
| [03_verifysetup.js](03_verifysetup.js) | Node.js setup verification — OS, architecture, Node version |

---

## Concepts Explained

### 1. console.log()

The most basic way to print output in JavaScript.

```js
console.log("Jai ganeshaya namah");

let x = 10;
console.log(x);  // 10
```

---

### 2. Variables

Declare a variable using `let`, `var`, or `const` and assign a value to it.

```js
let x = 10;
console.log(x);  // 10
```

---

### 3. For Loop

Repeats a block of code a fixed number of times.

```js
for (let i = 0; i < 100; i++) {
    console.log(x + "hi");  // prints "10hi" 100 times
    print();
}
```

---

### 4. Functions

A reusable block of code. Define it once, call it anywhere.

```js
function print() {
    console.log("hello");
}

print();  // call the function
```

> Note: In `02_hotcode.js`, the function `print()` is called **before** it is defined in the file — this works because JavaScript hoists function declarations to the top automatically.

---

### 5. Node.js Environment Check

Use the built-in `process` object to read system information.

```js
console.log(process.platform);                   // win32 / linux / darwin
console.log(process.arch);                        // x64 / arm64
console.log("node version =", process.version);  // e.g. v20.11.0
```

Run `03_verifysetup.js` to confirm your Node.js is installed and working correctly.

---

## Running a File

```bash
node chapter_01_Basics/01_basics.js
node chapter_01_Basics/02_hotcode.js
node chapter_01_Basics/03_verifysetup.js
```

## Prerequisites

Verify Node.js is installed:

```bash
node -v
```

If you see a version number (e.g. `v20.11.0`), you are good to go. If not, download from [https://nodejs.org](https://nodejs.org).
