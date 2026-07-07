function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);



function add(x,y){
    let z = x + y;
    //console.log(z);
    return z;

}

let a= add(10,20); // calling argument, return value is discarded here 
console.log(a); // 30 because function returns the sum

function sub(b,c){

    let d = b - c;
    console.log(d);
    return d;
}   

sub(10,5); // calling argument, return value is discarded here
let e = sub(21,30);  
//console.log(e); // 5 because function returns the difference