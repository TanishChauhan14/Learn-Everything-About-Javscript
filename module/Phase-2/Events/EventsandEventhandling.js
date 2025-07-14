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
// const h1 = document.querySelector('.h1');
// Add an event listener for the 'click' event
// console.log(h1);
 
// function click(){
//     h1.style.color = "red";
// }


// h1.addEventListener('click', click)

// // Example 2 :- Double click

// h1.addEventListener('dblclick',() =>{
//     h1.style.color = "yellow";
// })

// Example 3 :- Remove event listener 

// h1.removeEventListener('click', click)


// Example :- input

// let inp = document.querySelector("input")

// inp.addEventListener("input" ,(dets) =>{
//     if(dets.data !== " "){
//     console.log(dets);
//     }    
// })

// Example :- Change

// let Select = document.querySelector("select");

// Select.addEventListener("change",(dets)=>{
//     document.querySelector(".system").textContent = `Price range :- ${dets.target.value}`
    
// })

// Example :- Keydown:- When we press a key it works.

// window.addEventListener("keydown",(dets) => {

//     if (dets.key == ' ') {
//         document.querySelector(".keypress").textContent = "BackSpace"
//     }else{
//         document.querySelector(".keypress").textContent = `${dets.key}`
//     }
    
// })

// Example :- Change , click , click method().Creating a custom upload button.


// let inpfile = document.querySelector("#in-file");
// let inpbtn =  document.querySelector(".Upload");

// inpbtn.addEventListener("click",() => {
//     inpfile.click();
// })

// inpfile.addEventListener("change",(dets)=>{
//     let file = dets.target.files[0] 
//     if(file){
//     inpbtn.textContent =   file.name; 
//     }
// })

// Example :- Creating a card after just filling a form.

// let form = document.querySelector("form");

// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     let data = e.target;
//     let card = document.querySelector(".Card");
//     card.style.display = "block";
    
//     let img = document.querySelector(".cardimg");
//     let name = document.querySelector(".cardname");
//     let age = document.querySelector(".cardage");
//     let tech = document.querySelector(".cardtech");
//     let desp = document.querySelector(".carddep");

//     img.setAttribute("src",`${data[0].value}`)
//     name.textContent = data[1].value;
//     age.textContent = data[2].value;
//     tech.textContent = data[3].value;
//     desp.textContent = data[4].value;

// Add card everytime just use inner HTML in this write the whole html in this . 
// })

// Example  :-mouseover :- Jab ham kissi element p enter/hover ho . mouseout :- jab ham kissi element se mouse htaye 

// let mouse_div = document.querySelector(".mouse-effect");

// mouse_div.addEventListener("mouseover",() => {
//     mouse_div.style.backgroundColor = "red";
// })

// mouse_div.addEventListener("mouseout",() => {
//     mouse_div.style.backgroundColor = "aqua";
// })

// Example :- mousemove :-It return the mouse event or can be call even if you move the mouse.clientx and clienty shows the arraow axis on screen.

// window.addEventListener("mousemove",(dets) => {
    
//     mouse_div.style.top = dets.clientY + "px"
//     mouse_div.style.left = dets.clientX + "px"
    
// })

// _______________________________________________________________________________________________________________________________

// Event Object : target :- It is the one which the event happen like :- click,dblclick 
// type:- It tells which event had been done the element beacuse there can be many event on a single element ,
// preventDefault :- It prevent the nature of the form to referesh the page .

//_______________________________________________________________________________________________________________________________

// event bubbling : Jispe event aayega ya hoyega agar uske pass listener nhi hai to vo uske parent p move hojaaye ga fir vha listener dhudega wha bhi nhi mila tovo aone parent p agar last nhi hua kissi k passto kux nhi hoga .


// Ex :- In this you can see how if we click child it will also target the parent event listener and we only click parent it call it's parent if added.To stop means if we click child it don't call parent we can use ""stoppropogation()"" that's present in dets. 

// let bubblediv = document.querySelector(".Pevtbubble") // That's how it work

// bubblediv.addEventListener("click",()=>{ // We click this only write parent 
//     console.log("Parent");
    
// })

// let bubblebtn = document.querySelector(".evtbubble")

