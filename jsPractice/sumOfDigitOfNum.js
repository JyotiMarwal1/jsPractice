/*
sum of digits of a number
1287 : 1+2+8+7 

*/


// If we don't know how many times loop will run, then we use "while loop", 

//SYNTAX - WHILE LOOP
// while (condition) {
    
// }

function sumOfDigits(num){
    let sum =0;
    while(num >0){
        sum +=num%10;
        num = Math.floor(num/10)
    }
    return sum
}

console.log(sumOfDigits(12345))