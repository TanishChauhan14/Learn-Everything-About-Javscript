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