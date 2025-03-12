#include <iostream>
using namespace std;

// what is inheritance
// It allows a class (child/derived class) to acquire the properties and behaviors
//  (data members and member functions) of another class (parent/base class).

class Base {
public:
    Base() {
        cout << "Base class  called." << endl;
    }
};
class Derived : public Base {
public:
    Derived() {
        cout << "Derived class  called." << endl;
    }
};
int main() {
    Derived d;
    return 0;
}


