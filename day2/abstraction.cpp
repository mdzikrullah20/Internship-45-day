    #include <iostream>
    using namespace std;
    // what is Abstraction
    // Abstraction focuses on hiding unecessary details and showing only the necessary features of an object.

 class Car {
    bool StartEnng;  
public:
    void start() {
        StartEnng = true; 
        if(StartEnng){
        cout << "Engine Start: " << endl;
        }
        else{
        cout << "Engine off: " << endl;

        }
    };
    
    void drive() {
        if (StartEnng) {
            cout << "You are ready to drive" << endl;
        } else {
            cout << "You cannot drive because the engine is not start" << endl;
        }
    }
};

int main() {
    Car C;
    C.start();  
    C.drive();  
    return 0;
}
