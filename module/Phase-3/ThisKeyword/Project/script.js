let form  = document.querySelector("form");
let username = document.querySelector("#username");
let age = document.querySelector("#age");
let bio = document.querySelector("#bio");
let image = document.querySelector("#image");
let cardsContainer = document.querySelector("#cardsContainer");

let UserManager = {
    users:[],
    init : function (){
        form.addEventListener("submit", this.Submitform.bind(this))
    },
    Submitform : function (e){
        e.preventDefault(); 
        this.addusers(); 
    },
    addusers : function () {
        this.users.push({
            username : username.value,
            age : age.value,
            bio : bio.value,
            image : image.value
        })
        form.reset();
        this.renderUi()
    },
    renderUi : function() {
         cardsContainer.innerHTML = "";


        this.users.forEach((user,index) => {
        const card = document.createElement("div");
        card.className = "bg-gray-900 rounded-lg shadow-md overflow-hidden";

        const img = document.createElement("img");
        img.src = user.image;
        img.alt = "User Image";
        img.className = "w-full h-48 object-cover";

        const cardBody = document.createElement("div");
        cardBody.className = "p-4";

        const name = document.createElement("h3");
        name.className = "text-lg font-semibold";
        name.textContent = user.username;

        const userAge = document.createElement("p");
        userAge.className = "text-sm text-gray-400";
        userAge.textContent = `Age: ${user.age}`;

        const userBio = document.createElement("p");
        userBio.className = "mt-2 text-sm text-gray-300";
        userBio.textContent = user.bio;

        const removebtn = document.createElement("button");
        removebtn.className = "flex-none rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";
        removebtn.textContent = "Remove" ;

         removebtn.addEventListener("click", () => {
            this.removeelem(index);
        });

        cardBody.appendChild(name);
        cardBody.appendChild(userAge);
        cardBody.appendChild(userBio);
        cardBody.appendChild(removebtn);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardsContainer.appendChild(card);
        });   
    },
    removeelem : function (index) {
        this.users.splice(index, 1);
        this.renderUi();   
    }
}


UserManager.init();