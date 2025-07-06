// What :-a function is a reusable block of code that performs a specific task
//  Why :-  Reusability,Modularity,Cleaner CodeCleaner Code,Return Values, Useful in Events & Callbacks,Async Code (Timers, Fetch, etc.)
//  How :- 
function First() {
    console.log("Hello world");
    
}
First();

// Types of functions 
// 1. function statement :-  function name(param){}
// 2. function expression :- let fnc = function(){}
// 3. fat arrow funtion : - let fnc = ()=>{}

// Default Parameters :- 
function add(n1 = 0 ,n2 = 0){
    console.log(n1 + n2); // if there was no default param and no args will be passed the answer wil be NaN because n1 and n2
//                           became undefinde and so on undefined + undefined = NaN.

}
add();


//  rest Operator :- jab Args kai saare ho to hame utne hi params bnane padege , in se bachne ke liye ham rest operator ka use krte hai. It is represented by " ... " .One main point jab ye dots function k param m use ho to usse rest operater bolte hai. 
function rest(...val) {
    
}
rest(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)

