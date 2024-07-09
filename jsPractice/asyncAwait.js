// Async-Await
// async function always returns a promise.

// async function MyFunc(){ ... }
// await pauses the execution of its surrounding async function untill the promise is settled


// async function hello() {
//     console.log("Hello")
// }

// hello()


function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather test")
            resolve(200)
        }, 2000)
    })
}

async function getWeatherData() {
    await api()
    await api()
}

let apiRes = getWeatherData()
console.log("apiRes", apiRes)

// Note - Hum await ko directly use ni kr skte , 
// HUm function m hi await ko use kr skte h
// or yh function m async keyword lga hona chaiye


// to Resolve this point like use await without function we use IIFE (Immediately invoked function expression)
// Syntax -1
// (function() {

// })()

// Syntax -2
// (() => {

// })()

// (async () => {

// })()


