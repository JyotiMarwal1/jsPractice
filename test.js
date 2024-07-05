
const removeDuplicates = (arr) => {
    let uniqueArray = []

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false
        for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i] === uniqueArray[j]) {
                isDuplicate = true
                break
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(arr[i])
        }
    }

    return uniqueArray
}

let num = [10, 20, 10, 5, 5, 6, 10]

console.log(removeDuplicates(num))