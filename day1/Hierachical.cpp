#include <iostream>
using namespace std;

class A{
    public:
    void show(){
        cout<<"Class A\n";
    }
};
class B : public A{
    public:
    void display(){
        cout<<"Class B\n";
    }
};
class C : public A{
    public:
    void print(){
        cout<<"Class C \n";
    }
};

int main(){
    B obj1; C obj2; obj1.show();
    obj1.display(); obj2.show();
    obj2.print();obj2.show();
    return 0;

};