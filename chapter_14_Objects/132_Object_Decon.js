const user = { name1: "John", age: 30, city: "NYC" }; // source object to destructure from

// Basic destructuring
// const { name1, age } = user; // pulls name1 and age into variables of the same name
// console.log(name1);
// console.log(age);

// Rename variables
const { name1: userName, age: userAge } = user; // name1 -> userName, age -> userAge (avoids name clashes)
console.log(userName); // "John"
console.log(userAge); // 30


// destructuring
const { age } = user; // simple pull of the age property into a new "age" variable

// Default values
const { country = "USA" } = user; // user has no "country" key, so the default "USA" is used
console.log(country); // "USA"
console.log(user); // original object unchanged

const data = {
    user:
    {
        name: "John",
        address:
        {
            city: "NYC"
        }
    }
}; // nested object with user.address.city

const { user: { address: { city } } } = data; // nested destructuring: dig through user -> address -> city
console.log(data.user.address.city); // "NYC"