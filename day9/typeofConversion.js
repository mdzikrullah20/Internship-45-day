// JavaScript automatically type conversion kar leta hai jab different types
//  ke values ko mix kiya jata hai.
// Yeh string, number, boolean values ko auto-convert kar sakta hai.

console.log(5 + "10"); // Output: "510" (Number converted to String)
console.log(5 + 10 + "20"); // Output: "1520"
console.log("5" * 2); // Output: 10 (String converted to Number)
console.log("10" - 5); // Output: 5
console.log("10" / "2"); // Output: 5
console.log(10 + true); // Output: 11 (true = 1)
console.log(10 + false); // Output: 10 (false = 0)
console.log("5" + true); // Output: "5true"
