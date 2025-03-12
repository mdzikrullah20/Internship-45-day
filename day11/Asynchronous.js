// JavaScript me asynchronous 
// programming kaafi important hai kyunki JavaScript single-threaded hoti hai.
// Asynchronous operations background me execute hote hain bina baki code ko block kiye

console.log("Step 1");
setTimeout(() => {
    console.log("Step 2");
}, 5000);
console.log("Step 3");


