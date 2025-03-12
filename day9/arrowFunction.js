// arrow function
// JavaScript mein Arrow Function (=>)
//  ek shorter syntax hai function expressions likhne ke liye.
//  Yeh ES6 (ECMAScript 2015) mein introduce kiya gaya tha.

const square = (num) =>
     num * num;
console.log(square(4)); 

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared)

let user =(a,b)=>{
     return a+b;
 }
 console.log(user(4,8))