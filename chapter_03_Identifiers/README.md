# Chapter 03 - Identifiers

This chapter covers JavaScript naming rules — what makes a valid variable name, naming conventions, comments, and VSCode shortcuts.

---

## Files Overview

| File | Topic |
|------|-------|
| [05_Identifier_rules.js](05_Identifier_rules.js) | All 7 identifier rules with valid and invalid examples |
| [06_Identifiers_part2.js](06_Identifiers_part2.js) | Practical examples of different naming styles |
| [07_Comments.js](07_Comments.js) | Single-line and multi-line comment syntax |
| [08_Identifier_CompleteRules.js](08_Identifier_CompleteRules.js) | Executable file demonstrating all 7 rules with console output |
| [VSCode_Keyboardshortcut.md](VSCode_Keyboardshortcut.md) | VSCode keyboard shortcuts — Windows |
| [VSCode_keyboardshortcut_mac.md](VSCode_keyboardshortcut_mac.md) | VSCode keyboard shortcuts — Mac |

---

## Concepts Explained

### 1. What is an Identifier?

An identifier is the **name** you give to a variable, function, class, or constant.

```js
let userName = "Alice";   // 'userName' is the identifier
function login() {}       // 'login' is the identifier
const MAX_RETRY = 3;      // 'MAX_RETRY' is the identifier
```

---

### 2. The 7 Identifier Rules

**Rule 1 — Allowed characters: letters, digits, `_`, `$`**
```js
let userName  = "Alice";   // valid
let user_name = "Bob";     // valid
let $price    = 9.99;      // valid
let score2    = 100;       // valid

// let user-name = "";     // invalid — hyphen not allowed
// let user name = "";     // invalid — space not allowed
```

**Rule 2 — Must start with a letter, `_`, or `$` (not a digit)**
```js
let _private  = "hidden";  // valid
let $element  = "div";     // valid
let firstName = "John";    // valid

// let 1stPlace = "";      // invalid — cannot start with digit
```

**Rule 3 — Case-sensitive**
```js
let age = 25;   // different variable
let Age = 30;   // different variable
let AGE = 35;   // different variable
```

**Rule 4 — Cannot use reserved keywords**
```js
let returnValue = 5;       // valid
let className   = "Math";  // valid

// let return = 5;         // invalid — 'return' is a keyword
// let if = true;          // invalid — 'if' is a keyword
```

**Rule 5 — Use meaningful names (no enforced length limit)**
```js
let x = 10;                                          // too vague
let totalNumberOfStudentsEnrolledInTheCourse = 42;   // too long
let studentCount = 42;                               // just right
```

**Rule 6 — Stick to ASCII characters (avoid Unicode)**
```js
// let café = "coffee";   // avoid — portability issues
let cafeShop = "coffee";  // preferred
```

**Rule 7 — Follow naming conventions**

| Style | Used For | Example |
|-------|----------|---------|
| camelCase | variables, functions | `getUserName`, `totalPrice` |
| PascalCase | classes | `UserAccount`, `LoginPage` |
| UPPER_SNAKE_CASE | constants | `MAX_RETRY_COUNT`, `API_BASE_URL` |
| `_prefix` | private/internal | `_internalCounter` |
| `$prefix` | DOM / special use | `$root` |

---

### 3. Comments

Comments are ignored by JavaScript — use them to explain your code.

```js
// This is a single-line comment

/* This is a
   multi-line comment */
```

---

### 4. Practical Example

```js
let name       = "ashok";    // letters only
let _age       = 20;         // leading underscore
const $height  = 5.4;        // dollar sign prefix
var Networth   = "10crore";  // PascalCase with var

console.log(name, _age, $height, Networth);
// ashok 20 5.4 10crore
```

---

## VSCode Shortcuts Reference

### Windows — Key Shortcuts

| Action | Shortcut |
|--------|----------|
| Quick Open file | `Ctrl + P` |
| Command Palette | `Ctrl + Shift + P` |
| Toggle comment | `Ctrl + /` |
| Block comment | `Shift + Alt + A` |
| Move line up/down | `Alt + ↑ / ↓` |
| Multi-cursor | `Alt + Click` |
| Select next occurrence | `Ctrl + D` |
| Find | `Ctrl + F` |
| Replace | `Ctrl + H` |
| Format document | `Shift + Alt + F` |
| Toggle terminal | `Ctrl + \`` |
| Go to definition | `F12` |
| Rename symbol | `F2` |

### Mac — Key Shortcuts

| Action | Shortcut |
|--------|----------|
| Quick Open file | `⌘ + P` |
| Command Palette | `⌘ + ⇧ + P` |
| Toggle comment | `⌘ + /` |
| Block comment | `⇧ + ⌥ + A` |
| Move line up/down | `⌥ + ↑ / ↓` |
| Multi-cursor | `⌥ + Click` |
| Select next occurrence | `⌘ + D` |
| Find | `⌘ + F` |
| Replace | `⌘ + ⌥ + F` |
| Format document | `⇧ + ⌥ + F` |
| Toggle terminal | `⌘ + \`` |
| Go to definition | `F12` |
| Rename symbol | `F2` |

---

## Running a File

```bash
node chapter_03_Identifiers/05_Identifier_rules.js
node chapter_03_Identifiers/08_Identifier_CompleteRules.js
```
