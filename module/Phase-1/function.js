// What :-a function is a reusable block of code that performs a specific task


//  Why :-  Reusability,Modularity,Cleaner CodeCleaner Code,Return Values, Useful in Events & Callbacks,Async Code (Timers, Fetch, etc.)


//  How :- 
function First() {
    console.log("Hello world");
    
}
// First();




// Types of functions 
// 1. function statement :-  function name(param){}
// 2. function expression :- let fnc = function(){}
// 3. fat arrow funtion : - let fnc = ()=>{}



// Default Parameters :- 
function add(n1 = 0 ,n2 = 0){
   console.log(n1 + n2); // if there was no default param and no args will be passed the answer wil be NaN because n1 and n2
//                           became undefinde and so on undefined + undefined = NaN.

}
// add();

//________________________________________________________________________________________________________________________________


//  rest Operator :- jab Args kai saare ho to hame utne hi params bnane padege , in se bachne ke liye ham rest operator ka use krte hai. It is represented by " ... " .One main point jab ye dots function k param m use ho to usse rest operater bolte hai. 
function rest(...val) {
    
}
rest(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)

 //_______________________________________________________________________________________________________________________________


// Returns value :-Send back a value to wherever the function was called(Jaha se aaya vhi daal deta hai) and End of the execution of that function .
 function returns(val){
    return 10 + val;
 } 
//  let value = returns(8);
// console.log(value);

//________________________________________________________________________________________________________________________________

// and early returns :- Early return means exiting a function as soon as a condition is met, without executing the rest of the code in the function.

function earlyreturns(val){
    if(val < 10){
        return "Hello"
    }
    return "World!"
}
// console.log(earlyreturns(40));


//________________________________________________________________________________________________________________________________

// First class function  :- Function ko values ki tarah treat kr skte hai.It's a concept we can use a function as value so we can pass it as an args and take it as params.

function father(fn){ // it is a Higher order function.
    fn();
}

// father(function child(){console.log("Hey")});

//________________________________________________________________________________________________________________________________


// Higher order function :-  It is a concept in which a function can return a function or can accept a function as it's parameter.

function Higherorder(){ // It is also a higher order function.
    return function(){
        console.log("passing a function");
        
    }
}

// Higherorder()();

//______________________________________________________________________________________________________________________________

// Pure Vs Impure Functions

// Pure :- The output of a pure function is determined only by its input values, without observable side effects. It means that the function will always return the same output for the same input and does not modify any external state or variables.
function pureFunction(x, y) {
    return x + y; // Output depends only on input values
}

// Impure :- An impure function may produce different outputs for the same input or may have side effects, such as modifying external variables or state. aur can effect the outside world.

let externalVariable = 10;
function impureFunction(){
    externalVariable++; // Modifies an external variable, making it impure
}

//________________________________________________________________________________________________________________________________

// Closure :- It's a concept in which a funtion return a function and that function has access to the outer function's variables even after the outer function has finished executing. It allows the inner function to "remember" the environment in which it was created.Inner function have to use the outer function's variables. This is useful for data encapsulation and creating private variables.

// 🔹 Closure:
//Jab ek inner function return ho jaata hai ya kahin store ho jaata hai, aur phir bhi wo apne outer function ke variables ko yaad rakhta hai, to is behaviour ko closure kehte hain.

// Yaani: Closure ek function hota hai jo apne lexical environment ko yaad rakhta hai, chahe outer function execute ho chuka ho.

function outerFunction() {
    let outerVariable = "I am from outer function";

    return function innerFunction() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
    };
}

// outerFunction()();  Calling the inner function, which has access to outerVariable

// lexical scope :- It is a concept in which a function can access the variables of its parent function or outer scope. It means that a function can access the variables that are defined in its outer scope, even if those variables are not passed as parameters to the function.

// 🔹 Lexical Scope:
// Jab hum ek function likhte hain, to uska scope (kis variable ko access kar sakta hai) code ke likhne ke time pe hi decide ho jata hai.Isse hi lexical scope kehte hain.

// Yaani: Inner function apne parent (outer) function ke variables ko dekhta hai, kyunki wo uske lexical scope me defined hain.


function abc() {
    let a = 1;
    console.log(a); // Accessing variable from outer scope
    function def(){
        let b = 2;
        console.log(a, b); // Accessing variables from outer scope
        function ghi(){
            let c = 3;
            console.log(a, b, c); // Accessing variables from outer scopes
        }
    }
}

//________________________________________________________________________________________________________________________________

// Immediately Invoked Function Expression (IIFE) :- It is a function that is executed immediately after it is defined. It is a way to create a new scope and avoid polluting the global scope. It is useful for creating private variables and functions.Also known as self calling function or self executing function.

(function(){
    console.log("I am an IIFE");
})();
//________________________________________________________________________________________________________________________________


// Hoisting difference function declaration/statement vs function expression :- Hoisting is a Javascript concept in which we can run a function before it is defined(created). It means ki wo function ko upar le aata hai, so we can call the function uske baane se phle hi. But this is only possible with function declaration, not with function expression.


// Function Declaration: Hoisted
hoistedFunction(); // This will work because function declarations are hoisted
function hoistedFunction() {
    console.log("This function is hoisted");
}
// Function Expression: Not Hoisted 

//_______________________________________________________________________________________________________________________________


