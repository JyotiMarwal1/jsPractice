
// If we know how many time loop will execute, then we use "For loop"


// SYNTAX - "FOR LOOP"
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

const sumOfNaturalNum = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

const sumOfNaturalNumWay2 = (num) => {

    return num * (num + 1) / 2;
}

console.log(sumOfNaturalNum(4))  // 10 
console.log(sumOfNaturalNum(10))  // 55
console.log(sumOfNaturalNumWay2(4)) // 10 