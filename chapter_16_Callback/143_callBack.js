function print(){
    console.log("Hello world");

}


function Place_Order(menu, callback){
    console.log("Hi your order is placed for " + menu);
    callback();

}


Place_Order("Pizza", print);

Place_Order("Burger", function () {
    console.log("Anoy Fn, I am also a function wihtout name!")
});
// Third Way - Arrow Fn
Place_Order("Momos", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});