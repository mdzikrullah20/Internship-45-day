// array methods
// arrays ke saath kaam karne ke liye bahut sare methods hote hain 
// jo data manipulate karna easy bana dete hain


// Yeh methods original array me change karte hain.
// push method 
let arr = [1, 2, 3]
arr.push(4)
console.log(arr)

//pop method
arr.pop()
console.log(arr);

// unshift
arr.unshift(9)
console.log(arr);

//shift
arr.shift()
console.log(arr);

let newArr = [1,2,3,4,5,6,7]
// values remove kane aur value ko add karne mein use hota hai
newArr.splice(6,"k","A","z") 
console.log(newArr);


// Yeh methods original array ko change nahi karte,
//  balki new array return karte hain.

// map method 
// Har element par operation apply karke new array return karta
let myArr = [1,2,3,4,5,6]
let double = myArr.map(num => num * 2)
console.log(double);

//filter methods
// Condition ke according new array return karta hai
let filters = myArr.filter(num => num %2 === 1)
console.log(filters);

// reduce method 
// Ek single value return karta hai (sum, multiplication)
let sum = myArr.reduce((acc, num) => acc + num, 0);
console.log(sum);

// sort method 
// array value ko sorting ke liye use kiya jata hai 
let sorting = [3,5,6,9,0,3]
let sort = sorting.sort()
console.log(sort);

//reverse data
// elemts ko reverse karta hai 
let number = [0,1,2,3,4,5,6,7]
let reverse = number.reverse()
console.log(reverse);

// concat method 
// Do ya zyada arrays ko merge karta hai
let margr = myArr.concat(number)
console.log(margr);


// slice method
// Array ka ek portion return karta hai
console.log(number);
let slice = number.slice(1,4)
console.log(slice);


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number)=> {
  number = number * 2;
 console.log(number);
 
})






 
