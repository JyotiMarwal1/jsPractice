const arr = [10, 5, 5, 6, 3, 4, 2, 2, 3]
const findUniqueElements = (arr) => {
    const countObj = {}

    for (let i = 0; i < arr.length; i++) {
        if (countObj[arr[i]]) {
            countObj[arr[i]] += 1
        } else {
            countObj[arr[i]] = 1
        }
    }

    const uniqueElements = []
    for (const key in countObj) {
        if (countObj[key] === 1) {
            uniqueElements.push(Number(key))
        }
    }
    return uniqueElements

}

console.log(findUniqueElements(arr))

