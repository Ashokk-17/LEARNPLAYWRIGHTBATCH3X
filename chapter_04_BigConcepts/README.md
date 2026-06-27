# Chapter 04 - Big Concepts

This chapter covers the most important JavaScript concepts you need to understand before writing Playwright tests — `var`, `let`, `const`, scope, and hoisting.

---

## Files Overview

| File | Topic |
|------|-------|
| [09_var.js](09_var.js) | `var` redeclaration and loop variable leakage |
| [10_functions.js](10_functions.js) | Function definition and invocation |
| [11_var_explained.js](11_var_explained.js) | `var` hoisting and function scope with `if` blocks |
| [12_let_explained.js](12_let_explained.js) | `let` block scope and no redeclaration |
| [13_const_explained.js](13_const_explained.js) | `const` immutability and block scope |
| [14_var_functionscope.js](14_var_functionscope.js) | `var` ignoring block boundaries inside functions |
| [15_let_functionscope.js](15_let_functionscope.js) | `let` respecting all block boundaries (variable shadowing) |
| [16_hoisting.js](16_hoisting.js) | `var` hoisting — declaration moved up, value stays |
| [17_hoisting_function.js](17_hoisting_function.js) | `var` hoisting inside function scope |
| [18_let_hoisting.js](18_let_hoisting.js) | `let` hoisting and Temporal Dead Zone (TDZ) |
| [19_let_hoisting_block.js](19_let_hoisting_block.js) | Block-scoped TDZ — why inner `let` hides outer variable |
| [20_let_const.js](20_let_const.js) | `const` hoisting with TDZ |
| [21_Jr_qa.js](21_Jr_qa.js) | QA exercise — `const` TDZ with API endpoint constant |

---

## Concepts Explained

### 1. `var` — Function Scoped

- Can be **redeclared** and **reassigned**
- Ignores `if`, `for`, `while` block boundaries
- Leaks out of blocks into the nearest function (or global)

```js
var fruit = 'apple';
var fruit = 'mango';  // redeclaration allowed — no error

for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 — i leaked outside the loop
```

---

### 2. `let` — Block Scoped

- Cannot be **redeclared** in the same scope
- Can be **reassigned**
- Stays strictly inside `{}` where it was declared

```js
let teststatus = "pending";
if (teststatus === "pending") {
    let executiontime = 1200;
    console.log(executiontime);  // 1200
}
console.log(executiontime);  // ReferenceError — not accessible here
```

---

### 3. `const` — Block Scoped + Immutable

- Cannot be **redeclared** or **reassigned**
- Must be **initialized** at the time of declaration
- Commonly used for URLs, API endpoints, config values

```js
const Base_URL = 'www.google.com';
Base_URL = 'www.bing.com';  // TypeError — cannot reassign const
```

---

### 4. Scope

Scope determines **where a variable is accessible**.

```
Global Scope
  └── Function Scope
        └── Block Scope  (only let and const)
```

| Keyword | Global | Function | Block |
|---------|--------|----------|-------|
| `var`   | Yes    | Yes      | No (leaks out) |
| `let`   | Yes    | Yes      | Yes |
| `const` | Yes    | Yes      | Yes |

---

### 5. Hoisting

JavaScript moves variable and function **declarations** to the top of their scope before running the code.

**`var` hoisting — initialized as `undefined`:**
```js
console.log(greeting);  // undefined (not an error)
var greeting = "Hello";
```

**`let` / `const` hoisting — Temporal Dead Zone (TDZ):**
```js
console.log(score);  // ReferenceError: Cannot access 'score' before initialization
let score = 100;
```

---

### 6. Temporal Dead Zone (TDZ)

The TDZ is the period between when a `let` or `const` variable is **hoisted** and when it is **initialized**. Accessing it in this zone throws a `ReferenceError`.

```js
// TDZ starts here for 'score'
console.log(score);  // ReferenceError
let score = 100;     // TDZ ends here
console.log(score);  // 100
```

---

## Quick Comparison

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | `undefined` | TDZ Error | TDZ Error |
| Must initialize | No | No | Yes |

---

## Running a File

```bash
node chapter_04_BigConcepts/09_var.js
```
