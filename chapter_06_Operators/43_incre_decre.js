// Pre Increment
// let a = 10;
// let b = ++a; // (increment the a by 1)

// // Pre increment -> ++a ->. increse the value and then assign.
// console.log(b);
// console.log(a);


// // Deincrement
// let a = 10;
// let b = --a; // (increment the a by 1)
// console.log(b); // 9
// console.log(a);  // 9

let a = 10;
let b = a--; // (increment the a by 1)
console.log(b); // 10
console.log(a);  // 9


// ============================================================
// Summary: ++ and -- each have a PRE and POST form
//
//   ++x  → pre-increment  → increase FIRST, then return new value
//   x++  → post-increment → return OLD value FIRST, then increase
//   --x  → pre-decrement  → decrease FIRST, then return new value
//   x--  → post-decrement → return OLD value FIRST, then decrease
// ============================================================

console.log("--- Pre-increment ---");
let x1 = 5;
let y1 = ++x1;      // x1 becomes 6 FIRST, then y1 gets 6
console.log(y1);    // 6
console.log(x1);    // 6

console.log("--- Post-increment ---");
let x2 = 5;
let y2 = x2++;      // y2 gets 5 FIRST, then x2 becomes 6
console.log(y2);    // 5
console.log(x2);    // 6

console.log("--- Pre-decrement ---");
let x3 = 5;
let y3 = --x3;      // x3 becomes 4 FIRST, then y3 gets 4
console.log(y3);    // 4
console.log(x3);    // 4

console.log("--- Post-decrement ---");
let x4 = 5;
let y4 = x4--;      // y4 gets 5 FIRST, then x4 becomes 4
console.log(y4);    // 5
console.log(x4);    // 4

console.log("--- Common use: loop counter ---");
for (let i = 0; i < 3; i++) {   // i++ here is post-increment, runs after each loop
  console.log("loop i =", i);
}