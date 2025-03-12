class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age); 
        this.rollNo = rollNo;
    }

    study() {
        console.log(`${this.name} is studying. Roll No: ${this.rollNo}`);
    }
}
let student1 = new Student("Ali", 20, "D39");
student1.greet();
student1.study();
