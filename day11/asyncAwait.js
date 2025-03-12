// async
// Function ko asynchronous banata hai.
// Yeh hamesha ek promise return karta hai.

// await
// Ek asynchronous operation ko wait karne ke liye use hota hai
// Yeh sirf async function ke andar hi use ho sakta ha
// Async Await ka use promise ko resolve hone tak wait karta ha
// try...catch errors handle karne ke liye use hota hai 

async function userData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching user", error);
    }
}

userData();
