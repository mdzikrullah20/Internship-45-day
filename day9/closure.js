// closure
//ek outerFunction innerfunction ko retrun karta hai to closer form banta hai
//closer data ko protect karne ke liye use hota hai
// Data ko private rakhna (Encapsulation)
// Function factories banane ke liye
// Event handlers aur callbacks ke saath
// closure tab banta hai jab ek inner function apne outer function ke scope ko access kar sakta hai,
function outerFunction() {
    let message = "Hello I am a closure";

    function innerFunction() { 
        console.log(message); 
        console.log("hye i am inner function");
        
    }
    return innerFunction;
}
const myClosure = outerFunction(); 
myClosure(); 






function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

