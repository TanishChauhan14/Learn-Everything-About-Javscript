// array :- It is a collection of items stored at contiguous memory locations.

// Create :-
let arr = [1, 2, 3, 4, 5];

// Accessing elements
arr[0]; // 1

// Modifying elements
arr[1] = 10; // arr is now [1, 10, 3, 4, 5]

// Arrays Methods
// 1. push() - Adds one or more elements to the end of an array and returns the new length of the array.
arr.push(6); // arr is now [1, 10, 3, 4, 5, 6]

// 2. pop() - Removes the last element from an array and returns that element.
arr.pop(); // arr is now [1, 10, 3, 4, 5]

// 3. shift() - Removes the first element from an array and returns that element.
arr.shift(); // arr is now [10, 3, 4, 5]

// 4. unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(0); // arr is now [0, 10, 3, 4, 5]

// 5. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
arr.splice(1, 2, 20, 30); // arr is now [0, 20, 30, 4, 5]

// 6. slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
let newArr = arr.slice(1,3); // newArr is now [20, 30] 

// 7. reverse() - Reverses the elements of an array in place.
arr.reverse(); // arr is now [5, 4, 30, 20, 0]

// 8. sort() - Sorts the elements of an array in place and returns the sorted array.
arr.sort(function(a,b){
    return a - b; // Sorts in ascending order
    return b - a; // Sorts in descending order
})


// For each :- High-level function that executes a provided function once for each array element.

let a = [1, 2, 3, 4, 5];

a.forEach((val) => {
//    console.log(val); // Prints each element in the array
    
})


// Map() :- Map also executes a provided function once for each array element, Map tabhi use krna hai jab aapko ak naya array chahiye ho jo pichle wale array ke data ke basis par ho.

// Map dikhte hi samjho ki ak null array banegi jiska size starting m null fir purane wale array ke size ke barabar hoga and we have to return the value for each element in the new array.

// Return is compulsory in map, agar return nahi karoge to undefined return hoga.
 
// Jab bhi aapko lage ki aapko ak naya array chahiye jo pichle wale array ke data ke basis par ho and usme kux value aaye gi tab aap map use karte ho.

// Example : 1
let b = [1, 2, 3, 4, 5];

let c = b.map(() => {
    return 10; // Returns a new array [10, 10, 10, 10, 10]
})


// Example : 2

let d = c.map((val)=> {
    return val + Math.floor(Math.random() * 10); // Returns a new array with random values added to each element of c
})

// Filter() :- Filter bhi high-level function hai, lekin filter tab use karte ho jab aapko ak naya array chahiye jo pichle wale array ke data ke basis par ho and usme kuch condition satisfy karte ho.

// Filter m ham true ya false return karte hai,ye ham chahe to condition ke basis par kre ya direct true ya false return kre.True mtlb wo element naya array m add hoga and false mtlb wo element naya array m nahi aayega.

// Example : 1
let e = [1, 2, 3, 4, 5];
let f = e.filter(function(val){
   let result =  val % 2 == 0 ? true : false; // Returns a new array [2, 4] containing only even numbers
   return result; // Returns true for even numbers, false for odd numbers
})

f.forEach((val)=> {
    console.log(val); // Prints each element in the filtered array
    
})


// reduce() :- Reduce bhi high-level function hai, lekin reduce tab use karte ho jab aapko ak single value chahiye jo pichle wale array ke data ke basis par ho.Mtlb pure array ko ak single value m convert kr skte hai. Add karke, multiply karke, ya kuch bhi karke.

// Accumulator :- Rduce m ak accumulator hota hai jo starting m kux bhi ho skta ham define karte mostly starting m 0 ya 1 hota hai, and vo apni value ko iteration ke baad bhi apni value ko hold krta hai and update krta hai.

// Example : 1
let g = [1, 2, 3, 4, 5];

 let h = g.reduce((accumulator, currentValue) => {

    return accumulator * currentValue; // Multiplies all elements in the array, starting with the initial value of the accumulator 

},1); // The second argument is the initial value of the accumulator, here it is 0

// console.log(h);

// find() :- Find bhi  High level  function hai , jo  hab tab use karte hai jab hame koi value krni hai jese "return value > 2" and it's only return first value ehich satify the finding condition, agar koi value nahi milti to undefined return hota hai.

