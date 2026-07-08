function add(a,b,c) {
return a+b+c;
}

let num = [1,2,3];
add(...num);
console.log(add(...num)); // Output: 6
console.log(add(num)); // Output: 1,2,3undefined

//-----------------------------------------------------

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let responseCodes = [200, 201, 404];
hasError(...responseCodes);   // true

/*
This is a nice example of the spread operator (...) used in two different ways. Let me break it down.

Part 1: Spread in a function call

function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3];
add(...num);   // same as add(1, 2, 3)  →  6
add expects three separate arguments. But num is a single array. The ...num spreads the array out into individual values at the call site:


add(...num)   →   add(1, 2, 3)
So a=1, b=2, c=3, and it returns 6.

Without the spread, add(num) would pass the whole array as a, leaving b and c as undefined → result would be "1,2,3undefinedundefined" (a broken string).

Part 2: Rest parameter in a function definition

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let responseCodes = [200, 201, 404];
hasError(...responseCodes);   // true
Here ... appears in the function definition, so it's the rest parameter — the opposite job. It collects all the arguments passed in into a single array called codes.

hasError(...responseCodes) spreads the array → hasError(200, 201, 404)
Inside hasError, the rest parameter gathers them back → codes = [200, 201, 404]
.some(c => c >= 400) returns true if at least one code is >= 400. Since 404 >= 400, it returns true.
The key distinction (same ..., opposite meaning)
Where ... appears	Name	What it does
Function call: add(...num)	Spread	Expands an array into separate arguments
Function definition: function hasError(...codes)	Rest	Collects separate arguments into one array
A neat way to remember it: spread takes one thing apart, rest gathers many things together — and in hasError(...responseCodes) you actually see both cooperating: spread on the way in, rest on the way to collect.

Want me to add runnable console.log statements to 110_spead.js so you can see the outputs when you run it?
*/