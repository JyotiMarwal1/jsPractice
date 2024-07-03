//Basic Class Syntax

class User {
    constructor(name) {
        this.name = name
    }

    getUserName() {
        return this.name
    }

}

const user1 = new User("Jyoti")

console.log("===", user1.getUserName())
// output-- Jyoti

//console.log("===", user1)
//output--  { name: 'Jyoti' }
// 1. Class methods are non-enumerable (means hum is pr loops nhi chla skte)
// 2. Class toString() is different
// 3. Class can only be called with new. Not as a normal function
// 4. Class is always is "use strict" mode.