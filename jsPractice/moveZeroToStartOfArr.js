
// Move Zeroes to Start of Array

const arr = [10, 0, 5, 0, 2, 6];
function moveZeroesToStart(arr) {
    let zeroIndex = 0; // Initialize the pointer for the next zero element
    // Iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            // If the current element is zero, swap it with the element at zeroIndex
            let temp = arr[zeroIndex];
            arr[zeroIndex] = arr[i];
            arr[i] = temp;
            // Move the zero index to the next position
            zeroIndex++;
        }
    }
    return arr; // Return the modified array
}
// Example usage
console.log(moveZeroesToStart(arr)); // Output: [0, 0, 5, 10, 2, 6]
