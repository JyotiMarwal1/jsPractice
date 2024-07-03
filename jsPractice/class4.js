//this issue
class Button {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log("this.value", this.value)
        // output - "play" when call direct play button
        // output - "undefined" when call with setTimeout
        return this.value;
    }
}

let button = new Button("Play")

console.log(button.click())  // Play

console.log(setTimeout(button.click, 1000))

//this has issue - this has changed here (this lost his context)
// Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 16,
//   _onTimeout: [Function: click],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 6,
//   [Symbol(triggerId)]: 1
// }

//Solution 1 - bind the method - use .bind() to constructor object.
class Button1 {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log("this.value in Button 1 with using bind", this.value)
        // output - "play" when call direct play button
        // output - "undefined" when call with setTimeout
        return this.value;
    }
}

let button1 = new Button1("Play")

console.log("when button1 called with click method directly on obj", button1.click())  // Play

console.log("when button1 called with click bind method on obj", setTimeout(button1.click.bind(button1), 1000))

//when button1 called with click method directly on obj Play
// when button1 called with click bind method on obj Timeout {
//   _idleTimeout: 1000,
//   _idlePrev: [TimersList],
//   _idleNext: [Timeout],
//   _idleStart: 16,
//   _onTimeout: [Function: bound click],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 7,
//   [Symbol(triggerId)]: 1
// }
// this.value in Button 1 with using bind Play


//Solution 2 - using arrow function or callback - use arrow function wrappers- because arrow functions are transparent
// they do not use this context
class Button2 {
    constructor(value) {
        this.value = value;
    }

    click() {
        console.log("this.value in Button 2 with using arrow", this.value)
        // output - "play" when call direct play button
        // output - "undefined" when call with setTimeout
        return this.value;
    }
}

let button2 = new Button2("Play")

console.log("when button2 called with click method directly on obj", button2.click())  // Play

console.log("when button2 called with click arrow function on obj", setTimeout(() => button2.click()))


// this.value in Button 2 with using arrow Play
// when button2 called with click method directly on obj Play
// when button2 called with click arrow function on obj Timeout {
//   _idleTimeout: 1,
//   _idlePrev: [TimersList],
//   _idleNext: [TimersList],
//   _idleStart: 18,
//   _onTimeout: [Function (anonymous)],
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: false,
//   [Symbol(refed)]: true,
//   [Symbol(kHasPrimitive)]: false,
//   [Symbol(asyncId)]: 8,
//   [Symbol(triggerId)]: 1
// }
// this.value in Button 2 with using arrow Play

//Solution 3 
// You can also add this arrow style function in class definition - which will act as as class field
class Button3 {
    constructor(value) {
        this.value = value;
    }

    click = () => {

        return this.value;
    }
}

let button3 = new Button3("Play")

button3.click()   //play
setTimeout(button3.click, 1000);    // play 