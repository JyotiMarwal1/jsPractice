
// one way - 
const reverseArray = (array) => {
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray
}

let arr = [10, 5, 1, 5, 9, 6]

console.log(reverseArray(arr))


// second way 
// let arr = [5, 6, 1, 2]
// console.log(arr.reverse())

