
const findSecondLargestNum = (arr) => {
    if (arr.length < 2) {
        return null
    }

    let sortedArr = arr.sort((a, b) => b - a)
    console.log("sortedArr", sortedArr)

    let largest = sortedArr[0]

    let secondLargest = sortedArr.find((val) => val < largest)
    console.log("secondLargest,", secondLargest)
    return secondLargest
}


const num = [1, 2, 3, 1, 4, 5, 6, 8]
console.log(findSecondLargestNum(num))