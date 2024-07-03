
// Given an integer x, return true, if x is a "Palindrome", and false otherwise

// e.g. ---   x = 121 , 121 reads as 121 from left to right and from right to left.

// approach -- chheck num with its reverse num , if both are equal then palindrome, otherwise no


const isPalindrome = (x) => {
    let copyNum = x, reverseNum = 0

    while(copyNum > 0){
        const lastDigit = copyNum%10
        reverseNum = reverseNum*10 + lastDigit;
        copyNum = Math.floor(copyNum/10)
    }
    return x === reverseNum
}

console.log(isPalindrome(1234645)) // false
console.log(isPalindrome(123321)) // true
console.log(isPalindrome('appa')) // false -- this only works for digits not string 