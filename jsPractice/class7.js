//static methods 
// 1. These methods are called static methods and they don't apply
//      on prototype. So they are not accessible to created objects also.
// 2. Use of such methods is limited to class wide applications 
// 3. this remains same as the class 

class Shape {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }

    static areEqual(shape1, shape2) {
        //strickly check for both object's shape name and area

        return shape1.name === shape2.name && shape1.area === shape2.area
    }
}

let s1 = new Shape('rectangle',100)
let s2 = new Shape('rectangle', 100)

console.log(Shape.areEqual(s1,s2)) //true