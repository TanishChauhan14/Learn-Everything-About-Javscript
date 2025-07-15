const users = [
    {
        name: "Lucia Potter",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        about: "Front-end developer with a passion for clean design and interactive UI."
    },
    {
        name: "Nathan Carter",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        about: "Full-stack engineer who enjoys solving backend performance issues."
    },
    {
        name: "Sophie Walker",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        about: "UI/UX designer with a love for minimal and accessible interfaces."
    },
    {
        name: "Aiden Brooks",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        about: "Software engineer focusing on scalable microservices in cloud platforms."
    },
    {
        name: "Isla Reynolds",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        about: "Digital artist and front-end coder blending creativity with logic."
    },
    {
        name: "Ethan James",
        image: "https://randomuser.me/api/portraits/men/27.jpg",
        about: "React developer with experience in real-time dashboards and web sockets."
    },
    {
        name: "Maya Patel",
        image: "https://randomuser.me/api/portraits/women/39.jpg",
        about: "Python backend developer interested in machine learning and APIs."
    },
    {
        name: "Liam Nguyen",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        about: "Mobile app developer working on Android and cross-platform solutions."
    },
    {
        name: "Zara Khan",
        image: "https://randomuser.me/api/portraits/women/20.jpg",
        about: "QA engineer ensuring products meet quality and reliability standards."
    },
    {
        name: "Noah Silva",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        about: "Game developer building immersive browser games with WebGL."
    }
];

search(" ");

function search(value) {
    const cardContainer = document.getElementById("cardContainer");

    if (value.trim() === "") {
        cardContainer.innerHTML = users.map((user) => {
            return `
                <div class="card">
                    <img src="${user.image}" alt="${user.name}" />
                    <h2 class="name">${user.name}</h2>
                    <p class="about">${user.about}</p>
                </div>
            `;
        }).join(''); 
    } else {
       
        let filtered = users.filter((user) => { 
           return user.name.toLowerCase().includes(value.toLowerCase())
    })


         cardContainer.innerHTML = filtered.map((user) => {
            return `
            <div class="card">
                    <img src="${user.image}" alt="${user.name}" />
                    <h2 class="name">${user.name}</h2>
                    <p class="about">${user.about}</p>
            </div>`;
         }).join('');
    }
}

let searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("input", (dets) => {
    console.log(dets.target.value);
    search(dets.target.value);
});
