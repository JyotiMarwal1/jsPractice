// Finding Duplicates:

// Write a function findDuplicates(arr) 
// that takes an array and returns an array of duplicate values.


const findDuplicate = (arr) => {

    const seen = new Set()
    const duplicate = new Set()

    console.log("Seem", seen)

    arr.forEach(num => {
        if (seen.has(num)) {
            duplicate.add(num)
        } else {
            seen.add(num)
        }

    });

    return Array.from(duplicate)

}

const arr = [10, 5, 2, 6, 6, 4, 4, 5, 4, 2]
console.log(findDuplicate(arr))

//Another way
const array = [1, 2, 3, 2, 4, 5, 4, 5];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            // Check if the found duplicate is already in the duplicates array
            if (!duplicates.includes(array[i])) {
                duplicates.push(array[i]);
            }
        }
    }
}

console.log("===duplicates", duplicates)[2, 4, 5]
