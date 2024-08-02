let arr = [{ id: 1, age: 10 }, { id: 2, age: 20 }, { id: 3, age: 15 }]

// Assending order
// const sortArrayOfObj = (arr) => {
//     return arr.sort((a, b) => a.age - b.age)
// }


// console.log(sortArrayOfObj(arr))

// Descending order 
const sortArrayOfObjDescending = (arr) => {
    return arr.sort((a, b) => b.age - a.age)
}

console.log(sortArrayOfObjDescending(arr))

// Sorting an Array of Strings
// Alphabetical Order:

 
let strings = ['banana', 'apple', 'cherry', 'date'];
strings.sort();
console.log(strings); // Output: ['apple', 'banana', 'cherry', 'date']
// Reverse Alphabetical Order:


strings.sort().reverse();
console.log(strings); // Output: ['date', 'cherry', 'banana', 'apple']