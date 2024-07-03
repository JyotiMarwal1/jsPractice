/*
Given an array "nums" containing n distinct numbers in the range [0,n] return the only number in the range
that is missing form the array
*/

// I/P - [0,1] - output of missing num in series is - 2
// I/p - [9,6,4,2,3,5,7,0,1] -- missing num in series is - 8
// I/P - [3,0,1] - output of missing num in series is - 2

// approach - 
// 1. Sum of all numbers in array - [3,0,1] == 3+0+1 = 4
// 2. Sum of all numbers between minimum and max value in this series  - 1+2+3+0 = 6 
// 3. then do minus =====> 6 -4 = 2  ==> i.e. the missing number

const missingNum = (numsArr) => {

    let sum =0;
    for(let i =0; i<numsArr.length; i++){
        sum += numsArr[i]
    }

    // numsArr.length*(numsArr.length+1)/2  --- this is use to get sum of all values that should be in series

    return numsArr.length*(numsArr.length+1)/2 - sum

}

console.log(missingNum([0,2]))  // 1


const missingNumWay2 = (numsArr) => {

    return numsArr.length * (numsArr.length + 1) / 2 - numsArr.reduce((acc, num) =>  num+acc)

}

console.log(missingNumWay2([0,1,3,4,5]))  // 2