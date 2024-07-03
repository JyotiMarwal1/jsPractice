// getter / setters

class User {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(_fullName) {
        this.firstName = _fullName.split(' ')[0];
        this.lastName = _fullName.split(' ')[1]
    }

}

let user1 = new User("Jyoti", "Marwal");
user1.fullName   // Jyoti Marwal
user1.fullName = "Radhe Marwal" // Radhe Marwal

console.log("fullName", user1.fullName) // fullName Radhe Marwal
console.log("FirstName", user1.firstName) // FirstName Radhe
console.log("last Name", user1.lastName)    // last Name Marwal