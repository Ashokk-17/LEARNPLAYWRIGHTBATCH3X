async function testapi(){

try {
    let result = await Promise.reject("503 rejected");

}
catch (error){
    console.log("error is:", error);

}

finally {
    console.log("Finally part always gets executed");

}

}

testapi();