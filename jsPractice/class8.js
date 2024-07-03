// private and protected properties
// in obj oriented programming there is a concept of "Encapsulation" or "Data hiding"
// so that you just interact with object via given methods/properties.
// This avoids changing some internal properties which are not meant for public use.

class User {
    type = "admin"
    constructor(name) {
        this.name = name
    }
}

let user = new User("Jyoti")
user.type = "normal"

console.log("Type", user.type)

//here properties type and name both are accessible - so the are
// changeable 
//because in js by default properties are public 


//Solution -
class User1 {
    _type = "admin"
    constructor(name) {
        this.name = name
    }

    get type() {
        return this._type
    }

    set type(type) {
        this._type = type
    }

}

let user1 = new User1("Jyoti")
user1.type = "normal"
console.log("*****", user1.type)
console.log("User1 properties", user1)

