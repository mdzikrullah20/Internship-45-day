// Function-scoped
// ek var ko block ke andar declare kiya jaye, 
// toh woh block ke bahar bhi accessible hota hai, 
// lekin same function ke andar hi."
function example() {
    if (true) {
      let blockVar = "Block Scoped"; 
      var functionVar = "Function Scoped";  
    }
    console.log(functionVar);
    console.log(blockVar);  
  }
  example()
  
// block scope
// Let aur const ka block-level scope hota hai.
// Iska matlab hai ki yeh sirf us block ke andar accessible hote hain
// (jaise ki loop, if statement, etc.) jahan inhe define kiya gaya hai.

function example2() {
    if (true) {
      let blockVar = "I am inside the block";
      const blockConst = "I am also inside the block";
    }
    console.log(blockVar);  
    console.log(blockConst);
  }
  example2();
  


