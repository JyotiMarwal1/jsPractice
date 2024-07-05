function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    let first = -Infinity, second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] !== first) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}

// Example usage
const array = [10, 5, 8, 3, 9];
console.log(findSecondLargest(array)); // Output: 9