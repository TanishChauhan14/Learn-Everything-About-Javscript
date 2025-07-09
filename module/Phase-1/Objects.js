// Objects :- It is a collection of key-value pairs.It is the whole information about a particular entity
// Example of Object

let obj ={
    name :"Tannu",
    age :20,
    isStudent : true
}

// Accessing the value of an object
 
// way: 1
// console.log(obj.name); // Tannu
// way: 2
let aa = "age"; // That's the key we want to access and also why we have two ways to access the value of an object .This can use it's value as a key.This is called dynamic key access.we can't do this in way: 1 .
// console.log(obj[aa]); // 20

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
// console.log(obj2.address.city); // Delhi


// way: 2
// console.log(obj2["address"]["state"]); // Delhi

//________________________________________________________________________________________________________________________________

 // Destructuring
let {city,state} = obj2.address;

//________________________________________________________________________________________________________________________________


// Adding new key-value pair to an object
obj2.pincode = 110001; // Adding new key-value pair
// console.log(obj2); // { name: 'Tannu', age: 20, isStudent: true, address: { city: 'Delhi', state: 'Delhi', country: 'India' },

// looping through an object

// 1. for-in

let obj3 = {
    name:"Tanishka",
    age : 21,
}

for(let key in obj3){
   // console.log(key ,obj3[key]);
    
}

// 2. Object.keys :- It is use make array of all the keys of any object.

// console.log( Object.keys(obj3));

// 3. Object.entries :- It create a array of arrays of the each key-value pairs .Mtlb har key and value ke pair of ak array bnake ak array m daal deta hai like :- [[key1 , value1],[key2 , value2]].



//________________________________________________________________________________________________________________________________

// Copying Objects 

// 1. Spread :- It work same as it wotrk in Array.Don't use this if we have object into objet and array into array .Instead use structeredClone() or Json.parse(Json.stringgify(obj))

let obj4 = {
    name :"Happy",
    age :20
}

let obj5 = {...obj4} //Now all the Key-valuehad been copied to obj5.With it's own memory location.
// console.log(obj5);

// 2. Object.assign :-  Work same in Object but array m alg hai kyuki ye assign key-value pairs mai answer deta hai.Pr agar ham ese likhe to output array dega Object.assign([],arr).

let  obj6 = Object.assign({},obj4);


// optional Chaininng :- If key in the object is not presented how we can handle it by giving response undefined instead of error.

let obj7 = {
    name : {
        firstname : "Tanish",
        lastname :  "chouhan"
    },
    age : 20
} 

console.log(obj7?.names?.firstname);

// Computed  properties :- runtime p key decide ho skti hai 

let role = "admin"

let obj8 = {
    name : {
        firstname : "Tanish",
        lastname :  "chouhan"
    },
    age : 20,
    [role] : "Tannu"
}

console.log(obj8);


