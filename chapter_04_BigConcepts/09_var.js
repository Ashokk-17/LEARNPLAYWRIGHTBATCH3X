var fruit = 'apple';
var fruit = 'mango';
fruit = 'banana';

console.log(fruit);
var fruit = 'mango';

var testcases = ['login', 'signip', 'logout'];

for (var i=0; i<testcases.length; i++){
    console.log(testcases[i]);


}
console.log("loop counter leaked outside the loop:", i);