// Merging and Sorting Arrays:
// Given two arrays of numbers, merge them into a single array and sort the result in
//  ascending order.Write a function mergeAndSortArrays(arr1, arr2) to accomplish this.

const mergeAndSort = (arr1, arr2) => {
    let merge = arr1.concat(arr2)
    return merge.sort((a, b) => a - b)
}

const arr1 = [1, 2, 6]
const arr2 = [4, 8, 9]

console.log(mergeAndSort(arr1, arr2))