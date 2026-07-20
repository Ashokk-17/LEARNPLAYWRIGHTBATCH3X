let testResults = ["Pass", "Fail", "Pass", "Skip"]; // array of strings to iterate over

// forEach runs its callback once per array element - here it's called synchronously, in order, before moving to the next line
testResults.forEach(function (result, index) { // result = the current element, index = its position (0, 1, 2...)
    console.log("Test " + index + "=> " + result);
})

// This is a perfect example of a synchronous callback where
//  the anonymous function will take the item 1 by 1,
//  it will take the index 1 by 1, it will take
//  the result 1 by 1, and print the value 1 by 1. 