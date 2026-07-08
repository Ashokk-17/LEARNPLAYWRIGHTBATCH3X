// Pure Functions
// A pure function always returns the same output for the same input and has no side effects.

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total, passed) {
    // Only uses its own arguments, doesn't read/modify anything outside itself
    // Converts passed/total into a percentage, rounded to 2 decimal places
    return ((passed / total) * 100).toFixed(2);
}

console.log(calculatePassRate(10, 7)); // 70.00
console.log(calculatePassRate(10, 7)); // 70.00 — same inputs, same output every time

// ❌ Impure — depends on external state

function isPassing(score) {
    return score >= threshold;  // reads "threshold" from outer scope instead of a parameter
}

let threshold = 70;
console.log(isPassing(threshold)); // true (70 >= 70)

threshold = 50;
console.log(isPassing(threshold)); // true (50 >= 50) — result changed even though the call "shape" looks identical
