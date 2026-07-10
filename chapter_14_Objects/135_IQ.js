const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj));   // ["a", "b", "c"] - array of property names
console.log(Object.values(obj)); // [1, 2, 3] - array of property values, same order as keys
console.log(Object.entries(obj)); // [["a",1], ["b",2], ["c",3]] - array of [key, value] pairs

const user = { name: "John", age: 30 };

// for...in loops over the object's enumerable property keys
for (const key in user) {
    console.log(`${key}: ${user[key]}`); // access each value via bracket notation
}




















// // Object.keys/values/entries
// // Alternative to for...in: get keys as an array, then iterate with forEach
// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// // Object.entries gives [key, value] pairs, destructured directly in the callback
// Object.entries(user).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });