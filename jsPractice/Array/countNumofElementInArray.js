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

    return countObj
}
