// OOP ke basic concepts (class, constructor, method, inheritance)cover karti hai.

class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}

//Create a object
let person1 = new Person("Zikrullah", 25);
person1.greet();
