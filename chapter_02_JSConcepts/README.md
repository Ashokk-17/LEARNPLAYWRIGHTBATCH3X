# Chapter 02 - JS Concepts

This chapter introduces variable declaration and reassignment using the `var` keyword.

---

## Files Overview

| File | Topic |
|------|-------|
| [04_var_declaration&reassignment.js](04_var_declaration&reassignment.js) | `var` — declaring a variable and changing its value |

---

## Concepts Explained

### 1. Variable Declaration

Use `var` to create a variable and assign an initial value.

```js
var x = 10;
console.log(x);  // 10
```

---

### 2. Variable Reassignment

Change the value of an existing variable without using `var` again.

```js
var x = 10;
console.log(x);  // 10

x = 15;
console.log(x);  // 15
```

The variable `x` was **declared once** with `var` and then **reassigned** to a new value.

---

### Key Rules for `var`

| Action | Allowed? |
|--------|----------|
| Declare with initial value | Yes |
| Reassign to a new value | Yes |
| Redeclare with `var` again | Yes (no error, but avoid it) |

---

## Running a File

```bash
node chapter_02_JSConcepts/04_var_declaration&reassignment.js
```
