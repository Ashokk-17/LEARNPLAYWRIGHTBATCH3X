// && -> AND Gate, multiply
// || -> OR Gate, add

let a = true;
let b = false;
console.log(a && b); //  AND
console.log(a || b); //  OR
console.log(!a); // 

console.log(5 != "g");  // Value 5, g ! that true,


// ---------- Example: login check using && ----------
let hasUsername = true;
let hasPassword = false;

if (hasUsername && hasPassword) {
  console.log("Login allowed");
} else {
  console.log("Login denied"); // password missing, && needs BOTH true
}


// ---------- Example: access check using || ----------
let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
  console.log("Access granted"); // || needs only ONE true
} else {
  console.log("Access denied");
}


// ---------- Short-circuiting: && and || return a VALUE, not just true/false ----------
console.log(0 && "hello");     // 0        -> stops at first falsy value
console.log(1 && "hello");     // "hello"  -> 1 is truthy, evaluates second value
console.log(0 || "hello");     // "hello"  -> 0 is falsy, tries next value
console.log("" || "default");  // "default"-> "" is falsy, falls back to default