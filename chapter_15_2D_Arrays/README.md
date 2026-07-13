# Chapter 15 - 2D Arrays

This chapter covers 2D arrays (arrays of arrays) — creating grids, indexing rows/columns, traversing with nested loops, `for...of`, and `forEach`, plus `.map()`/`.reduce()` row aggregation, filtering across rows, jagged arrays, and a star-pattern exercise.

## Files

| File | Topic |
|---|---|
| [138_2D_array.js](138_2D_array.js) | Creating a 2D array (array of rows), `grid[row][col]` indexing, printing all elements with a nested `for` loop |
| [139_2D_array.js](139_2D_array.js) | Row/column shape (1x4 vs 3x3 "grid"), indexing specific cells, `.length` for row count vs `row.length` for column count |
| [140_2dAraay_Real.js](140_2dAraay_Real.js) | Real-world 2D array (test results table), traversal with nested `for`, `for...of`, and `.forEach()` |
| [141_2D_array_FN.js](141_2D_array_FN.js) | `.map()` + `.reduce()` to sum each row, nested-loop filtering for failing test cases, jagged (uneven-length rows) 2D arrays |
| [142_Right_Pattern_Py.js](142_Right_Pattern_Py.js) | Nested loop to build a right-aligned star triangle pattern |

## Test data

[testdata.csv](testdata.csv) — sample username/password/expected-result rows used for the real-world 2D array example.

## Run any file

```
node chapter_15_2D_Arrays/<file>.js
```
