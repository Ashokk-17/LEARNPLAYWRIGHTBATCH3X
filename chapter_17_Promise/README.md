# Chapter 17 - Promises

This chapter covers Promises — creating one with `resolve`/`reject`, `.then()`/`.catch()`/`.finally()`, chaining `.then()` calls to flatten callback hell, and running multiple promises together with `Promise.all()` vs. `Promise.allSettled()`.

## Files

| File | Topic |
|---|---|
| [154_PRomise.js](154_PRomise.js) | Creating a `Promise` and resolving/rejecting it based on a condition |
| [155_Promise_real_Api.js](155_Promise_real_Api.js) | `.then()` runs only when the promise resolves — simulated API response object |
| [156_promise_real_api2.js](156_promise_real_api2.js) | `.catch()` runs only when the promise rejects; `.then()` is skipped entirely |
| [157_Finally.js](157_Finally.js) | `.then()` / `.catch()` / `.finally()` chain — `.finally()` always runs regardless of outcome |
| [158_call_py_problem.js](158_call_py_problem.js) | Turning a callback-hell login E2E flow into a flat `.then()` chain by returning a promise from each step |
| [159_Promise_all.js](159_Promise_all.js) | `Promise.allSettled()` vs. `Promise.all()` (commented) — getting every result back even when one promise rejects |
| [160_Promise_IQ_.js](160_Promise_IQ_.js) | Grab-bag of interview-style Promise exercises — chaining, throwing/catching mid-chain, `Promise.all`, `Promise.allSettled` |

## Run any file

```
node chapter_17_Promise/<file>.js
```
