//computed property value

let variableName = "hello"
class User{
    constructor(name){
        this.name = name;
    }

    [variableName](){
        return this.name
    }
}

let user1 = new User("John")

console.log("call hello function: =====", user1.hello())
// call hello function: ===== John