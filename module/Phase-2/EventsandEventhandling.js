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

// Example :- Change , click , click method().Creating a custom upload button.


let inpfile = document.querySelector("#in-file");
let inpbtn =  document.querySelector(".Upload");

inpbtn.addEventListener("click",() => {
    inpfile.click();
})

inpfile.addEventListener("change",(dets)=>{
    let file = dets.target.files[0] 
    if(file){
    inpbtn.textContent =   file.name; 
    }
})

// Example :- Creating a card after just filling a form.

let form = document.querySelector("form");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    let data = e.target;
    let card = document.querySelector(".Card");
    card.style.display = "block";
    
    let img = document.querySelector(".cardimg");
    let name = document.querySelector(".cardname");
    let age = document.querySelector(".cardage");
    let tech = document.querySelector(".cardtech");
    let desp = document.querySelector(".carddep");

    img.setAttribute("src",`${data[0].value}`)
    name.textContent = data[1].value;
    age.textContent = data[2].value;
    tech.textContent = data[3].value;
    desp.textContent = data[4].value;

// Add card everytime just use inner HTML in this write the whole html in this . 
})