// bubblebtn.addEventListener("click",(dets)=>{ // We click this also call Parent with child 
// //    dets.stopPropagation(); // This don't let go to it's parent's listener.
//     console.log("child");
    
// })









//_______________________________________________________________________________________________________________________________
// Event Bubbling and Capturing Phase .
// ===============================
// 🌊 EVENT FLOW IN JAVASCRIPT
// ===============================

// ➤ Every DOM event goes through 3 phases:
//    1️⃣ Capturing Phase (from root to the target element)
//    2️⃣ Target Phase (event reaches the actual clicked element)
//    3️⃣ Bubbling Phase (event bubbles up from the target to the root)

// ➤ By default, JavaScript event listeners use the Bubbling Phase.


// =================================================
// 📦 HTML STRUCTURE (for reference):
// <body>
//   <div id="parent">
//     <button id="child">Click Me</button>
//   </div>
// </body>
// =================================================


// =================================================
// 🧪 EVENT LISTENERS IN BUBBLING PHASE (DEFAULT)
// =================================================

// ➤ This listener will trigger when the event bubbles UP to #parent
// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked - Bubble phase");
// });

// ➤ This listener will trigger when the button (#child) is clicked
// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked - Bubble phase");
// });

/*
🧾 OUTPUT when you click the button (#child):

Child clicked - Bubble phase
Parent clicked - Bubble phase

👉 Because the event first hits the target, then bubbles up to the parent.
*/


// =================================================
// 🧪 EVENT LISTENER IN CAPTURE PHASE
// =================================================

// ➤ This listener will be triggered during the capturing phase (TOP to TARGET)
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked - Capture phase");
//   },
//   true // 👈 This enables the CAPTURE phase
// );

/*
🧾 OUTPUT when you click the button (#child):

Parent clicked - Capture phase
Child clicked - Bubble phase

👉 Capturing phase listener on parent fires BEFORE bubbling phase on child.
*/


// =================================================
// ✋ STOPPING PROPAGATION
// =================================================

// ➤ This will stop the event from bubbling up to any parent
// document.getElementById("child").addEventListener("click", (e) => {
//   e.stopPropagation(); // 🛑 Stops bubbling phase
//   console.log("Child clicked - Bubbling stopped");
// });

/*
🧾 OUTPUT when you click the button:

Child clicked - Bubbling stopped

✅ Only the child logs, parent doesn’t.
*/


// =================================================
// ❌ STOP IMMEDIATE PROPAGATION
// =================================================

// ➤ Prevents any more listeners on the SAME element from firing
// document.getElementById("child").addEventListener("click", (e) => {
//   e.stopImmediatePropagation(); // 🛑 Stops even other listeners on child
//   console.log("Child clicked - Only this listener will run");
// });

// // ➤ This won't run if stopImmediatePropagation() is called above
// document.getElementById("child").addEventListener("click", () => {
//   console.log("This won't run if immediate propagation is stopped");
// });


// =================================================
// 📋 SUMMARY TABLE
// =================================================

/*
| Phase       | Direction      | Default in JS | Use Case               |
|-------------|----------------|---------------|-------------------------|
| Capturing   | Top ➝ Target   | ❌ No          | Rare, e.g., intercepting |
| Target      | Actual Element | -             | Both capturing & bubbling fire |
| Bubbling    | Target ➝ Top   | ✅ Yes         | Event delegation, common |

✔ Bubbling is commonly used.
✔ Use capturing if you want to catch before the target is reached.
✔ Use stopPropagation() to block parent handlers.
✔ Use stopImmediatePropagation() to block all listeners on the same node.
*/


// =================================================
// ✅ TIPS:
// =================================================

/*
- Use bubbling (default) for most UI logic.
- Add one event listener to a container instead of many (event delegation).
- Always clean up or stop propagation when needed to avoid unexpected behavior.
- You can pass { capture: false } explicitly, but it’s false by default.
*/









//__________________________________________________________________________________________________________________________________


// Questions :- 

// 1. live character counting.

let inpchar = document.querySelector(".live-charinp")

let showchar = document.querySelector(".live-charshow")



inpchar.addEventListener("input",()=>{
   
   showchar.textContent = inpchar.value.length;
})
