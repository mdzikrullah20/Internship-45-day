// JSON (JavaScript Object Notation):
// ek lightweight data format hai jo data ko store aur exchange karne ke liye use hota hai.
// JSON web applications me server aur client ke beech data transfer karne ke liye use hota
// JSON ka syntax key-value pairs me hota hai


let jsonData = '{"name": "Ali", "age": 30}';
let user = JSON.parse(jsonData); 
console.log(user.name);
