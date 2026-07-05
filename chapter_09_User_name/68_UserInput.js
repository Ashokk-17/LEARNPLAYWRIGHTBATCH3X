// Node.js has no browser-style prompt() function, so reading terminal
// input requires the built-in "readline" module instead.
const readline = require("readline");

// createInterface connects readline to the terminal's stdin (keyboard)
// and stdout (screen) streams.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question() is asynchronous — it prints the prompt, then waits for
// the user to press Enter before running the callback with their answer.
rl.question("Enter a number: ", (answer) => {
    let num = Number(answer); // convert string to number

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    // Closing the interface lets the Node process exit; otherwise it
    // would keep listening on stdin forever.
    rl.close();
});