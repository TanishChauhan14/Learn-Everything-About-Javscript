// In JS koi bhbi code line by line chalta hai and also this is the natural behaviour of it ,but in some cases we can say kissi line of code ko wait karna pdta hai or usse next code phle chal jata hai .

// Synchrones :-  Jo code line by line chale .
// Asynchrones :- Jo code wait kre uss time next code chal jaaye .

// Example 

console.log("hey1");
console.log("hey2");
setTimeout(() => {
    console.log("hey3");
}, 3000)
console.log("hey4");



// Callback :-  Ak function ko dusre function m as a parameter pass karna .To paarameter vala function usse callback khte hai.Current time it is not used just a example where we fetch insta id and then posts and then saved posts. 


function profilefetch(id,callback) {
    console.log("Fetching Profile");
    setTimeout(() => {
        callback({id : id, name:"Tanish"})
    },2000)
}

function postsfetch(name,callback) {
    console.log("Fetching Posts");
    setTimeout(() => {
        callback({id: 12 , post : ["Hey","Hello","boooo"]})
    }, 3000);
}

function savepostsfetch(id,callback) {
    console.log("Fetching saved posts");
    setTimeout(() => {
        callback({saveposts :[1,2,34,5,6,7]})
    }, 4000);
}


profilefetch(12,function(Profile){
    console.log(Profile)
    postsfetch(Profile.name,function(posts) {
        console.log(posts);
        savepostsfetch(posts.id,function(saved) {
            console.log(saved);
        })
    })
});


// _____________________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________________

// Promises :- Ham kabhi bhi koi request bhejte hai jha pr hame confirm nhi hai ki co success hogi ya fail to hame samne se Promise diya jata hai jo Resolve ho jaata hai agar succes hojaaye hamari request ya fir Reject ho jata hai agar fail hojaaye hamari request . Isse ham  api pr reuqest karte time use karte hai. Example not needed because i have done this before or i will do it with Async/Await  

// .then() isme vo code likhte hai jab Promise Resolve hojaaye.
// .catch() isme vo code likhte hai jab Promise Reject hojaaye. 

// Example :

let pr = new Promise(function (Resolve,Reject) {
    let rs =  Math.floor(Math.random() * 10)
    setTimeout(() =>{
        if(rs > 5){
            Resolve("Resolve "+rs);
        }else{
            Reject("Reject"+rs);
        }
    })
})

pr.then((val) => {
    console.log(val);
        
}).catch((val) => {
    console.log(val);
 
})

// _____________________________________________________________________________________________________________________________
// _____________________________________________________________________________________________________________________________

// Async/Await :-  Isse ham request karte hai or jo bhi promise aaye chahe Resolve aur Reject ham usse handle karte hai 
// async  ye function ke aage lagta hai "aync function()...." isse ham await ka use kr paate hai "await fetch ("url...")".
// In try we write await code and in catch we write err or rejected Promise response. 