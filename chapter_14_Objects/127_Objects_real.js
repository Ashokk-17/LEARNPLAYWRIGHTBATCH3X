let config = { };

config.browser = 'chrome';
config.timeout = 1000;
config.testname = 'login test';

console.log(config);



delete config.timeout;
console.log(config);

if ( config.browser ==='chrome' ){
    console.log("i will execute the test case ");
}
    else {
        console.log("i will not execute the test case ");
}