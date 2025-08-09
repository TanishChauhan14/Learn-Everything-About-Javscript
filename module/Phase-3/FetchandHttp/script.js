async function cards() {

        let rawdata = (await fetch("https://randomuser.me/api/?results=20"));
        let result = await rawdata.json();
        let data  = result.results;
          
}

cards();