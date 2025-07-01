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

