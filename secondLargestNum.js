// By logically

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null; // Not enough elements
//     }

//     let first = -Infinity, second = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i];
//         }
//     }

//     return second === -Infinity ? null : second;
// }

// // Example usage
// const array = [10, 5, 8, 3, 9];
// console.log(findSecondLargest(array)); // Output: 9


//By js function 
function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    // Sort the array in descending order
    const sortedArray = arr.sort((a, b) => b - a);

    // Find the first unique element that is not the same as the largest element
    let firstLargest = sortedArray[0];
    let secondLargest = sortedArray.find(num => num < firstLargest);

    // If second largest element is not found, it means all elements are the same
    if (secondLargest === undefined) {
        throw new Error("There is no second largest element as all elements are the same");
    }

    return secondLargest;
}

// Example usage
const numbers = [10, 5, 8, 12, 12, 3, 8];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 10
