// if (ourStatusCode >= 200 && ourStatusCode < 300)
//This is a perfectly normal function. 





//--------------------------------------------------------------
//normal function
function status(ourStatusCode){
    if (ourStatusCode >=200 && ourStatusCode < 300){
        return "success";
    }
}
console.log(status(200));


//------------------------------------------------------------------

//function as expression

const validatestatus = function status(ourStatusCode){
    if (ourStatusCode >=200 && ourStatusCode < 300){
        return "success";
    }
}
//console.log(status(200));
console.log(validatestatus(200));

//------------------------------------------------------------------

//Arrow function

const status1 = (ourStatusCode1) => {
    if (ourStatusCode1 >=200 && ourStatusCode1 < 300){
        return "success";
    }
};
console.log(status1(200));
