// Inheritance 

class Shape {
    constructor(name) {
        this.name = name
    }

    displayShape() {
        return 'Shape ' + this.name;
    }
}

class Rectangle extends Shape {

}

let rect1 = new Rectangle("rect1")
console.log(rect1.displayShape())   // Shape rect1 

//constructor of child is implicitly created and it calls constructor
// of parent

// jb class m koi constructor bna hua ni hota to vo apne ap hi apne parent constructor ko call kr leti h
// super - super keyword ka mtlb yh hota h ki mere parent constructor ko call krlo
// because humne class ko inheritance s extends kr k bnaya h to hume super call krna zaroori h or parent m parameter
// pass krna zaroori h, ni to program ni chlega ----- like -   super(name)



