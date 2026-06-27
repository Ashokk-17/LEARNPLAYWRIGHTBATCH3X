// ============================================================
//   PRINTING ALL EXAMPLES FROM IDENTIFIER RULES
// ============================================================


// ------------------------------------------------------------
// RULE 1: Can contain letters, digits, underscores, and dollar signs
// ------------------------------------------------------------
let userName  = "Alice";
let user_name = "Bob";
let $price    = 9.99;
let score2    = 100;

console.log("--- Rule 1: Allowed characters ---");
console.log("userName  :", userName);
console.log("user_name :", user_name);
console.log("$price    :", $price);
console.log("score2    :", score2);


// ------------------------------------------------------------
// RULE 2: Must START with a letter, _ , or $  (not a digit)
// ------------------------------------------------------------
let _private  = "hidden";
let $element  = "div";
let firstName = "John";

console.log("\n--- Rule 2: Valid starting characters ---");
console.log("_private  :", _private);
console.log("$element  :", $element);
console.log("firstName :", firstName);


// ------------------------------------------------------------
// RULE 3: Case-sensitive
// ------------------------------------------------------------
let age = 25;
let Age = 30;
let AGE = 35;

console.log("\n--- Rule 3: Case-sensitive ---");
console.log("age :", age);
console.log("Age :", Age);
console.log("AGE :", AGE);


// ------------------------------------------------------------
// RULE 4: Cannot use reserved keywords
// ------------------------------------------------------------
let returnValue = 5;
let className   = "Math";
let isValid     = true;

console.log("\n--- Rule 4: Reserved words avoided ---");
console.log("returnValue :", returnValue);
console.log("className   :", className);
console.log("isValid     :", isValid);


// ------------------------------------------------------------
// RULE 5: No length limit — but keep names meaningful
// ------------------------------------------------------------
let x = 10;
let totalNumberOfStudentsEnrolledInTheCourse = 42;
let studentCount = 42;

console.log("\n--- Rule 5: Length ---");
console.log("x                                           :", x);
console.log("totalNumberOfStudentsEnrolledInTheCourse    :", totalNumberOfStudentsEnrolledInTheCourse);
console.log("studentCount                                :", studentCount);


// ------------------------------------------------------------
// RULE 6: Unicode letters are allowed (stick to ASCII in practice)
// ------------------------------------------------------------
let cafeShop  = "coffee shop";
let resumeDoc = "document";

console.log("\n--- Rule 6: ASCII equivalents (preferred) ---");
console.log("cafeShop  :", cafeShop);
console.log("resumeDocs :", resumeDoc);


// ------------------------------------------------------------
// RULE 7: Naming conventions
// ---------------------------------
// ---------------------------
let totalPrice = 150;

function getUserName() {
    return "Alice";
}

class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

const MAX_RETRY_COUNT = 3;
const API_BASE_URL    = "https://example.com";

let _internalCounter = 0;
let $root            = null;

console.log("\n--- Rule 7: Naming conventions ---");
console.log("totalPrice (camelCase)           :", totalPrice);
console.log("getUserName() (camelCase fn)     :", getUserName());
console.log("UserAccount instance (PascalCase):", new UserAccount("Bob").name);
console.log("MAX_RETRY_COUNT (UPPER_SNAKE)    :", MAX_RETRY_COUNT);
console.log("API_BASE_URL (UPPER_SNAKE)       :", API_BASE_URL);
console.log("_internalCounter (_leading)      :", _internalCounter);
console.log("$root ($dollar)                  :", $root);
