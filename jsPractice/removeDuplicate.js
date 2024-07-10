// Removing Duplicates:

// Write a function removeDuplicates(arr) that takes
//  an array and returns a new array with duplicate values removed.

function removeDuplicates(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 4, 5, 1, 6];

console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5, 6]


const removeDupWithJsMethod = (arr) => {
    return [...new Set(arr)]
}

console.log(removeDupWithJsMethod(numbers)); 
