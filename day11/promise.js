// Promise 
// asynchronous operation ko resolve and reject hone ke result ko bata ta hai 

let promise = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve("hey i am resolved");
    } else {
        reject("hey i am reject");
    }
});

promise
    .then(result => console.log(result)) 
    .catch(error => console.log(error))
