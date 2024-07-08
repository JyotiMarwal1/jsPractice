
// Promise
// Promise is for "eventual" completion of task.
// It is an object in js.
// It is a solution  to callback hell. 
// promise has 3 states - pending, fullfilled (resolved), rejected 
// resolve & reject are callbacks provided by js

// let promise = new Promise((resolve, reject) => {
//     console.log("I am promise")
//     reject("Error occur")
// })

// promise.then((result) => console.log("result", result)).catch((err) => {
//     console.log("Err", err)
// })


// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId", dataId)
//             resolve("Success")
//             // reject("Getting Error")
//         }, 5000)
//     })
// }

// let promise = getData(123).then((result) => console.log("RSSS", result)).catch((err) => {
//     console.log("EEERRRor in promise", err)
// })
// console.log("Promiseee", promise)

//A js promise obj can be -
// Pending - the result is undefined
// Resolved - the result is a value (fullfilled)   -- resolve(result)
// Rejected - the result is an error object        -- reject(error)

// Promise channing 

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("DATA 1")
//             resolve("Success1")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("DATA 2")
//             resolve("Success2")
//         }, 4000)
//     })
// }


// console.log("Fetching DATA 1")
// let promise1 = asyncFunc1()
// promise1.then((result) => console.log("RESult p1", result))

// console.log("Fetching DATA 2")
// let promise2 = asyncFunc2()
// promise2.then((result) => console.log("RESult p2", result))

// DAta1 and data 2 parallely sath hi execute ho rhe h nd o/p bhi sath dege bcz dono 4 sec bad o/p de rhe h

// if we want, if first data execute ho, tb humara second data execute ho to hum promies channing ka concept use krege

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("DATA 1")
//             resolve("Success1")
//         }, 4000)
//     })
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("DATA 2")
//             resolve("Success2")
//         }, 4000)
//     })
// }


// console.log("Fetching DATA 1")
// let promise1 = asyncFunc1()
// promise1.then((result) => {
//     console.log("RESult p1", result)
//     console.log("Fetching DAta 2")
//     asyncFunc2().then((result) =>
//         console.log("promise 2 result", result)
//     )
// }
// )

// Another E.g. of Promise Channing 


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataId", dataId)
            resolve("Success")
            // reject("Getting Error")
        }, 2000)
    })
}

getData(1).then((res) => {
    return getData(2)
})
    .then((res) => {
        return getData(3)
    })
    .then((res) => {
        console.log("Successs of Data 3", res)
    })