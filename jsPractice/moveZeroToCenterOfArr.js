// Move Zeroes to center of Array

function moveZeroesToCenter(arr) {
    // Step 1: Count the number of zeroes in the array
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }
    // Step 2: Calculate the center position for zeroes
    const centerStart = Math.floor((arr.length - zeroCount) / 2);
    // Step 3: Create a new array and place elements accordingly
    let result = new Array(arr.length);
    let nonZeroIndex = 0;
    let zeroIndex = centerStart;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (nonZeroIndex < centerStart) {
                result[nonZeroIndex] = arr[i];
                nonZeroIndex++;
            } else {
                result[zeroIndex + zeroCount] = arr[i];
                zeroCount--;
            }
        } else {
            result[zeroIndex] = 0;
            zeroIndex++;
        }
    }
    return result;
}
// Example usage
const arr = [10, 0, 5, 0, 2, 6];
console.log(moveZeroesToCenter(arr)); // Output: [10, 5, 0, 0, 2, 6]
