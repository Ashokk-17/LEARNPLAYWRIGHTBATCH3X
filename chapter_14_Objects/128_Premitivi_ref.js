// Primitive vs Reference Types

// Primitives (number, string, boolean, etc.) are copied by VALUE
let a = 10;
let b = a; // b gets its own independent copy of 10
b = 99;
console.log(b); // 99 - only b changed
console.log(a); // 10 - a is untouched



// Objects — copied by REFERENCE , call by ref.
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1; // obj2 points to the same object as obj1, not a copy
obj2.val = 99; // mutating through obj2 also mutates obj1's object
console.log(obj1.val); // 99 - same underlying object
console.log(obj2.val); // 99