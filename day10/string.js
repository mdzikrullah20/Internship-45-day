// length: String ki length return karta hai
let str = "zikrullah"
console.log(str.length);

// indexOf():
// kisi character ya substring ka index return karta hai
let strIndex = "zikrullah";
console.log(strIndex.indexOf("k"))
console.log(strIndex.indexOf("ah"))
console.log(strIndex.indexOf("g"))


// lastIndexOf()
// Last index return karta hai
let lastIndex = "zikrullah";
console.log(str.lastIndexOf("l")); 


// substring(start, end)
// Slice jaisa hi hota hai, lekin negative index support nahi karta
let textIndex = "Zikrullah";
console.log(textIndex.substring(0, 4));
console.log(textIndex.substring(4, 8));


// toLowerCase()
// String ko lowercase me convert karta hai
let textCapital = "ZIKRULLAH";
console.log(textCapital.toLowerCase());

let upperText = "jack"
let checkText = upperText.toUpperCase()
console.log(checkText);



// split() 
// String ko array me convert karta hai
let textSplit = "ZIKRULLAH"
console.log(textSplit.split(""));
