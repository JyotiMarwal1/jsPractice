function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    // Loop through the array and move non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }

    // Fill the rest of the array with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

const arr = [1, 5, 0, 0, 4, 0, 6];
console.log(moveZerosToEnd(arr)); // [1, 5, 4, 6, 0, 0, 0]