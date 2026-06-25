// ============================================================
//         JAVASCRIPT IDENTIFIER RULES
// ============================================================
// An identifier is any name you give to a variable, function,
// class, parameter, or label in JavaScript.
// ============================================================


// ------------------------------------------------------------
// RULE 1: Can contain letters, digits, underscores, and dollar signs
// ------------------------------------------------------------
// Allowed characters: A-Z, a-z, 0-9, _ , $
// Nothing else (no spaces, hyphens, @, #, etc.)

let userName   = "Alice";    // letters only        ✓
let user_name  = "Bob";      // underscore           ✓
let $price     = 9.99;       // dollar sign          ✓
let score2     = 100;        // digit inside         ✓

// let user-name = "bad";    // hyphen               ✗ SyntaxError
// let user name = "bad";    // space                ✗ SyntaxError
// let user@name = "bad";    // @ symbol             ✗ SyntaxError


// ------------------------------------------------------------
// RULE 2: Must START with a letter, underscore ( _ ), or dollar sign ( $ )
// ------------------------------------------------------------
// The very first character CANNOT be a digit.

let _private   = "hidden";   // starts with _        ✓
let $element   = "div";      // starts with $        ✓
let firstName  = "John";     // starts with letter   ✓

// let 1stPlace = "gold";    // starts with digit    ✗ SyntaxError
// let 9lives   = "cat";     // starts with digit    ✗ SyntaxError


// ------------------------------------------------------------
// RULE 3: Case-sensitive — uppercase and lowercase are DIFFERENT identifiers
// ------------------------------------------------------------

let age  = 25;
let Age  = 30;
let AGE  = 35;

console.log(age, Age, AGE);  // 25  30  35  — three separate variables


// ------------------------------------------------------------
// RULE 4: Cannot use reserved (keyword) words as identifiers
// ------------------------------------------------------------
// Reserved words are part of the language syntax and have special meaning.
// Examples: var, let, const, if, else, for, while, return, function,
//           class, new, this, true, false, null, undefined, typeof ...

// let return  = 5;           // 'return' is reserved   ✗ SyntaxError
// let class   = "Math";      // 'class' is reserved    ✗ SyntaxError
// let if      = true;        // 'if' is reserved       ✗ SyntaxError

let returnValue = 5;          // fine — just contains the word  ✓
let className   = "Math";     // fine                           ✓
let isValid     = true;       // fine                           ✓


// ------------------------------------------------------------
// RULE 5: No length limit, but keep names meaningful and readable
// ------------------------------------------------------------
// JavaScript does NOT enforce a maximum length, but long names
// hurt readability in practice.

let x = 10;                                            // too short — what is x?
let totalNumberOfStudentsEnrolledInTheCourse = 42;     // legal but too long
let studentCount = 42;                                 // just right           ✓


// ------------------------------------------------------------
// RULE 6: Unicode letters are allowed (but avoid them for portability)
// ------------------------------------------------------------
// JavaScript technically supports Unicode in identifiers,
// but sticking to ASCII letters is the universal convention.

let café   = "coffee shop";   // Unicode letter — technically valid in JS
let résumé = "document";      // works but avoid in shared codebases

let cafeShop  = "coffee shop"; // ASCII equivalent — preferred ✓
let resumeDoc = "document";     // ASCII equivalent — preferred ✓


// ------------------------------------------------------------
// RULE 7: Conventions (not enforced by the engine, but widely followed)
// ------------------------------------------------------------

// camelCase  — variables and functions  (most common in JS)
let totalPrice    = 150;
function getUserName() { return "Alice"; }

// PascalCase — classes and constructors
class UserAccount { }

// UPPER_SNAKE_CASE — constants that never change
const MAX_RETRY_COUNT = 3;
const API_BASE_URL    = "https://example.com";

// _leadingUnderscore — signals "private / internal use only"
let _internalCounter = 0;

// $dollar — common in libraries (jQuery uses $), or auto-generated names
let $root = null;


// ============================================================
// QUICK REFERENCE CHEAT-SHEET
// ============================================================
//
//  ✓  Starts with  letter | _ | $
//  ✓  Rest can be  letter | digit | _ | $
//  ✓  Case-sensitive  (count ≠ Count ≠ COUNT)
//  ✗  No spaces or special characters  (-, @, #, !, ...)
//  ✗  No leading digit
//  ✗  No reserved keywords  (let, const, if, return, class …)
//
// ============================================================