let i = [{id:1, name:"A"}, {id:2, name:"B"}, {id:3, name:"C"}];

let j = i.find((val) => {
    return val.id == 2; // Returns the first object where id is 2, which is {id: 2, name: "B"}
})

// console.log(j);


// same() :- Some bhi High level function hai,ye tab use karte hai jab hame check karna hai ki kya array m koi element hai jo condition ko satisfy karta hai ya nahi, agar koi element milta hai to true return hota hai otherwise false.
// For example, hame dekhta ki class m hai jiske marks 80  se zyada hai agar hai to true return hota hai otherwise false.

let k = [10, 20, 30, 40, 90];

let l =  k.some((val) => {
    return val > 80; // Returns true if any element is greater than 80, otherwise false
})
// console.log(l); // true

// every() :- Every bhi High level function hai,ye check karta hai ki array ka har element condition ko satify kr rha hai ya nhi.
// Agar sabhi element condition ko satisfy krte hai to true return hota hai otherwise false.
// For example, hame dekhna hai atleast sabhi bache class ke pass hai ya nhi.

let m = [32.5,56,89,66,52]

let n = m.every((val) => {
    return val > 33; // Returns true if every element is greater than 33, otherwise false
})

// console.log(n); // False

// fill() :- array ke har element ko ek hi value se bhar deta hai.ye existing array ko mutate karta hai (original array badal jata hai)
// suntax :- array.fill(value, start, end)
// value	:- Jo value har element me daalni hai
// start (optional) :-	Kis index se start karna hai (default: 0)
// end (optional) :-	Kis index tak bharna hai (default: array.length)
// Kab use karte hain fill()?
// 1.Dummy/test data banana ho
// 2.Array reset karna ho
// 3.Initial value bharni ho kisi size ke array me

// Example : 1
let arr = [1, 2, 3, 4];
arr.fill(0);  // Poore array ko 0 se bharde
// console.log(arr); // [0, 0, 0, 0]

// Example : 2
let arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 4);  // index 1 se lekar 4 se pehle tak 9 bharega
// console.log(arr); // [1, 9, 9, 9, 5]

// Example : 3
let arr = new Array(5).fill(1);  
// console.log(arr); // [1, 1, 1, 1, 1]


// join() :- Array ke elements ko ek string me join karta hai, jisme elements ke beech me separator daal sakte hain.
// Syntax :- array.join(separator)
// separator (optional) :- Jo string elements ke beech me daalni hai (default: ',')
// Kab use karte hain join()?
// 1.Array ke elements ko ek string me convert karna ho
// 2.Array ko readable format me dikhana ho

// Example : 1
let arr = ['apple', 'banana', 'cherry'];
let str = arr.join(', ');  // Elements ko ', ' se join karega
// console.log(str); // "apple, banana, cherry"

//________________________________________________________________________________________________________________________________

// Destructuring Arrays :-
// Destructuring se array ke elements ko alag-alag variables me assign kar sakte hain.
// Syntax :- let [var1, var2, ...] = array;
// Kab use karte hain destructuring?
// 1.Array ke elements ko alag variables me assign karna ho
// 2.Readable aur concise code likhna ho

// Example : 1
let arr = [1, 2, 3,4,5];
let [o,p ,,q] = arr; // o = 1, p = 2, q = 4 (3rd element skip ho gaya)
// console.log(o, p, q); // 1 2 4

// spread operator :-Array ak reference type hota hai mtlb agar ham ak array ko dusre array m assign karte hai to dono array ak memory m assign hote hai isiliye ham isse continuous memory m save hone vaale kahte hai. But agar ham ak naya aaray chahte hai jo different memory m ho to or vo pichle vaale se koi rista na rakhe to ham spread operator use karte hai.
// Function m isse ham rest params operater kahte hai or yha ham isse spread params kahte hai."..."

// Example : 1
let r = [1,2,3,4,5,6,7,8,9]
let s = [...r]; // abb r ke elements s m spread ho gye means s m copy hogye gaye with apni ak alag identity le sath. so abb agar ham s m koi change karenge or r m koi change karenge to dusre m koi change nahi hoga.
s.pop(); // s is now [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(r); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//_______________________________________________________________________________________________________________________________
//_______________________________________________________________________________________________________________________________

// Questions :- 

// 1. Create an array with three fruits  and print the second fruit .
 
