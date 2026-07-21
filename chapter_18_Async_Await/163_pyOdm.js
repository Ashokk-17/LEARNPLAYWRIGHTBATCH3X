function openbrowser(){
    return new Promise(function (resolve){
        resolve("Browser opened");
    });


}
function gotologin(){
    return new Promise(function(resolve){
        resolve("login page opened");
    });

}

function entercredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered successfully!");
    });

}

function clicklogin(){
    return new Promise(function(resolve){
        resolve("Logged in successfully!");
    });

}


async function runE2E(){
 
   let msg1 = await openbrowser();
       console.log("Step 1:", msg1);

   let msg2 = await gotologin();
       console.log("Step 2:", msg2);

   let msg3 = await entercredentials();
       console.log("Step 3:", msg3);

   let msg4 = await clicklogin();
       console.log("Step 4:", msg4);


}

runE2E();