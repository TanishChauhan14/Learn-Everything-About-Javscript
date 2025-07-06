// Q -1. Print 1-10 unsing for loop
 for(let i = 1; i <= 10 ; i++) {
   //  console.log(i);
    
 }

 // Q -2 Print 10 - 1 using while loop
 
 let i = 10
 while (i >= 1) {
   // console.log(i);
   i--;
 }

 //Q-3 Print even no. from 1 - 20 using for loop
 
 for(let i = 1 ; i <= 20 ; i++){
   if(i % 2 == 0) {
      // console.log(i);
   }
 }

  //Q-4 Print odd no. from 1 - 20 using while loop

  let i1 = 1
  while(i1 <= 20){
      if (i1 % 2 != 0) {
         // console.log(i1);
      }
      i1++;
  }

 //Q-5 Print table of 5
 
 for(let i = 1 ; i <= 10 ;i++){
   // console.log(`5 X ${i} = ${5*i}`);
   
 }

 //Q-6 Print the sum of of numbers 1 to 100

 let sum = 0 ; 
 for(let i = 0 ; i <= 100 ; i++){
   sum += i;
 }
//  console.log(sum);
 
//Q-7 Print all the number b/w 1 to 50 which is divisible by 3 .
 let i2 = 3
while(i2 <= 50){
   if (i2 % 3 == 0) {
      // console.log(i2);
      
   }
   i2++;
   
}

// Q -8 Ask the user a number and tell  from 1 to that number which was "odd" and which was  is "even"

// let num = prompt("Enter a number ")
function checknum(num) {
   for(let i = 1 ; i <= num; i++){
      if (i % 2 == 0) {
         console.log(`${i} is a even`);
      }else{
         console.log(`${i} is a odd`);
         
      }
   }
}
// checknum(num);

// Q-9 Count how many number are b/w 1 to 100 which is divisible by 3 and 5.
 let count = 0
for(let i = 1 ;i <= 100;i++){
   if (i % 3 == 0 && i % 5 == 0) {
     count++;
   }
}
// console.log(count);


// Q- 10  Count the numbers of digits in a number.

let number = 12345;
let n = number
let c = 0 ; 
while(number > 0){
   number = Math.floor(number / 10)
   c += 1;
}
console.log(`There are ${c} digit in the ${n}`);
