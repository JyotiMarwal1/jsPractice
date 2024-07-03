
/*
count the num of digits of a number

34252 : 5

*/

// it should be run at least one time, that 's why we use Do- while loop here
// because number have atleast one digit

// SYNTAX - DOWHILE
// do {
    
// } while (condition);

const countDigit = (num) => {
    num = Math.abs(num)
    let count = 0
    do {
        count++;
        num = Math.floor(num / 10)

    } while (num > 0);
    return count;
}


console.log(countDigit(121)) // 3
console.log(countDigit(-44145)) // 5