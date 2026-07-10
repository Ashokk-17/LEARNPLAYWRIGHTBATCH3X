// let/const control REASSIGNMENT of the variable, not mutation of the object it points to

let config1 = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED (mutating the object, not reassigning config1)
config1.browser = "Firefox";
config1.timeout = 5000;
config1.retries = 2; // adding a new property works too
console.log(config1);

// ✅ let CAN be reassigned to point at a whole new object
config1 = { browser: "Safari" };
console.log(config1);

// print
console.log("---- ")

const config = { browser: "Chrome", timeout: 3000 };
// ✅ Modifying properties — ALLOWED (const only locks the binding, not the object's contents)
config.browser = "Firefox";
config.timeout = 5000;
config.retries = 2;
console.log(config);

// config = { browser: "Safari" }; // ❌ would throw: Assignment to constant variable
console.log(config);