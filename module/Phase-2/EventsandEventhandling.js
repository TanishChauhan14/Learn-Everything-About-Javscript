// Event :-JavaScript Event ka matlab hota hai — browser mein koi bhi action ya ghatna (घटना) hona, jaise ki: :- 
// Button click karna ,Keyboard se key press karna ,Mouse se kisi element ke upar le jana ,Form submit karna ,Page ka load hona.

// Event handling/listener :- Idka mtlb hai action ya event ka reaction dena .

// Step to do :- 
// 1. Select the element on which you want to add the event listener.
// 2. Add an event listener to that element using the `addEventListener` method.
// 3. Define the function that will be executed when the event occurs.
// 4. Optionally, you can remove the event listener using the `removeEventListener` method.

// Syntax :- 
// element.addEvenListener("event name" =>{
        // Code----------- 
// })


// Example 1 :- Click
// Select the button element
const h1 = document.querySelector('.h1');
// Add an event listener for the 'click' event
console.log(h1);
 
function click(){
    h1.style.color = "red";
}


h1.addEventListener('click', click)

// Example 2 :- Double click

h1.addEventListener('dblclick',() =>{
    h1.style.color = "yellow";
})

// Example 3 :- Remove event listener 

h1.removeEventListener('click', click)


// Example :- input

let inp = document.querySelector("input")

inp.addEventListener("input" ,(dets) =>{
    if(dets.data !== " "){
    console.log(dets);
    }    
})

// Example :- Change

let Select = document.querySelector("select");

Select.addEventListener("change",(dets)=>{
    document.querySelector(".system").textContent = `Price range :- ${dets.target.value}`
    
})

// Example :- Keydown:- When we press a key it works.

window.addEventListener("keydown",(dets) => {

    if (dets.key == ' ') {
        document.querySelector(".keypress").textContent = "BackSpace"
    }else{
        document.querySelector(".keypress").textContent = `${dets.key}`
    }
    
})