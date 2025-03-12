#include <iostream>
using namespace std;

// void greet();

// int main() {
//     greet();  // Function call kiya 
//     return 0;
// }
// // Function Definition
// void greet() {
//     cout << "Hello, World!" << endl;
// }

///------------------------------------------------

// Function prototype
int add(int , int); 
// function ko declare kiya compiler ko  mlm ho ke function ka name , parameter, data type

int main() {
    int result = add(5, 10);  // Call kiya function ko 
    cout << "Result: " << result << endl;   
    return 0;
}

// Function definition 
//function ka body
int add(int a, int b) {
    return a + b;  // Adding two numbers and returning the result
}


