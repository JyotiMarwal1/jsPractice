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

let apiRes =  getWeatherData()
console.log("apiRes", apiRes)

