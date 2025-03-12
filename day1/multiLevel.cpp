#include <iostream>
using namespace std;

class A{
    public:
    void show(){
        cout<<"this is class A\n";
    }
};
class B : public A{
    public:
    void display(){
       cout<<"this is class B\n";
    }
};
class C : public B{
    public:
    void print(){
        cout<<"this is class C\n";
    }
};

int main(){
    C obj; obj.show();
    obj.display();
    obj.print();
    return 0;
};