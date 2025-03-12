#include <iostream>
using namespace std;
//single level 
// Base Class: The class from which the derived class inherits.
// Derived Class: The class that inherits from the base class a its functionality.


// class A{
//     public: 
//     void show(){
//         cout<<"this is class A\n";
//     }
// };
// class B : public A {
//     public:
//     void display(){
//         cout<<"this is class B\n";
//     }
// };

// int main(){
//     B obj; obj.show();
//     obj.display();
//     return 0;
// };

//-----------------------------------------

class amount{
    private:
    int privateVar  = 100;
    public: 
    int getPrivate(){
        return privateVar;
    }
};
class data : public amount{
    public:
    void display(){
        cout<<"Accessing private amount base class method :" <<getPrivate()<<endl;
    }

};

int main(){
    data obj;
    obj.display();
    return 0;
}