// type of scope 
// Global Scope 
// Jo variable function ya block ke bahar declare kiya jaye
// wo global variable hota hai.
// Yeh poore program mein accessible hota hai.

let globalScope = "global scope";
function showGlobal() {
    console.log(globalScope); 
}
showGlobal(); 
console.log(globalScope);

// Function Scope 
// Jo variable kisi function ke andar declare ho,
//  wo sirf usi function ke andar accessible hota hai
//  Yeh function ke bahar access nahi kiya ja sakta

function myFunction() {
    let funcScope = "function scope";
    console.log(funcScope)
}
myFunction(); 
// console.log(funcScope)


// Block Scope 
// Jo variable kisi {} (curly braces/block) ke andar declare hota hai, 
// wo sirf usi block ke andar accessible hota hai

if (true) {
    let blockScope = "only usin in side function";
    console.log(blockScope); 
}
// console.log(blockScope); 


// Lexical Scope 
// JavaScript nested functions ko parent scope ke variables access karne deta hai.
// Inner function outer function ke variables ko use kar sakta hai

function outerFunction() {
    let text = "I am from outer function";
    function innerFunction() {
        console.log(text); 
        console.log('i am  inner function')
    }
    innerFunction();
}
outerFunction();
