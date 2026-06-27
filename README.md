# Learn Playwright - Batch 3X

A structured JavaScript learning course covering core concepts required for Playwright test automation.

---

## Chapter 01 - Basics

> Getting started with JavaScript fundamentals and Node.js setup.

| File | Topic |
|------|-------|
| [01_basics.js](chapter_01_Basics/01_basics.js) | Hello World — `console.log()` and basic variable output |
| [02_hotcode.js](chapter_01_Basics/02_hotcode.js) | Hot code reload — variable usage in loops |
| [03_verifysetup.js](chapter_01_Basics/03_verifysetup.js) | Node.js setup verification — OS platform, architecture, Node version |

---

## Chapter 02 - JS Concepts

> Variable declaration and reassignment using `var`.

| File | Topic |
|------|-------|
| [04_var_declaration&reassignment.js](chapter_02_JSConcepts/04_var_declaration&reassignment.js) | `var` declaration, reassignment, and array operations |

---

## Chapter 03 - Identifiers

> JavaScript naming rules, conventions, and comments.

| File | Topic |
|------|-------|
| [05_Identifier_rules.js](chapter_03_Identifiers/05_Identifier_rules.js) | Identifier rules — letters, digits, underscores, dollar signs |
| [06_Identifiers_part2.js](chapter_03_Identifiers/06_Identifiers_part2.js) | Identifier examples using `let`, `const`, and `var` |
| [07_Comments.js](chapter_03_Identifiers/07_Comments.js) | Single-line and multi-line comment syntax |
| [08_Identifier_CompleteRules.js](chapter_03_Identifiers/08_Identifier_CompleteRules.js) | Complete identifier naming rules with practical examples |
| [VSCode_Keyboardshortcut.md](chapter_03_Identifiers/VSCode_Keyboardshortcut.md) | VSCode keyboard shortcuts — Windows |
| [VSCode_keyboardshortcut_mac.md](chapter_03_Identifiers/VSCode_keyboardshortcut_mac.md) | VSCode keyboard shortcuts — Mac |

---

## Chapter 04 - Big Concepts

> Deep dive into `var`, `let`, `const`, scope, and hoisting.

| File | Topic |
|------|-------|
| [09_var.js](chapter_04_BigConcepts/09_var.js) | `var` — redeclaration and reassignment behavior |
| [10_functions.js](chapter_04_BigConcepts/10_functions.js) | Function definition and calling |
| [11_var_explained.js](chapter_04_BigConcepts/11_var_explained.js) | `var` scope — global, local, and function scope with `if` blocks |
| [12_let_explained.js](chapter_04_BigConcepts/12_let_explained.js) | `let` — block scope, reassignment, no redeclaration |
| [13_const_explained.js](chapter_04_BigConcepts/13_const_explained.js) | `const` — constant declaration and block scope |
| [14_var_functionscope.js](chapter_04_BigConcepts/14_var_functionscope.js) | `var` in function scope vs global scope |
| [15_let_functionscope.js](chapter_04_BigConcepts/15_let_functionscope.js) | `let` in function scope — variable shadowing across nested scopes |
| [16_hoisting.js](chapter_04_BigConcepts/16_hoisting.js) | Hoisting — how `var` is hoisted with `undefined` |
| [17_hoisting_function.js](chapter_04_BigConcepts/17_hoisting_function.js) | Function hoisting — hoisting behavior inside function scope |
| [18_let_hoisting.js](chapter_04_BigConcepts/18_let_hoisting.js) | `let` hoisting — Temporal Dead Zone (TDZ) and `ReferenceError` |
| [19_let_hoisting_block.js](chapter_04_BigConcepts/19_let_hoisting_block.js) | `let` TDZ in blocks — block-scoped hoisting preventing outer scope access |
| [20_let_const.js](chapter_04_BigConcepts/20_let_const.js) | `const` hoisting — `ReferenceError` before initialization |
| [21_Jr_qa.js](chapter_04_BigConcepts/21_Jr_qa.js) | QA exercise — `const` hoisting with API endpoint constant |

---

## Key Concepts Covered

| Concept | Description |
|---------|-------------|
| `var` | Function-scoped, hoisted with `undefined`, allows redeclaration |
| `let` | Block-scoped, hoisted but in TDZ, no redeclaration |
| `const` | Block-scoped, must be initialized, value cannot be reassigned |
| Scope | Global → Function → Block scope hierarchy |
| Hoisting | Variables/functions moved to top of scope at compile time |
| TDZ | Temporal Dead Zone — `let`/`const` cannot be accessed before declaration |

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [VS Code](https://code.visualstudio.com/) recommended

## Running a File

```bash
node chapter_01_Basics/01_basics.js
```
