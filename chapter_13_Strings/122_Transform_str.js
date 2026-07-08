let str = "  Hello, World!  ";

// Converts the whole string to uppercase (spaces are kept as-is)
console.log(str.toUpperCase()); // "  HELLO, WORLD!  "

// Converts the whole string to lowercase (spaces are kept as-is)
console.log(str.toLowerCase()); // "  hello, world!  "

// Removes whitespace from BOTH ends of the string
console.log(str.trim()); // "Hello, World!"

// Removes whitespace only from the START — result not printed, so nothing shown
str.trimStart(); // "Hello, World!  "

// Removes whitespace only from the END — result not printed, so nothing shown
str.trimEnd(); // "  Hello, World!"

let msg = "Test: FAIL. Retry: FAIL.";

// replace() with a plain string only replaces the FIRST match
console.log(msg.replace("FAIL", "PASS")); // "Test: PASS. Retry: FAIL."

// replaceAll() replaces EVERY match
console.log(msg.replaceAll("FAIL", "PASS")); // "Test: PASS. Retry: PASS."

// replace() with a /pattern/g (global flag) also replaces EVERY match
console.log(msg.replace(/FAIL/g, "PASS")); // "Test: PASS. Retry: PASS."

// Concatenation — three different ways to join strings together
// None of these are logged, so nothing is printed
"Hello" + " " + "World";        // "Hello World"
"Hello".concat(" ", "World");   // "Hello World"
`${"Hello"} ${"World"}`;        // "Hello World"

let url = "https://app.vwo.con?app=pramod";

// Replaces every occurrence of "app" with "qa" (matches in both places it appears)
console.log(url.replace(/app/g, "qa")); // "https://qa.vwo.con?qa=pramod"

// split(",") breaks the string into an array wherever a comma appears
let r = "pass,fail,skip".split(",");
console.log(r); // [ 'pass', 'fail', 'skip' ]

// split("_") breaks into an array on underscores, then join(" ") glues them back with spaces
let rr = "test_login_pass".split("_").join(" ");
console.log(rr); // "test login pass"

// join("-") glues array elements together using "-" as the separator
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date); // "2024-03-07"
