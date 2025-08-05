// Scope :- Kissi bhi variable ko kha tak access kar sakte hain usse uska scope kehte hain.
// Types of Scope :-
// 1. Function Scope :- Function ke andar jo bhi variable declare hote hain unhe function ke andar hi access kiya ja sakta hai.
// 2. Global Scope :- Jo bhi variable function ke bahar declare hote hain unhe kisi bhi jagah se access kiya ja sakta hai.
// 3. Block Scope :- Jo bhi variable {} block ke andar declare hote hain unhe

//  _________________________________________________________________________________________________________________________________

// Execution Context :- Jab bhi Js meain koi code run hota hai usme vo function dekhta hai to vo Execution Context create karta hai 
// aur uske andar variable and function execution store karta hai.Ye process hai jo different phases m chalta hai first memmory
// allocation, second code execution and third garbage collection.

// __________________________________________________________________________________________________________________________

// lexical Scoping :- where you'r variable physically available in code decides where you acess it from. unhe sirf us block ke andar hi access kiya ja sakta hai.This concept is used in JavaScript to determine the scope of variables.

// Dynamic scoping :- From where you call the value decide what value you get. In dynamic scoping, the scope of a variable is determined by the call stack at runtime, rather than its physical location in the code. This means that the value of a variable can change depending on where it is called from, rather than where it is defined.

// ___________________________________________________________________________________________________________________________

// Closure :- Closures mtlb koi function ke andar ak aur function and child function return ho raha hai aur vo parent function ke variable ko access kar raha hai.Isse hame private varaible create kar skte hain and global variable poliution se bch skte hain.

// It's true if any function finished it's variable got destroyed but if that function is returned and function who use it's variable or it's a closure then there  is a name called backlink is created for it by Js engine for your closure function from which we can acess parent variable even after parent function execution is completed or it's variable got destroyed.Variable saved in [[environment]] property of closure function.


// function parent() {
//     let a = 10; // private variable

//     return function child() {
//         console.log(a); // accessing parent function's variable
//     }

// }
