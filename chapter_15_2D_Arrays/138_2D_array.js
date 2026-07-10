let a = [1, 2, 3, 3]; // plain 1D array, just for comparison - not used below

// 2D array (array of arrays): each inner array is one "row" of the grid
let rakesh_grid = [
    [1, 2, 3], // row 0
    [4, 5, 6], // row 1
    [7, 8, 9]  // row 2
]

// 1 -> 0,0
// value 1 lives at rakesh_grid[0][0] -> [row index, column index]

// Print all the elements
for (let i = 0; i < 3; i++) { //  i = 0,1,2 -> outer loop walks each row
    for (let j = 0; j < 3; j++) { // j = 0,1,2 -> inner loop walks each column within that row
        console.log(rakesh_grid[i][j]); // rakesh_grid[i] gets the row array, [j] gets that row's element
    }
    console.log("\n"); // blank line after each row finishes printing
}

// Debug the values