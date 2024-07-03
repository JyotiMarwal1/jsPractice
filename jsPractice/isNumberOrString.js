function isNumber(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            return false;
        }
    }
    return true;
}

// Saving the input in a string
let str = "412";

// Function returns true if all elements
// are in range '0' - '9'
if (isNumber(str)) {
    console.log("Integer");
} else {
    console.log("String");
}




