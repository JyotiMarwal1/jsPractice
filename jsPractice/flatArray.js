// Flattening an Array:

// Write a function flattenArray(arr) that takes an array 
// with nested arrays and flattens it into a single - level array.

const flatArr = (arr) => {
    return arr.flat(Infinity)
}

const arr = [1, [1,2],[4,6,45]]

console.log(flatArr(arr))