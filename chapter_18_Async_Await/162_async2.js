function getapi(){
    return Promise.resolve("Abd123");
    console.log("This line will never get executed");
    
}

getapi();



async function testapi(){
    let token = await getapi();
    console.log("Token is:", token);
}

testapi();