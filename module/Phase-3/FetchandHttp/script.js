

async function cards() {
        

        let rawdata = (await fetch("https://randomuser.me/api/?results=5"));
        let result = await rawdata.json();
        let data  = result.results;
        
        const container = document.getElementById("cardContainer");
        container.innerHTML = "";
        data.forEach(user => {
        // Create card div
          const card = document.createElement("div");
          card.className =
            "group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md shadow-xl p-6 flex flex-col items-center text-center transition hover:scale-[1.02] hover:shadow-2xl duration-300";

          // Glow div
          const glow = document.createElement("div");
          glow.setAttribute("aria-hidden", "true");
          glow.className =
            "absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500";
          card.appendChild(glow);

          // Image
          const img = document.createElement("img");
          img.src = user.picture.large;
          img.alt = `${user.name.first} ${user.name.last}`;
          img.className =
            "relative z-10 w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-lg transition duration-300 group-hover:scale-105";
          card.appendChild(img);

          // Name
          const name = document.createElement("h2");
          name.className =
            "relative z-10 mt-4 text-lg font-semibold tracking-wide text-white group-hover:text-teal-300 transition";
          name.textContent = `${user.name.first} ${user.name.last}`;
          card.appendChild(name);

          // Age
          const age = document.createElement("p");
          age.className = "relative z-10 text-slate-300 text-sm mt-1";
          age.textContent = `Age: ${user.dob.age}`;
          card.appendChild(age);

          // Gender
          const gender = document.createElement("p");
          gender.className =
            "relative z-10 text-slate-300 text-sm capitalize";
          gender.textContent = `Gender: ${user.gender}`;
          card.appendChild(gender);

          // Decorative line
          const line = document.createElement("div");
          line.className =
            "relative z-10 mt-4 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full";
          card.appendChild(line);

          // Append card to container
          container.appendChild(card);

        });
          
}

cards();

document.querySelector("#refresh").addEventListener("click",() => {
       
        cards();
})