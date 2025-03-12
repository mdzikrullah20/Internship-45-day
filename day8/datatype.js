//set of rulls ye bata ta hai ke kis type ka data 
//  Primitive Data Types:
let name = "John";  // String
let age = 30;       // Integer
let price = 19.99;  // Floating point number
let isActive = true;  // Boolean
let bigNumber = 9007199254740992n;  // BigInt (note the "n" at the end)
let x;  // x is undefined
let user = null;  // Null (no object value)
let sym = Symbol('description');  // Symbol

// Non-Primitive Data Type:
//object key value pairs
let person = {
    name: "Alice",
    age: 25,
    isStudent: false
}; 
console.log(person);

// Array 
// ordered collection of values, typically used to store lists of items data ko store karta hai
let numbers = [1, 2, 3, 4, 5]; 
console.log(numbers);

// Function 
// block of reusable code
// ek code ko duabbara use kar skete hain
function greet(name) {
    return "Hello, " `${name}`;
}
console.log(greet("Alice"));

