
const chunkingArr = (arr, size) => {
    const result = []
    for(let i =0; i<arr.length; i++){
        result.push(arr.slice(i,i+size))
    }
    return result
}

const arr=[1,2,3,4,5,6,7,8]

console.log(chunkingArr(arr,2))



