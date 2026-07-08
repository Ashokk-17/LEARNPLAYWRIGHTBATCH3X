// String Conversion

// Converts a number to a string
(200).toString(); // "200"

// Converts a boolean to a string
true.toString();  // "true"

// Converts a numeric string to an actual number
Number("42");  // 42


// Parses an integer from the start of a string, stops at the first non-digit character
parseInt("42px");  // 42

// Parses a floating-point number from the start of a string, stops at the first invalid character
parseFloat("3.14rem"); // 3.14