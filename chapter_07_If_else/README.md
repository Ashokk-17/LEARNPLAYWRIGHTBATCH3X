# Chapter 07 - If / Else

This chapter covers conditional logic in JavaScript — `if`, `if/else`, `if/else if/else`, and real-world/interview-style decision-making examples.

> Note: the files below are placeholders being filled in as this chapter is worked through. Run any file once it has content.

---

## Files Overview

| File | Planned Topic |
|------|------|
| [48_if_else.js](48_if_else.js) | Basic `if` / `else` statement |
| [49_if_elseif_else.js](49_if_elseif_else.js) | `if` / `else if` / `else` chains for multiple conditions |
| [50_real_if_else.js](50_real_if_else.js) | Real-world `if/else` example |
| [51_api_if_else.js](51_api_if_else.js) | `if/else` for handling API/HTTP status codes |
| [52_IQ_if_else.js](52_IQ_if_else.js) | Interview-style `if/else` questions |
| [53_if_else_real.js](53_if_else_real.js) | Another real-world conditional scenario |
| [54_IQ.js](54_IQ.js) | Interview questions using conditionals |
| [55_IE.js](55_IE.js) | `if/else` practice |
| [56_IQ_even_odd.js](56_IQ_even_odd.js) | Even/odd check using `if/else` and modulus |
| [57_grade_calculator.js](57_grade_calculator.js) | Grade calculator using `if/else if` chains |
| [58_leap_year.js](58_leap_year.js) | Leap year check using conditional logic |

---

## Concepts Explained

### 1. Basic `if` / `else`

```js
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### 2. `if` / `else if` / `else` chains

Used when there are more than two possible outcomes:

```js
let marks = 72;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

---

### 3. Even / Odd Check

```js
let n = 7;
if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

---

### 4. Leap Year Check

A year is a leap year if it's divisible by 4, but not by 100 — unless it's also divisible by 400.

```js
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
```

---

### 5. Real-World Example: API Status Codes

```js
let statusCode = 404;
if (statusCode >= 200 && statusCode < 300) {
  console.log("Success");
} else if (statusCode >= 400 && statusCode < 500) {
  console.log("Client Error");
} else if (statusCode >= 500) {
  console.log("Server Error");
} else {
  console.log("Unknown status");
}
```

---

## Running a File

```bash
node chapter_07_If_else/58_leap_year.js
node chapter_07_If_else/57_grade_calculator.js
```
