let matrix_2D = [
    [1, 2, 3, 4], // a 2D array with just one row (row 0) holding 4 columns
];

// R  - 1 -> matrix_2D has 1 row
// C - 4 -> matrix_2D has 4 columns
// 1x4 -> shorthand for "1 row by 4 columns" shape

// It is called these same rows and same column. - Grid -> equal rows/cols is what makes it a "grid"

let grid = [
    [10, 20, 30], // row 0
    [40, 50, 60], // row 1
    [70, 80, 90]  // row 2
];

console.log(grid[0][0]) // 10 - row 0, column 0
console.log(grid[0][2]) // 30 - row 0, column 2

console.log(grid.length);   // 3 — number of rows
console.log(grid[0].length);  // 3 — number of cols in row 0