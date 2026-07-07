let status = ["pass", "fail", "skip"];
console.log(status[0]); // Output: pass
console.log(status[2]); // Output: skip

console.log(status.at(-1)); 
console.log(status.at(-3));
console.log(status.at(-4));

status[1]= "blocked"// Output: undefined (index out of bounds);
console.log(status);
