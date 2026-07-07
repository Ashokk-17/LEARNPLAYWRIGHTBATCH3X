// Define
function greet() { // parameter
    console.log("Hello"); // function body
    let x=10, y=20;
    let z = x + y;
    return z; // return sends a value back to the caller
}

// This is a Basic type-2 function, which means no argument, with return.
// Call
greet(); // calling argument, return value is discarded here

let a = greet(); // calling argument and storing the returned value
console.log(a); // "Hi" because function now returns a value