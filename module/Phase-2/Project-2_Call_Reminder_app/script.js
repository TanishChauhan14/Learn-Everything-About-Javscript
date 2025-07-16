let addnote = document.querySelector("#add-note")
let formcontainer = document.querySelector(".form-container")
let closeFormbtn = document.querySelector(".closeForm")
let form = document.querySelector("form");
let profile = document.querySelector(".image");
let name = document.querySelector(".name")
let home = document.querySelector(".home-town")
let purpose = document.querySelector(".Purpose")
const categoryInputs = document.querySelectorAll('input[name="category"]');
let submit = document.querySelector(".submit-btn")
let stack = document.querySelector(".stack")
let upBtn = document.querySelector("#upBtn")
let downBtn = document.querySelector("#downBtn")

addnote.addEventListener("click",() => {
    formcontainer.style.display = "initial"
})

closeFormbtn.addEventListener("click",() => {
    formcontainer.style.display = "none"
})


// Function to store data in localstorage.
function storedata(obj) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  if (tasks == null) {
    tasks = []; // Agr null hai to samjh ja pheli baar data ja rha hai tooo fir ak array khud bnade .
  }

  tasks.push(obj); // Fir isme data push krde chahe null h ya nhi .

  localStorage.setItem("tasks", JSON.stringify(tasks)); // local storage m daal de fir.
  Showcards();
}


// Show cards
function Showcards() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const container = document.querySelector(".stack");
  container.innerHTML = ""; // Clear previous cards

  tasks.forEach(task => {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.imagedata;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.namedata;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town: ";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.hometowndata;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Purpose
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose: ";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.puposedata;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Info: Category
    const categoryInfo = document.createElement("div");
    categoryInfo.classList.add("info");

    const categoryLabel = document.createElement("span");
    categoryLabel.textContent = "Category: ";
    const categoryValue = document.createElement("span");
    categoryValue.textContent = task.categorydata;

    categoryInfo.appendChild(categoryLabel);
    categoryInfo.appendChild(categoryValue);
    card.appendChild(categoryInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);
    card.appendChild(buttonsDiv);

    // Append card to container
    container.appendChild(card);
  });
}
Showcards();




form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  const imageUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
  const nameRegex = /^[A-Za-z\s'-]{2,30}$/;
  const hometownRegex = /^[A-Za-z\s-]{2,40}$/;

  if (profile.value.trim() === "" || !imageUrlRegex.test(profile.value.trim())) {
    alert("Image URL is invalid");
    return;
  }

  if (name.value.trim() === "" || !nameRegex.test(name.value.trim())) {
    alert("Name is invalid");
    return;
  }

  if (home.value.trim() === "" || !hometownRegex.test(home.value.trim())) {
    alert("Home Town is invalid");
    return;
  }

  if (purpose.value.trim() === "") {
    alert("Purpose must not be empty");
    return;
  }

let check = false;
let categorydata;
 categoryInputs.forEach((inp) => {
  if (inp.checked) {
    check = true;
  //  console.log("Selected Category:", inp.value);
  categorydata = inp.value;
  }
});

if (!check) {
  alert("Please select a category");
  return;
}
 let imagedata = profile.value.trim()
 let namedata = name.value.trim()
 let hometowndata = home.value.trim()
 let puposedata = purpose.value.trim()

    let obj = {
       imagedata,
        namedata,
        hometowndata,
        puposedata,
        categorydata
    }

    console.log("Form is valid, proceed to submit...");
    storedata(obj)
    form.reset();
    closeFormbtn.click()
    Showcards();
    
 
});


// Next Button and back button.

upBtn.addEventListener("click",() => {
//    console.dir(stack.lastChild);
//    console.dir(stack.firstChild)

    let lastChild = stack.lastChild;

    if(lastChild){
        stack.insertBefore(lastChild,stack.firstChild)
    }

})

downBtn.addEventListener("click",() => {
    let firstChild = stack.firstChild;

    if(firstChild){
        stack.append(firstChild)
    }
})

