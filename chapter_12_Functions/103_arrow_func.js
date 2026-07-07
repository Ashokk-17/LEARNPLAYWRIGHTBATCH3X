// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, 
// remove the curly braces, and use the =>
// 

function N(){
    let a = 10;b=20;
    let c=a+b;  
    return c;
}
let d = N();
console.log(d);

const N1 = () => {
    let x = 10;y=20;
    let z=x+y;  
    return z;
}
let e = N1();
console.log(e);

//-----------------------------------------------------------------


function greet(name1){
    return `hi ${name1}`;
}
let p =greet("Ashok");
console.log(p);

//function expression with arrow function
const greet2 = (name1) => `hi ${name1}`;
let q = greet2("Ashok");
console.log(q);
//-----------------------------------------------------------------


const doubleIt = n => n * 2;
console.log(doubleIt(10));

//-----------------------------------------------------------------
