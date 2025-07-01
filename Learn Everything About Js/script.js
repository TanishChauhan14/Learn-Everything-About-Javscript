// Var Let Const
// Declaration and Initialization

let a ; // Declare karna
a= 15; // Initialization
var x = 12; // Declare and Initialization

// Var  :- 1. Window mein add hota hai. 2.Function scoped hota hai.  3.Redeclare kr skte hai. 4.Block scoped nahi hota.
// Let :- 1. Reclare nahi kr skte. 2.Block scoped hota hai. 3.Window mein add nahi hota.
// Const :- 1. Reassign nahi kr skte. 2.Block scoped hota hai. 3.Window mein add nahi hota.



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


// Redeclaration and Reassignment.
 var redeclareVar = "I can be redeclared";
 var redeclareVar = "I can be redeclared again"; // Redeclaration is allowed with var

 
 let noRedeclareLet = "I cannot be redeclared";
    // let noRedeclareLet = "I cannot be
    noRedeclareLet = "I can be reassigned"; // Reassignment is allowed with let