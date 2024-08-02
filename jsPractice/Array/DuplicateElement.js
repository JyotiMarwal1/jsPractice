const findUniqueElements = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const uniqueToArr1 = [...set1].filter(item => !set2.has(item));
    const uniqueToArr2 = [...set2].filter(item => !set1.has(item));

    return [...uniqueToArr1, ...uniqueToArr2];
};

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 5, 6]

// ************************************************************************************************* //

const findIntersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter(item => set2.has(item));
};

const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];
console.log(findIntersection(array3, array4)); // Output: [3, 4]

// ************************************************************************************************* //

const findUnion = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1, ...set2];
};

console.log(findUnion(array3, array4)); // Output: [1, 2, 3, 4, 5, 6]

// ************************************************************************************************* //

const findDifference = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter(item => !set2.has(item));
};

console.log(findDifference(array3, array4)); // Output: [1, 2]

// ************************************************************************************************* //

const findDuplicates = (arr) => {
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(counts).filter(item => counts[item] > 1).map(Number);
};

const arrayd = [1, 2, 3, 2, 4, 1];
console.log(findDuplicates(arrayd)); // Output: [1, 2]

// ************************************************************************************************* //

const countDuplicates = (arr) => {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
};

const array6 = [1, 2, 2, 3, 3, 3];
console.log(countDuplicates(array6)); // Output: { '1': 1, '2': 2, '3': 3 }

// ************************************************************************************************* //

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

const array = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4]

// ************************************************************************************************* //
// Find the Maximum and Minimum Elements
const findMaxMin = (arr) => {
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    };
};

const array8 = [1, 2, 3, 4, 5];
console.log(findMaxMin(array8)); // Output: { max: 5, min: 1 }
// ************************************************************************************************* //
// Reverse an Array

const reverseArray = (arr) => {
    return arr.reverse();
};

const array9 = [1, 2, 3, 4, 5];
console.log(reverseArray(array9)); // Output: [5, 4, 3, 2, 1]

// ************************************************************************************************* //
// Rotate an Array

const rotateArray = (arr, k) => {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
};

const array10 = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(array10, k)); // Output: [4, 5, 1, 2, 3]

// ************************************************************************************************* //
// Find the First Non - Repeating Element

const findFirstNonRepeating = (arr) => {
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    for (let item of arr) {
        if (counts[item] === 1) {
            return item;
        }
    }

    return null; // If no non-repeating element is found
};

const array11 = [4, 5, 1, 2, 0, 4];
console.log(findFirstNonRepeating(array11)); // Output: 5

// ************************************************************************************************* //
// Find the Longest Increasing Subsequence

const lengthOfLIS = (nums) => {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};

const array12 = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(lengthOfLIS(array12)); // Output: 6


// ************************************************************************************************* //
// 19. Check if Array Contains Duplicate

const containsDuplicate = (arr) => {
    const set = new Set(arr);
    return set.size !== arr.length;
};

const array13 = [1, 2, 3, 4, 4];
console.log(containsDuplicate(array13)); // Output: true

// ************************************************************************************************* //
//  Find All Subarrays with Given Sum

const findSubarraysWithSum = (arr, sum) => {
    const subarrays = [];

    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;

        for (let end = start; end < arr.length; end++) {
            currentSum += arr[end];

            if (currentSum === sum) {
                subarrays.push(arr.slice(start, end + 1));
            }
        }
    }

    return subarrays;
};

const array14 = [1, 2, 3, 4, 5];
const sum = 5;
console.log(findSubarraysWithSum(array14, sum)); // Output: [[2, 3], [5]]

// ************************************************************************************************* //
// 21. Find the Missing Number

const findMissingNumber = (arr) => {
    const n = arr.length;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arraySum;
};

const array15 = [3, 0, 1];
console.log(findMissingNumber(array15)); // Output: 2

// ************************************************************************************************* //
//  Find the Peak Element

const findPeakElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((i === 0 || arr[i] > arr[i - 1]) && (i === arr.length - 1 || arr[i] > arr[i + 1])) {
            return arr[i];
        }
    }
    return null;
};

const array16 = [1, 2, 3, 1];
console.log(findPeakElement(array16)); // Output: 3

// ************************************************************************************************* //
// 23. Remove Specified Element

const removeElement = (arr, val) => {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[k] = arr[i];
            k++;
        }
    }
    return k;
};

const array17 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(array17, val1)); // Output: 2

// ************************************************************************************************* //
// Find the Index of First Occurrence

const findIndexOfFirstOccurrence = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
};

const array18 = [1, 2, 3, 4, 2];
const val = 2;
console.log(findIndexOfFirstOccurrence(array18, val)); // Output: 1