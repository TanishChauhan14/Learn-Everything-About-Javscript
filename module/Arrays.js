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


