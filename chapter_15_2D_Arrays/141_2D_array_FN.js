let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

// .map runs on each row and returns a new array of the row's total;
// .reduce inside walks that row's numbers, adding each (b) onto the running total (a), starting from 0
let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums); // [253, 175, 275] - one summed total per student/row

let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

// I want all the test cases which have failed.
for (let i = 0; i < suiteResults.length; i++) { // i walks each suite (row)
    for (let j = 0; j < suiteResults[i].length; j++) { // j walks each test case (column) in that suite
        if (suiteResults[i][j].includes("fail")) { // .includes checks if "fail" appears anywhere in the string
            console.log(suiteResults[i][j]); // print only the failing test cases
        }

    }

}

// a "jagged" 2D array: rows don't all have the same length (3, then 2, then 1 element)
let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
]