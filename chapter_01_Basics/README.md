# Chapter 01 - Basics

This chapter covers the very basics of JavaScript and how to verify your Node.js setup before diving into Playwright.

---

## What You Will Learn

- How to declare variables and print output in JavaScript
- How to write and call functions
- How to use loops
- How to check your Node.js environment is ready

---

## Files in This Chapter

| File | What it does |
|------|-------------|
| `01_basics.js` | Your first JavaScript program — variables and console output |
| `02_hotcode.js` | Functions and for loops in JavaScript |
| `03_verifysetup.js` | Checks your OS, CPU architecture, and Node.js version |

---

## How to Run Each File

Open your terminal, navigate to this folder, and run:

```bash
cd chapter_01_Basics
```

**Run 01_basics.js**
```bash
node 01_basics.js
```
Output:
```
Jai ganeshaya namah
10
```

---

**Run 02_hotcode.js**

> Before running, fix the bug on line 11 — add the `function` keyword:
> ```js
> // Change this:
> print() { ... }
>
> // To this:
> function print() { ... }
> ```

```bash
node 02_hotcode.js
```

---

**Run 03_verifysetup.js**
```bash
node 03_verifysetup.js
```
Output will look something like:
```
win32
x64
node version =  v20.11.0
```
This confirms Node.js is installed and working correctly on your machine.

---

## Before You Start — Prerequisites

Make sure Node.js is installed on your machine.

**Check if Node.js is installed:**
```bash
node -v
```
If you see a version number (e.g. `v20.11.0`), you are good to go.

If not, download and install Node.js from: https://nodejs.org

---

## Quick Tip

If you are new to JavaScript, start with `01_basics.js` and work your way through the files in order. Each file builds on the previous one.
