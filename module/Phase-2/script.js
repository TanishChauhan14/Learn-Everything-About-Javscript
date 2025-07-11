// DOM :- Document Object Model.It is use to manipulate the HTML elements in the web page.
// Node :- it is a single point in the DOM tree. It can be an element, text, comment, etc.
// For example, the <div> tag is a node, the text inside the <div> tag is also a node, and the comment inside the <div> tag is also a node.
// Important topics in DOM :-
// 1. Html se elements ko select karna.
// 2. Text ko change karna.
// 3. html badlna.
// 4. css ko change karna.
// 5. attribute ko change karna.
// 6. event ko handle karna.
//______________________________________________________________________________________________________________________________

// Selection the Elements(Html se elements ko select karna) .

// 1. Use getElementById().

let element = document.getElementById("Hey");
// console.log(element); // It will return the element with id "Hey".
// console.dir(element); // It will return the element with id "Hey" in a more readable format.

// 2. Use getElementsByClassName().

let elements = document.getElementsByClassName("hey");
// console.log(elements); // It will return a collection of elements with class "hey".
// console.dir(elements); // It will return a collection of elements with class "hey" in a more readable format.

// Query Selector :- querySelector() is a JavaScript method used to select the first element in the DOM that matches a CSS-style selector (like an ID, class, or tag). It allows precise access to HTML elements for manipulation or reading content..It returns the first matching node in the document.
let element1 = document.querySelector("h1");
// console.log(element1); // It will return the first <h1> element in the document.
let element2 = document.querySelector("#Hey");
// console.log(element2); // It will return the element with id "Hey".
let element3 = document.querySelector(".hey");
// console.log(element3); // It will return the first element with class "hey".


// Query Selector All :- querySelectorAll() is a JavaScript method used to select all elements in the DOM that match a CSS-style selector. It returns a static NodeList of all matching elements, allowing for manipulation or reading content of multiple elements at once.

let elements4 = document.querySelectorAll("h1");
// console.log(elements4); // It will return a NodeList of all <h1> elements in the document.

let elements5 = document.querySelectorAll(".hey");
// console.log(elements5); // It will return a NodeList of all elements with class"hey".


//________________________________________________________________________________________________________________________________

// Text/content access and change karna :- innerText, textContent, and innerHTML are properties used to access or modify the text or HTML content of an element in the DOM.(and want more just acess the text in console.log you see the key-value pair of the element and acess them as object and change them as you want to change).

//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________


// Difference between innerText, innerHTML, and textContent:-

// Property	     Description	                                 Includes Hidden Text?	                       Includes HTML Tags?
// innerText	 Returns visible text 	                         ❌ No (ignores hidden)	                          ❌ No
//              (renders based on CSS like display: none)
//________________________________________________________________________________________________________________________________


// textContent	 Returns all text                           	  ✅ Yes	                                          ❌ No
//               (including hidden or non-visible elements)

//________________________________________________________________________________________________________________________________

// innerHTML	Returns or sets the HTML                       	  ✅ Yes	                                          ✅ Yes
//              content inside an element (including tags)                                                 isme html tag lgta hai

//________________________________________________________________________________________________________________________________

let naame = document.querySelector(".naame")
// console.dir(naame); // It returns the Nordlist we can acess it's elements as object and change them as we want to change.

naame.innerText = "Tanishka";

//______________________________________________________________________________________________________________________________

// Attribute manipulation

// 1. SetAttribute :- 

let a = document.querySelector("a");
// adding attribute value we can setattribute.
// way-1 
// a.href = "https://www.google.com"

// way : 2 :- Here where the set attribute came in work

a.setAttribute("href","https://www.google.com")

// 2. GetAttribute :- It is used to get the value of any tag's attribute.

let a1 = document.querySelector(".anchor")
// console.log(a1.getAttribute("href"));


// 3. RemoveAttribute :- It is use to remove any attribute.

a1.removeAttribute("href")

//________________________________________________________________________________________________________________________________

// Dynamic DOM Manipulation.

// create element 
// Append/prepend :- element ko HTML m daalo jaha chahiye body ke jsut baad append saare element k last m prepend.

let h4 = document.createElement("h4");
h4.textContent = "Hey Bro what's up!";
document.body.append(h4); // append
document.body.prepend(h4); // Prepend

// Removing Child

element1.remove();

//________________________________________________________________________________________________________________________

// Manipulating CSS using js.

h4.style.color ="Red";
h4.style.backgroundColor="Brown"
h4.style.textTransform="Capitalize"

// Add class :-  It can use to Handle css properties.just make a css class add using js.
//way : 1
h4.classList.add(".hh")
// way : 2
h4.classList.value = "hh"

// To remove class
h4.classList.remove("hh")


// Toggle : - it is used agar class lgi hai to hta dega or nhi hogi to lga dega .
h4.classList.toggle("hh")

console.log(h4);

// Questions :- 

// 1. Select a paragraph and replace its content with :- <b>Updated</b> by Javascript

let paragraph = document.querySelector("p");

paragraph.innerHTML="<b>Updated</b> by Javascript";

// 2. How to get src from an image.

let image = document.querySelector("img")
console.log(image.getAttribute("src"));


// 3. Select a link and update it's href.

let anchor = document.querySelector(".anchor");
anchor.setAttribute("href","https://github.com/TanishChauhan14/Learn-Everything-About-Javscript")

// 4. Create a new image element with a placeholder source add it top of the div.

let div1 = document.querySelector(".img")

let img = document.createElement("img");
img.setAttribute("alt","source");
// img.setAttribute("",);
div1.append(img)

// 5. Select the first item from list and remove it.

// document.querySelector("ul").removeChild(document.querySelector("li"));


// 6. How to change background color of an element

// document.querySelector("ul").style.backgroundColor = "Brown"

// 7. Highlight every even item from list.

let li = document.querySelectorAll("ul li:nth-child(2n)")
console.log(li);

li.forEach((val) => {
    val.style.backgroundColor = "blue"
})


