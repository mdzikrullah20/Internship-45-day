// classes
// JavaScript me classes ka use objects banane aur code ko organize karne ke liye hota hai.
//  Yeh ES6 (ECMAScript 2015) me introduce kiya gaya tha\

class Student {
    //constructor object ko initializ karne ke liye use kiya jata hai
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    study() {
        console.log(`My name is: ${this.name}, my roll no is: ${this.rollNo}`);
    }
}
let user = new Student("Zikrullah", "D39");
user.study();
