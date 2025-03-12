#include <iostream>
using namespace std;

class A{
    public:
    void show(){
        cout<<"this is a class A\n";
    }
};
class B {
    public:
    void display(){
        cout<<"this is a class B\n";
    }
};
class C : public A, public B{
    public:
    void print(){
        cout<<"this is a class C\n";
    }
};

int main(){
    C obj; obj.show();
    obj.display();
    obj.print();
    return 0;
};