// Checking Arrays

// Check if something IS an array
let result = Array.isArray([1, 2, 3]);
console.log(result);
let result1 = Array.isArray("a"); // []
console.log(result1);

// every & some

console.log([80, 90, 85].every(s => s >= 70)); // true  - all 3 scores are >= 70
console.log([80, 60, 85].every(s => s >= 70)); // false - 60 fails the check

// Playwright API
console.log([200, 201, 203].every(statuscode => statuscode > 200)); // false - 200 is not > 200

// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70)); // true  - 60 qualifies
console.log([80, 90, 85].some(s => s < 70)); // false - none are under 70

//arrow : s => s >= 70