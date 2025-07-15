// // localStorage :- Apke broswer m data store karna jo ki browser bnd hone p bhi delete nhi hota hai .Ye sirf string save krta hai .


// // How to store 

// localStorage.setItem("name","Tanish");

// // fetch kese kare

// localStorage.getItem("name");

// // remove kese kare

// localStorage.removeItem("name")

// // Update kese kare 

// localStorage.setItem("name","Tanishka") // It is also used for updating the data.



// //________________________________________________________________________________________________________________________________

// // JSON.stringify :- It is use to convert anything into string like :- [1,2,3,4,5] => '[1,2,3,4,5]'. it is used in local storage because in localstorage only string can be saved or stored.

// localStorage.setItem(JSON.stringify("friends",["tanish","tannu","Tanishka"]))

// //_______________________________________________________________________________________________________________________________

// // JSON.parse :-  It is use because when we fetch data from localstorage it give data in string to convert it back to to it's original datatype we use JSON.parse.

// JSON.parse("THE DATA WHICH WE WANTED TO PARSE")

// // Example : 

// JSON.parse(localStorage.getItem("friends"))



// //________________________________________________________________________________________________________________________________
// // Sessionstorage :- ye apka data temporarily store karta hai jo ki tab off hote hi chala jata hai .Iska aur localstoreage ke function same tarah work krte hai like :- getitems,setitems etc...


// //__________________________________________________________________________________________________________________________________
// // cookies :- ye bhi data store krta hai . Ye apke browser ke cookies naam ki property m store m krta hai and iska concept light weight data ko store krna ke liye hai.

// // save cokkie

// document.cookie = "email = tanish@gmail.com"
 


