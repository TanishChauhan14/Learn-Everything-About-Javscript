// SetTimeOut :- it is a function that is used to execute a function after a specified number of milliseconds.

// Example of setTimeout 
// setTimeout(() => {
//     console.log("This message is displayed after 2 seconds");
// },2000)

//________________________________________________________________________________________________________________________________

// clearTimeout :- it is a function that is used to stop the execution of a function that was scheduled with setTimeout.

// let timeout = setTimeout(() => {
//     console.log("This message is displayed after 10 seconds");
// }, 10000);

// Prompt the user
// let n = prompt("Enter a number to clear the timeout:");

// Convert input to number
// n = Number(n);

// // Clear the timeout if the number is even
// if (n % 2 === 0) {
//     clearTimeout(timeout);
//     console.log("The timeout has been cleared");
// }




//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________


// SetInterval :- it is a function that is used to execute a function repeatedly at specified intervals of time.

// Example of setInterval
// setInterval(() => {
//     console.log("This message is displayed every 5 seconds");
// },5000)

//________________________________________________________________________________________________________________________________


// clearInterval :- it is a function that is used to stop the execution of a function that was scheduled with setInterval.

// let interval = setInterval(() => {
//     console.log("This message is displayed every 3 seconds");
// }, 3000);

// if (!(n % 2 !== 0)) {
//     clearInterval(interval);
//     console.log("The interval has been cleared");
    
// }



//________________________________________________________________________________________________________________________________
//________________________________________________________________________________________________________________________________

let downloadBtn = document.querySelector("#downloadBtn");

let progressText = document.querySelector("#progressText")

let progressBar =  document.querySelector(".progress-bar")



downloadBtn.addEventListener("click", () => {

    let count = 0;
    progressBar.style.width = "0%";
    progressText.textContent = "0%";

    setInterval(() => {
        if(count <= 99){
            count++;
            progressBar.style.width = `${count}%`;
            progressText.textContent = `${count}%`;
        }else{
         clearInterval(interval);
          
        }
    }, 1000 / 100)

})
