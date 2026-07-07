function greet(name){
    console.log(`hello ${name}`);
    return `Hello, ${name}!`;
}

let result = greet("Ashok");
console.log(result); // Hello, Ashok! because 
// function returns the string "Hello, Ashok!"

function number(num1, num2){
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
    return num1 + num2;
}

let sum = number(4, 5);
console.log(sum); // The sum of 4 and 5 is 9
// function returns the number 9