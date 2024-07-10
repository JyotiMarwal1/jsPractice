// Filtering and Mapping:

// Write a function getSquareOfEvenNumbers(arr) that takes an array of numbers,
//  filters out the odd numbers, and 
// returns a new array containing the squares of the remaining even numbers.

const findSquareOfEvenNumFromArr = (arr) => {
    return arr.filter((num) => num%2 === 0).map((evenNum) => evenNum*evenNum) 
}

let arr = [1,2,3,4,5,3,6,8,4]

console.log(findSquareOfEvenNumFromArr(arr))