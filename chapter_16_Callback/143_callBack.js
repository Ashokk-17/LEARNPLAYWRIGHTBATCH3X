function print() {
    console.log("Normal Function is called"); // this runs only when someone else calls print()
}

function placeOrder(ClipboardItem, pramodCallback) { // ClipboardItem = order name, pramodCallback = a function passed in as an argument
    console.log("Hi, You order is placed");
    pramodCallback(); // calling the function that was passed in - this is what makes it a "callback"
}

// First Way
placeOrder("Pizza", print); // pass the already-defined print function by name (no parentheses - we pass the function itself, not its result)

// Sencond Way Anoy
placeOrder("Burger", function () { // anonymous function - defined inline, has no name, used only here
    console.log("Anoy Fn, I am also a function wihtout name!")
});

// Third Way - Arrow Fn
placeOrder("Momos", () => { // arrow function - shorter syntax for an anonymous function, same effect as the anonymous one above
    console.log("Arrow Fn, I am also a function wihtout name!")
});
