// Selecting Elements
// JavaScript me elements select karne ke kai tarike hote hain:
// getElementById() (ID se select karna)
// querySelector() (Single element select karna)
// querySelectorAll() (Multiple elements select karna)
function changeText() {
    let para = document.getElementById("myPara");
    para.innerText = "Text Changed";
}


// first info text change using classname 0 elements
function changeText() {
    let elements = document.getElementsByClassName("info"); 
    elements[0].innerText = "Updated First Paragraph";
}

function updateItems() {
    // select all items using querySelectorAll 
    let items = document.querySelectorAll("li"); 
    items.forEach((item, index) => {
        item.innerText = `Updated Item ${index + 1}`;
    });
}


// document.createElement("tag")Naya element banata hai
// parent.appendChild(child)Parent ke andar add karta hai
// document.getElementById("myList").removeChild(newItem)

// Method	 
// getElementById("id")	ID se ek element select karega
// getElementsByClassName("class")	Class se multiple elements select karega
// getElementsByTagName("tag")	Tag name se elements select karega
// querySelector("selector")	Pehla matching element select karega
// querySelectorAll("selector")	Saare matching elements select karega
// .innerText / .innerHTML	Element ka text ya HTML modify karega
// .style.property	CSS properties change karega
// .setAttribute("attr", "value")	Attribute change karega
// .classList.add("class")	CSS class add karega
// .createElement("tag")	Naya element create karega
// .appendChild(element)	Parent ke andar add karega
// .removeChild(element)	Child element remove karega