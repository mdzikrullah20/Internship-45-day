#include <iostream>
using namespace std;

// what is Encapsulation
// Encapsulation means bundling data (variables) 
// and methods (functions) together and restricting direct access to some components
// public : acces for all
// private : acces only for class
// pretected : acces only for inherited class

class Student {
private:
    int age;
public:
    void setAge(int a) {
        if (a > 0) age = a;  
        else age = 0;
    }
    int getAge(){
        
        return age;
    }
};
int main() {
    Student s;
    s.setAge(21);          
    cout << s.getAge();
    return 0;
}

