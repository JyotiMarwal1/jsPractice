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