// Call 
// call() ka use kisi function ko turant invoke karne ke liye hota hai,
// aur this ka value manually set karne ke liye.
// Arguments ko comma , separated pass kiya jata hai.
// Function immediately execute karta hai, arguments comma-separated hote hain
const person = {
    name: "Ali",
    greet: function(age, kaam) {
        console.log(`Hello my name is ${this.name} and I am ${age} years old.kaam ${kaam}`);
    }
};  
const anotherPerson = {name: "Zikrullah"};
person.greet.call(anotherPerson,20,"study"); 

// apply() Method
// apply() ka kaam bilkul call() jaisa hi hai,
// bas arguments ek array ke form mein pass kiye jate hain
// Function immediately execute karta hai, arguments array me hote hain

const person1 = {
    name: "Ali",
    greet: function(city) {
    //this keyword ka use object ke andar ke propertes ko point karane ke liye
    //darect access nhi kar skte
        console.log(`Hello my name is ${this.name} and I live in ${city}.`);
    }
};
const person2 = { name: "Zikrullah" };
person1.greet.apply(person2,["MP nagar zone"]); 


// bind() Method
//  ek new function return karta hai jisme this ki value fix hoti hai,
//  lekin use turant execute nahi kiya jata,
//  balki baad me call kiya jata hai.

function sayHello() {
    console.log(`Hello my name is ${this.name}`);
}
const user = {name: "Zikrullah" };
const boundFunc = sayHello.bind(user);
boundFunc(); 



// call method 
// object one 
let student ={
    name: "md zikrullah",
    age: 21,
    designation:"inern",
    printDetails:function(){
        console.log(this.designation);
    }
}
student.printDetails()

//devloper
let student2 ={
    name: "jack",
    age: 29,
    designation:"software Devloper",  
    printDetails:function(){
        console.log(this.designation);
    }
}
student.printDetails.call(student2)



//techaer
let student3 ={
    name: "Leo",
    age: 22,
    designation:"teacher"
}
let printDetails = function(){
    console.log(this.designation);
}
printDetails.call(student3)

//student 
//call
let student4={
    name: "Tokiyo",
    age: 28,
    designation:"Sudent"
}
let printDetails1 = function(){
    console.log(this.designation);
}
printDetails1.call(student4)

let bind = printDetails1.bind(student4)
console.log(bind);
