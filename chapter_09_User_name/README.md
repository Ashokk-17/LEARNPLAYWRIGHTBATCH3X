# Chapter 09 - User Input

This chapter covers reading user input from the terminal in Node.js — using the built-in `readline` module and the `prompt-sync` package. It also covers why the browser-only `prompt()` function doesn't work in Node.

---

## Files Overview

| File | Topic |
|------|------|
| [68_UserInput.js](68_UserInput.js) | Reading input with the built-in `readline` module (async), with explanatory comments on why `prompt()` doesn't exist in Node |
| [69_Node_ReadLine.js](69_Node_ReadLine.js) | Another `readline` example — asks for a number and reports Even/Odd |
| [70_Prompt_sync.js](70_Prompt_sync.js) | Reading input synchronously with the `prompt-sync` npm package |

---

## Concepts Explained

### 1. Why `prompt()` doesn't work in Node

`prompt()` is a browser-only function exposed by `window`. Node.js has no browser globals, so calling it throws `ReferenceError: prompt is not defined`. Node input has to go through a stream-based API instead.

---

### 2. Reading input with `readline` (built-in, async)

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (answer) => {
  let num = Number(answer);
  console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
  rl.close(); // lets the process exit; otherwise it keeps listening on stdin
});
```

`rl.question()` is asynchronous — everything that depends on the answer must live inside its callback.

---

### 3. Reading input with `prompt-sync` (npm package, synchronous)

```js
const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
console.log(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
```

`prompt-sync` blocks and returns the typed value directly, avoiding a callback — but it requires installation (`npm install prompt-sync`) and a real interactive terminal. It does not work with piped/non-TTY input (e.g. `echo 7 | node file.js`), which can cause a runaway redraw loop — always run these files in an interactive terminal.

---

## Running a File

Run interactively in a terminal (VS Code integrated terminal, or Code Runner with `code-runner.runInTerminal: true`) and type your answer when prompted:

```bash
node chapter_09_User_name/69_Node_ReadLine.js
node chapter_09_User_name/70_Prompt_sync.js
```
