// let form = document.querySelector(".form1")

// let  inpname = document.querySelector(".name")

// form.addEventListener("submit",(dets) =>{
//     dets.preventDefault1()

//     if(inpname.value.length <= length){
//             let errname = document.querySelector("ername")
//             errname.style.display = "initial"
//         }else{
            
//             let errname = document.querySelector("ername")
//             errname.style.display = "none"   
//         }
// })

//_______________________________________________________________________________________________________________________________


// // Using regex

// // The use of regular expressions (regex)
// Regular expressions (regex) are a powerful tool used in programming and text processing to define search patterns for matching, searching, and manipulating text strings. 
// Here are some key applications and uses of regex:
// 1. Searching and replacing text
// Regex can be used to find and replace specific patterns within a larger body of text.
// For example, you could use a regex to find all instances of a misspelled word and replace them with the correct spelling.
// It's useful for automating tasks like updating information in multiple documents or reformatting text. 
// 2. Data validation
// Regex is commonly used to validate user input in web forms, ensuring that the data entered meets specific criteria.
// For example, it can be used to validate email addresses, phone numbers, passwords, and other data formats that follow a specific pattern. 
// 3. Data extraction and parsing
// Regex allows for the efficient extraction of specific pieces of information from unstructured text, such as URLs, phone numbers, or email addresses.
// It's particularly useful in web scraping or log analysis to extract relevant data from complex structures like HTML, XML, or log files. 
// 4. Text manipulation
// Regex can be used to manipulate text in various ways, such as cleaning up messy data, removing irrelevant characters or formatting, and transforming text based on patterns.
// For example, you can use regex to remove special characters from a dataset or to standardize date formats. 
// 5. Log analysis
// System administrators and developers use regex to analyze and extract meaningful information from log files.
// It can be used to identify error messages, track specific events, or extract IP addresses and other relevant information from logs. 
// In essence, regex allows you to define flexible and precise patterns to work with text data efficiently and effectively. It is supported in various programming languages like Python, Java, JavaScript, and Perl, as well as in text editors and command-line tools. Mastering regex can significantly improve your productivity and enable you to tackle a wide range of text processing challenges. 

// form.addEventListener("submit",() => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   console.log(emailRegex.test("t@g.com"));

// })


// ___________________________________________________________________________________________________________________________

let validatorForm = document.querySelector("#validatorForm")

let email = document.querySelector("#email")
let pass = document.querySelector("#password")
let passwordError = document.querySelector("#passwordError");
let emailError = document.querySelector("#emailError");




validatorForm.addEventListener("submit",(dets) =>{

    dets.preventDefault();

    passwordError.textContent = "";
    emailError.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    if(!emailRegex.test(email.value)){

        emailError.style.display = "initial"
        emailError.textContent = "Email Is Invalid !"
    }

    if(!passwordRegex.test(pass.value)){
 
        passwordError.style.display = "initial"
        passwordError.textContent = "Password Is Invalid !"        
    }

    if (passwordRegex.test(pass.value) && emailRegex.test(email.value) ) {

        let formMessage = document.querySelector("#formMessage")
        formMessage.style.display = "initial";
    }

})