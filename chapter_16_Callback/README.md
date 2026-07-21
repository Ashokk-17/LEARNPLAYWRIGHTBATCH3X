# Chapter 16 - Callbacks

This chapter covers callback functions — passing named, anonymous, and arrow functions as arguments, synchronous vs. asynchronous callbacks (`forEach` vs. `setTimeout`), callback parameters/return values, and "callback hell" (the pyramid of nested callbacks that motivates Promises in the next chapter).

## Files

| File | Topic |
|---|---|
| [143_callBack.js](143_callBack.js) | Callback basics — passing a named function, an anonymous function, and an arrow function as the callback |
| [144_CB1.js](144_CB1.js) | Minimal callback pattern with an inline arrow function |
| [145_CB_Fn.js](145_CB_Fn.js) | Passing a callback by reference vs. defining it inline (anonymous/arrow), using a "cafe order" analogy |
| [146_PW_CB.js](146_PW_CB.js) | Callback pattern stubbed out in the shape of a Playwright test |
| [147_JS_CB.js](147_JS_CB.js) | `setTimeout` shows an asynchronous callback — why the line *after* `setTimeout` logs before the callback itself |
| [148_Sync_CB.js](148_Sync_CB.js) | `.forEach()` as a synchronous callback — runs in order, one element at a time, before the next line executes |
| [149_ASync_CB.js](149_ASync_CB.js) | Another `setTimeout` async-ordering example (variant of 147) |
| [150_CB_Hell.js](150_CB_Hell.js) | 4-step nested callback chain simulating an E2E login flow |
| [151_CB_Hell_21_Lines.js](151_CB_Hell_21_Lines.js) | 24-step nested "Pyramid of Doom" simulating a full checkout journey — shows why deep callback nesting doesn't scale |
| [152_CB_Return.js](152_CB_Return.js) | Callbacks that take arguments and return values, plus a 4-step nested callback chain |
| [153_CB_Parameter.js](153_CB_Parameter.js) | Callbacks with parameters (`greetTester` example) |

## Run any file

```
node chapter_16_Callback/<file>.js
```
