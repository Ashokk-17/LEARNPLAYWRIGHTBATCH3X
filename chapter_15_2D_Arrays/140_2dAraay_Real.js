let testMatrix = [
    ["login", "pass", 200],   // row 0: test name, result, status code
    ["checkout", "fail", 404], // row 1
    ["search", "pass", 180]   // row 2
];

// How many test cases have we executed?
// How many test cases are passed?
// What is the status code that you have got for the fail?

// Classic nested for loop: outer walks each row, inner walks each column in that row
for (let i = 0; i < testMatrix.length; i++) { // i = 0,1,2 -> one pass per row
    for (let j = 0; j < testMatrix[i].length; j++) { // j walks that row's 3 columns
        console.log(testMatrix[i][j]); // testMatrix[i] gets the row array, [j] gets that cell
    }
    console.log(); // blank line to separate rows
}


// for...of over the rows: same traversal, without manual index math
for (let row of testMatrix) { // row is each inner array in turn
    for (let cell of row) { // cell is each value inside that row
        process.stdout.write(cell + " ") // write without a newline, unlike console.log
    }
    console.log(); // newline once the row's cells are done
}

// forEach
testMatrix.forEach(row => { // forEach calls this function once per row
    row.forEach(
        cell => process.stdout.write(cell + " ") // same per-cell write as above, via a callback
    );
    console.log();
});