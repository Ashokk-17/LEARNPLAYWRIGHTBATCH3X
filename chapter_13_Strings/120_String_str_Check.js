// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// incudes
console.log(url.includes("staging"));
console.log(url.includes("production"));

// startsWith / endsWith
url.startsWith("https"); // true
url.startsWith("http://");  //fasle
url.endsWith("true");  // true


// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));

console.log(url.indexOf("nothere"));
console.log(url.indexOf("x"));

//
console.log(url.search(/login/));
console.log(url.search(/vwo/));

// /regex/ - Regular EXPRESSION - These are nothing but A-patterns that you can find within
//  the strings automatically. 


/*This program checks a URL string ("https://staging.vwo.com/api/login?retry=true") for different things. Here's each part in plain terms:

1. includes() — "Does this text appear anywhere in the string?"


url.includes("staging")     // true  → "staging" is in the URL
url.includes("production")  // false → "production" is not in the URL
2. startsWith() / endsWith() — "Does the string begin/end with this?"


url.startsWith("https")     // true  → URL starts with "https"
url.startsWith("http://")   // false → it's "https://", not "http://"
url.endsWith("true")        // true  → URL ends with "true"
⚠️ Note: these 3 lines don't have console.log, so the results are computed but never shown in the console.

3. indexOf() / lastIndexOf() — "Where does this character/text first (or last) appear?" Returns a position number, or -1 if not found.


url.indexOf("a")      // finds the FIRST "a" in the string, returns its position
url.lastIndexOf("a")  // finds the LAST "a" in the string, returns its position
url.indexOf("nothere") // -1, because that text isn't in the URL
url.indexOf("x")       // -1, no "x" in the URL
4. search() with regex — like indexOf, but searches using a pattern (regular expression) instead of plain text.


url.search(/login/)  // finds position of "login" in the URL
url.search(/vwo/)    // finds position of "vwo" in the URL
In short: the file demonstrates four ways to inspect a string — check if it contains, starts/ends with, find position of a substring, and search using a pattern.*/