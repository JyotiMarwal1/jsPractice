// Interleaving Two Arrays:

// Write a function interleaveArrays(arr1, arr2) that takes two arrays
//  and returns a new array where the elements are interleaved.

const interLeavingArr = (arr1, arr2) => {
    const result = []

    const maxLength = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) result.push(arr1[i])
        if (i < arr2.length) result.push(arr2[i])
    }
    return result
}


const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(interLeavingArr(arr1, arr2));  // [ 1, 2, 3, 4, 5, 6 ]