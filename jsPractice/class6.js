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
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
        this.area = width * height
    }

}

let rect1 = new Rectangle("rect1", 10, 11)
console.log(rect1.displayShape())   // Shape rect1 
console.log(rect1.area)  // 110 


// if we not use super then we got this error -
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

for (let x in rect1) {
    console.log(x)
}
// name
// width
// height
// area

console.log("Hello Jyoti")

for (let x of Object.keys(rect1)) {
    console.log(x)
}

// name
// width
// height
// area



for (let x of Object.values(rect1)) {
    console.log(x)
}

// rect1
// 10
// 11
// 110
