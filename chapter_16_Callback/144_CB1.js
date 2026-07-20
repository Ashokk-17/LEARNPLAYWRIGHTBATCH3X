function test(title, callback) { // title = a description string, callback = a function passed in as an argument
    console.log(title);
    callback(); // calling the function that was passed in - this is what makes it a "callback"
}

test('has title', () => { // arrow function passed as the callback, defined inline right where it's used
    console.log("Hi");
})
