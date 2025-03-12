// JavaScript me event handling ka use kisi user action (jaise button click,
//  mouse move, key press, etc.) ko handle karne ke liye hota hai.


// Event Listener
// JavaScript me addEventListener() method ka use karke events handle karein.
// Multiple events ek saath bind kiye ja sakte hain.
// Dynamic elements ke liye bhi kaam karta hai
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Button Clicked using addEventListener");
})

// Mouse Events
// Mouse se related events handle karne ke liye
// mouseover – Jab mouse kisi element par jaye
// mouseout – Jab mouse element se bahar aaye
// mousedown 

let btn = document.getElementById("hoverBtn");
btn.addEventListener("mouseover", function() {
    alert("Mouse entered the button!");
});


// Keyboard Events
// Keyboard inputs handle karne ke liye
// keyup – Jab key chhodi jati hai
// keypress – Jab key type hoti hai (deprecated in modern browsers)
// keydown – Jab key press hoti hai
document.getElementById("textBox").addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

