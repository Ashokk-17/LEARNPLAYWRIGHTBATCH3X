//Object with key value pair 

let student = { name : 'Ashok', Age : 27, Role : 'Developer' };
let student1 = { name : 'Ramesh', Age : 30, Role : 'Tester' };
let student2 = { name : 'Suresh', Age : 25, Role : 'Manager' };

console.log(student);
console.log(student1);
console.log(student2);

// Object with quoted (JSON-style) keys - still just a normal object literal
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

// Objects are assigned by reference, so b points to the same object as a
let b = a;
console.log(b);
b.status = "fail";
console.log(b);
console.log(a); // a also shows "fail" since b and a reference the same object


// Two separate objects with identical contents are NOT the same reference
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

// b === a is true because they reference the same object;
// c === d would be false because they are distinct objects
if (b === a) {
    console.log("true");
} else {
    console.log("false");
}