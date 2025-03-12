// Create class
class Person {
    constructor(name, age,email) {
        this.name = name;
        this.age = age;
        this.email = email; 
    }
    greet() {
        console.log(`Hii my name is ${this.name} and I am ${this.age} years old and email id ${this.email}`);
    }
}
 
// Create object
let person1 = new Person("Zikrullah", 21,"zikrullah@gmail.com");
person1.greet();



