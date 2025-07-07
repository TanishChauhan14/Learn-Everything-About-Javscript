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


