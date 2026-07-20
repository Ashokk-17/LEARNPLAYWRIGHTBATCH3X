let order = new Promise((resolve, reject) => {
    let foodReady = true;

    if(foodReady) {
        resolve("Food is ready");
    } else {
        reject("Food is not ready");
    }
})

console.log(order)

