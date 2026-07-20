
function cafe(item, callWhenTableisReady) { // item = order name, 
// callWhenTableisReady = the callback function passed in
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady(); // once "table is ready", 
    // run whatever callback was handed to us
}

function callWhenTableisReady() { // a standalone named function, defined once so it can be reused by reference below
    console.log("calling 9876543210");

}

cafe("Burger", callWhenTableisReady); // pass the named function by reference 
// (no parentheses - hand over the function itself, not its result)

cafe("Pizza", function () { // anonymous function - defined inline,
//  only used for this one call
    console.log("calling 8765432123");
})

cafe("Momos", () => { // arrow function - shorthand syntax for an inline callback,
//  same effect as the anonymous one above
    console.log("calling 3543543");
});