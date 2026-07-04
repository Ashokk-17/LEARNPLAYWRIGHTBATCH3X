let s = "Hi";
s += " Dev";
console.log(s);


// ---------- + operator joins strings ----------
let first = "Ashok";
let last = "Kumar";
console.log(first + " " + last); // "Ashok Kumar"


// ---------- + with numbers: string wins ----------
console.log("Score: " + 10);     // "Score: 10"  -> number converted to string
console.log(1 + 2 + "3");        // "33"         -> 1+2 done first (numbers), then +"3" (string)
console.log("1" + 2 + 3 + 5);        // "1235"       -> left to right, string first, so all become strings


// ---------- += builds a string step by step ----------
let msg = "Hello";
msg += ", ";
msg += "World";
msg += "!";
console.log(msg); // "Hello, World!"


// ---------- Template literals: cleaner concatenation ----------
let name = "Ashok";
let age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);
// same result as: "My name is " + name + " and I am " + age + " years old."