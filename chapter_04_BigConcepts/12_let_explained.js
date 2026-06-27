let a = 10;
console.log(a);

let b = 20;
b=b+1;
b=b+1;
console.log(b);

/*SyntaxError: Identifier 'retryCount' has already been declared
let b = 30;
console.log(b);
*/

let teststatus = "pending";
if (teststatus === "pending"){
    let executiontime = 1200;
    console.log(executiontime); //1200
}

//console.log(executiontime); //ReferenceError: executiontime is not defined

//SyntaxError: Identifier 'retryCount' has already been declared 
