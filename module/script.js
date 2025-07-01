// Var Let Const
// Declaration and Initialization

let a; // Declare karna
a = 15; // Initialization
var x = 12; // Declare and Initialization

// Var  :- 1. Window mein add hota hai. 2.Function scoped hota hai.  3.Redeclare kr skte hai. 4.Block scoped nahi hota.
// Let :- 1. Reclare nahi kr skte. 2.Block scoped hota hai. 3.Window mein add nahi hota.
// Const :- 1. Reassign nahi kr skte. 2.Block scoped hota hai. 3.Window mein add nahi hota.

// ____________________________________________________________________________________________________________________________________

// Scope  (Global, Local/Function scope, Block)

// Global Scope
var globalVar = "I am a global variable"; // Accessible anywhere in the script
function globalFunction() {
    console.log(globalVar); // Can access global variable
}
globalFunction(); // Output: I am a global variable

// Local Scope
function localFunction() {
    var localVar = "I am a local variable"; // Accessible only within this function
    console.log(localVar); // Output: I am a local variable
}
localFunction();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined


// Block Scope
{
    let blockVar = "I am a block-scoped variable"; // Accessible only within this block
    console.log(blockVar); // Output: I am a block-scoped variable
}

// Question 

let num = 10;
 {
    let num = 20; 
 }
 console.log(num); // Output: 10 (because the block-scoped variable does not affect the outer variable)

 // ______________________________________________________________________________________________________________________________

// Redeclaration and Reassignment.
var redeclareVar = "I can be redeclared";
var redeclareVar = "I can be redeclared again"; // Redeclaration is allowed with var


let noRedeclareLet = "I cannot be redeclared";
// let noRedeclareLet = "I cannot be
noRedeclareLet = "I can be reassigned"; // Reassignment is allowed with let



// ________________________________________________________________________________________________________________________________

// Temporary Dead Zone (TDZ) :- 
// Utna area javascript ko pata to hai ki variable hai, par usko access nahi kr sakte. 
// TDZ tab hota hai jab variable ko declare to kiya ho, par usko initialize nahi kiya ho.
// variable ke upr ka jitna bhi space hai voh uska TDZ hai. TDZ sirf let aur const ke sath hota hai, 
// var ke sath nahi hota pr undefined aata hai. 


// ____________________________________________________________________________________________________________________________________


// Hoisting :- Ak variable ko jab bnate hai to vo do part mein toot jata hai Declaration aur initialization,
//  Jisme se Dclaration(let a = undefined) top p chala jata hai or initialization(a = 12) wahi rehta hai.

// Behind the scene hoisting kaise hota hai:

// var a; // Declaration

console.log(a); // Output: undefined (due to hoisting)

// a = 12; // Initialization

// Hoisting with let and const :- Hoisting works but it gives TDZ error because they can't acccess before initialization.
// Hoisting with var :- Hoisting works and it gives undefined because var can be accessed before initialization.

// Hoisting with function :- Hoisting works and it gives the function definition because functions are hoisted.

console.log(fun());

function fun() {
    return "Hellow World";
}

// ________________________________________________________________________________________________________________________________



// Data Types in JavaScript
// 1. Primitive Data Types :- Jihne copy krne p hame real value milta hai.(String, Number, Boolean, Null, Undefined, Symbol, BigInt)

let a1 = 12;
let b1 = a1; // Copying the value of a1 to b1
a1 = 15; // Changing the value of a1
console.log(b1); // Output: 12

// 2. Reference Data Types :- Jihne copy krne p hame reference milta hai, jisse hame real value nahi milta.(Object, Array, Function)

let arr = [1, 2, 3];
let brr = arr; // Copying the reference of arr to brr 
console.log(brr.pop());
console.log(arr); // Output: [1, 2] (brr is a reference to arr, so changes in brr affect arr)

// null :- Iska mtlb jaanbujh kr kuch nahi hai, iska koi value nahi hai.

// undefined :- Iska mtlb ki variable ko declare to kiya hai, pr usko initialize nahi kiya hai.aur default value hoti hai.

// symbol :- Yeh ek unique value hoti hai, jo ki kisi bhi object ke property ko uniquely identify karne ke liye use hoti hai.
 let obj = {
    name: "Tanish",
    id:12
 }
 let idSymbol = Symbol("id");
    obj[idSymbol] = 123; // Adding a unique property to the object .Abb uss obj ke andar khud ka different idSymbol property ho jayegi jiska naam id hai pr value alag hogi.
 
//_____________________________________________________________________________________________________________________________________

// Dynamic Typing :- Js mein static typing nahi hoti, yha pr dynamic typing hoti hai jiska matlab hai ki variable ki type run time
// p change ho sakti hai. Matlab ek variable ko hum string se number mein change kr sakte hai.
// Dynamic typing allows flexibility in JavaScript, but it can also lead to unexpected behavior if not managed carefully.

let dynamicVar = "Hello"; // Initially a string
dynamicVar = 42; // Now a number
console.log(dynamicVar); // Output: 42

// Type coercion :- Js mein type coercion hoti hai, jiska matlab hai ki js automatically type ko convert kr deta hai.
let num1 = "5";
let num2 = 10;
let result = num1 + num2; // Type coercion happens here, num1 is converted to a number

console.log(result); // Output: 510 (string concatenation)  

// To avoid type coercion, we can use explicit conversion:

let explicitResult = Number(num1) + num2; // Explicitly converting num1 to a number

console.log(explicitResult); // Output: 15 (number addition)   

console.log(num2 - num1); // Output: 5 (number subtraction, num1 is coerced to a number)   

console.log(num2 * num1); // Output: 50 (number multiplication, num1 is coerced to a number)

console.log(num2 / num1); // Output: 2 (number division, num1 is coerced to a number)

console.log(num2 % num1); // Output: 0 (number modulus, num1 is coerced to a number)    

// ________________________________________________________________________________________________________________________________

// Truthy and Falsy Values in JavaScript

// Falsy : - values are values that evaluate to false in a boolean context.(false, 0, "", null, undefined, NaN, document.all)
// Truthy : - values are values that evaluate to true in a boolean context.(true, 1, "Hello", [], {}, function() {}, Infinity, -Infinity)
