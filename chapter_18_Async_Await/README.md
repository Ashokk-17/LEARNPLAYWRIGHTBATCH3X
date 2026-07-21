# Chapter 18 - Async/Await

This chapter covers `async`/`await` — pausing a function to unwrap a promise's result, catching rejections with `try`/`catch`/`finally`, running steps sequentially vs. in parallel (`Promise.allSettled`), and applying async/await to Playwright-style E2E test flows.

## Files

| File | Topic |
|---|---|
| [161_async1.js](161_async1.js) | `try`/`catch`/`finally` around an `await`ed rejected promise — without `await`, the rejection would never reach `catch` |
| [162_async2.js](162_async2.js) | Calling an undefined function inside an `async` function — `ReferenceError` from a function-name typo |
| [163_pyOdm.js](163_pyOdm.js) | Full E2E login flow using sequential `await` calls in a Page-Object-Model style |
| [164_async_ex.js](164_async_ex.js) | Basic async/await (`getTestResult().then()`) plus a Playwright `test()` stub — the Playwright part needs `npx playwright test`, not plain `node` |
| [165_AA_parallel.js](165_AA_parallel.js) | `Promise.allSettled()` to run independent async calls **in parallel** (~2s total for 3 calls) |
| [166_AA_sequential.js](166_AA_sequential.js) | Sequential `await` calls where each step depends on the previous one (~6s total for 3 calls), timed with `Date.now()` |
| [167_IQ.js](167_IQ.js) | Interview-style async/await exercise — a sequential `await` E2E test flow |
| [168_AC_login.js](168_AC_login.js) | Playwright login test draft using `test.step()` (work in progress — references undefined `log`/`loginPage` helpers) |

## Run any file

```
node chapter_18_Async_Await/<file>.js
```

Note: [164_async_ex.js](164_async_ex.js) and [168_AC_login.js](168_AC_login.js) contain Playwright `test()` blocks and require the Playwright test runner rather than plain `node`.
