# Chapter 06 - Operators

This chapter covers JavaScript operators — arithmetic, comparison, logical, ternary, type, nullish, and increment/decrement — including the classic `==` vs `===` gotchas and common interview questions.

---

## Files Overview

| File | Topic |
|------|-------|
| [30_operator.js](30_operator.js) | Intro — assignment operator and reassigning variables |
| [31_arithmatic_op.js](31_arithmatic_op.js) | Arithmetic operators: `+`, `-`, `*`, `/` |
| [32_Modulus_op.js](32_Modulus_op.js) | Modulus `%` — remainder, even/odd checks |
| [33_expo_op.js](33_expo_op.js) | Exponentiation operator `**` |
| [34_IQ_op.js](34_IQ_op.js) | Compound assignment operators: `+=`, `-=`, `*=`, `/=`, `%=` |
| [35_comparision.js](35_comparision.js) | Comparison operators: `>`, `<`, `>=`, `<=` |
| [36_Comparision_Strictloose.js](36_Comparision_Strictloose.js) | Loose (`==`) vs strict (`===`) equality with booleans and numbers |
| [37_comparision_loosestrict.js](37_comparision_loosestrict.js) | More `==` vs `===` edge cases — transitivity, `null`/`undefined` |
| [38_confusing_comparision.js](38_confusing_comparision.js) | Deep dive into confusing `==` comparisons — `NaN`, arrays, objects, `null` vs `0` |
| [39_logical_op.js](39_logical_op.js) | Logical operators: `&&`, `\|\|`, `!`, and short-circuiting |
| [40_string_concat.js](40_string_concat.js) | String concatenation with `+`, `+=`, and template literals |
| [41_ternary_op.js](41_ternary_op.js) | Ternary operator (`? :`) — including nested ternaries and real-world use cases |
| [42_type_op.js](42_type_op.js) | `typeof` operator across data types |
| [43_incre_decre.js](43_incre_decre.js) | Increment/decrement basics — pre vs post |
| [44_null_op.js](44_null_op.js) | Nullish coalescing `??` and optional chaining `?.` |
| [45_post_incre.js](45_post_incre.js) | Post-increment (`x++`) deep dive |
| [46_IQ_increment_d.js](46_IQ_increment_d.js) | Tricky increment/decrement interview questions |
| [47_advance_ID.js](47_advance_ID.js) | Advanced increment/decrement expressions (e.g. `++a + ++a`) |

---

## Concepts Explained

### 1. Arithmetic & Modulus

```js
let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b); // 13 7 30 3.333...
console.log(a % b);  // 1  -> remainder
console.log(a ** b); // 1000 -> exponentiation (a to the power of b)
```

Even/odd check using modulus:
```js
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd"); // Odd
```

---

### 2. Compound Assignment Operators

Shorthand for "do the operation, then reassign":

```js
let x = 20;
x += 5;  // x = x + 5  -> 25
x -= 3;  // x = x - 3  -> 22
x *= 2;  // x = x * 2  -> 44
x /= 4;  // x = x / 4  -> 11
x %= 3;  // x = x % 3  -> 2
```

---

### 3. Comparison Operators — `==` vs `===`

| | `==` (loose) | `===` (strict) |
|--|--------------|-----------------|
| Checks | Value only (converts types first) | Value **and** type |
| `5 == "5"` | `true` | `false` |
| `null == undefined` | `true` | `false` |

```js
console.log(true == 1);      // true  -> true coerced to 1
console.log(true === 1);     // false -> different types
console.log(0 == "");        // true  -> "" coerced to 0
console.log(0 == false);     // true  -> false coerced to 0
console.log(null == 0);      // false -> null only == undefined/null (special rule)
console.log(null >= 0);      // true  -> relational ops coerce null to 0 (gotcha!)
```

> Rule of thumb: always use `===`/`!==`. Only use `==` for `if (x == null)` checks (catches both `null` and `undefined`).

---

### 4. Logical Operators

```js
console.log(true && false);  // false -> AND needs both true
console.log(true || false);  // true  -> OR needs only one true
console.log(!true);          // false -> NOT flips the value
```

Short-circuiting — `&&`/`||` return a **value**, not just `true`/`false`:
```js
console.log(0 && "hello");     // 0        -> stops at first falsy
console.log("" || "default");  // "default" -> falls back since "" is falsy
```

---

### 5. Ternary Operator (`? :`)

A compact `if/else` in one line: `condition ? valueIfTrue : valueIfFalse`.

```js
let age = 18;
let result = age >= 18 ? "Can vote" : "Cannot vote";
console.log(result); // "Can vote"
```

Nested ternaries for multiple conditions (readable when chained consistently):
```js
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
    statusCode < 400 ? "Redirect" :
    statusCode < 500 ? "Client Error" : "Server Error";
console.log(category); // "Client Error"
```

---

### 6. `typeof` Operator

```js
console.log(typeof "hello");   // "string"
console.log(typeof 123);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  <- JS quirk
console.log(typeof []);        // "object"  <- arrays are objects
```

---

### 7. Increment / Decrement — Pre vs Post

```js
let a = 10;
console.log(++a); // 11 -> pre:  increase FIRST, then return
console.log(a++); // 11 -> post: return OLD value FIRST, then increase
console.log(a);   // 12
```

Interview trap — combining pre/post in one expression:
```js
let x = 10;
console.log(++x + ++x); // 11 + 12 = 23
console.log(x);         // 12
```

---

### 8. Nullish Coalescing `??` and Optional Chaining `?.`

`??` only falls back on `null`/`undefined` — unlike `||`, which falls back on **any** falsy value.

```js
console.log(0 ?? "fallback");   // 0        -> 0 is not null/undefined
console.log(0 || "fallback");   // "fallback" -> 0 is falsy, || replaces it (the bug ?? fixes)
console.log(null ?? "fallback"); // "fallback"
```

`?.` safely accesses nested properties without throwing if something is `null`/`undefined`:
```js
let user = null;
console.log(user?.profile?.name);        // undefined, no error
console.log(user?.profile?.name ?? "No Name"); // "No Name"
```

---

## Running a File

```bash
node chapter_06_Operators/38_confusing_comparision.js
node chapter_06_Operators/44_null_op.js
```
