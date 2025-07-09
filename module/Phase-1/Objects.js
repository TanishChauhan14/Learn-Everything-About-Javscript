// Objects :- It is a collection of key-value pairs.It is the whole information about a particular entity
// Example of Object

let obj ={
    name :"Tannu",
    age :20,
    isStudent : true
}

// Accessing the value of an object
 
// way: 1
console.log(obj.name); // Tannu
// way: 2
let aa = "age"; // That's the key we want to access and also why we have two ways to access the value of an object .This can use it's value as a key.This is called dynamic key access.we can't do this in way: 1 .
console.log(obj[aa]); // 20

//________________________________________________________________________________________________________________________________

// Nesting and Deep access :-  Mtlb objects ke andar ak or object ho sakta hai or usse access karne ko Nesting kehte hai.
let obj2 = { 
    name: "Tannu",
    age: 20,
    isStudent: true,
    address: {
        city: "Delhi",
        state: "Delhi",
        country: "India"
    }
}
// Accessing the value of nested object
// way: 1
console.log(obj2.address.city); // Delhi


// way: 2
console.log(obj2["address"]["state"]); // Delhi

//________________________________________________________________________________________________________________________________

 // Destructuring
let {city,state} = obj2.address;

//________________________________________________________________________________________________________________________________


// Adding new key-value pair to an object
obj2.pincode = 110001; // Adding new key-value pair
console.log(obj2); // { name: 'Tannu', age: 20, isStudent: true, address: { city: 'Delhi', state: 'Delhi', country: 'India' },

// looping through an object





