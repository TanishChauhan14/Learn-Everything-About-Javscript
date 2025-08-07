// This -: It is a special keayword because every keyword in JS has same value and nature at every place but "this" keyword value and nature changed on the bases where are we using it.

// Global mein this 

console.log(this);

// function mein this 

function test() {
    console.log(this);  
}

// Method mein this
// Never create a method in fat aroow function to use this kwyword :- Because arrow this ki value apne ki this value ko leta hai .
// also don't use function into function for this keyword
// arrow function in normal/es5 function can work. 

let obj = {
    name : "Tanish",
    age : 20,
    methods : function Method() {
        console.log(this);
        
    }
}
obj.methods();

// class mein this

class firstclass{
    constructor() {
        this.a = 12;
        console.log(this);
    }
}

new firstclass();

// Event Handler mein this

document.querySelector("h1").addEventListener("click",() => {
        console.log(this);
})

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

// Manual Binding

// call :- call method is used to call a function with a given this value and arguments provided individually.if the finction is not method but we want to use a obj in it's this keyword then we can use call method to bind the this keyword with the function.
let obj1 = {
    name : "Tanish",
    age : 20,
}


function test1() {
    console.log(this.name); // this keyword will refer to obj1
    console.log(this.age);
    console.log(this); // this keyword will refer to obj1
    console.log(this === obj1); // true
    console.log(this === window); // false
}

test1.call(obj1);

// apply :- Apply is similar to call but it takes an array of arguments instead of individual arguments. It is used to call a function with a given this value and arguments provided as an array.Mtlb arguments ko pass krne me difference hai call aur apply mein.

let obj2 = {
    name : "Tanish",
    age : 20,
}

function test2(arg1, arg2) {
    console.log(this.name); // this keyword will refer to obj2
    console.log(this.age);
    console.log(arg1, arg2); // arguments passed
    console.log(this === obj2); // true
    console.log(this === window); // false
}
test2.apply(obj2, ["arg1", "arg2"]); // arguments passed as an array

// bind :- Bind is used to create a new function with a specific this value and arguments. It does not call the function immediately but returns a new function that can be called later with the specified this value and arguments.

let obj3 = {
    name : "Tanish",
    age : 20,
}   

function test3(arg1, arg2) {
    console.log(this.name); // this keyword will refer to obj3
    console.log(this.age);
    console.log(arg1, arg2); // arguments passed
    console.log(this === obj3); // true
    console.log(this === window); // false
}
let boundFunction = test3.bind(obj3, "arg1", "arg2"); //
boundFunction(); // call the bound function later with the specified this value and arguments
