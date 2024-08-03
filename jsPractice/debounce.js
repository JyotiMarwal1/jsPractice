
// Debounce 2 argument accept krta h , ek function and time, 
// function - jis function ko hum call krna chahte h
// time - is function ko hum kitni der bad m call krna chahte h
// debounce function , ek function return krta h, jis m as setTimeout run krta h
// or hum setTimeout m jo function call krwana h vo and time pass kr dete h]

// fast build debounce func 
export const debounceFunc = (func, delay) => {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
        }, delay);
    };
};

// chatgpt timer approach 
let count = 1;

function showCount() {
    count++;
    console.log("count", count);
}

function debounce(fn, time) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, time);
    };
}

let showCountD = debounce(showCount, 4000);

// Testing the debounce function
showCountD(); // Will log "count 2" after 4 seconds
showCountD(); // Resets the timer and logs "count 2" 4 seconds after this call


// clearTimeout(timer);: Clears any existing timeout before setting a new one.
// This ensures that the function call is delayed by the specified time from 
// the most recent call.

// let timer;: Declares a variable to store the timeout ID.

// function(...args): Uses the rest parameter syntax to capture any arguments 
// passed to the debounced function and forwards them to the original function
// when it's eventually called.