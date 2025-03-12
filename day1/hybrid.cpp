#include <iostream>
using namespace std;
//this is multi level inheritance 
class A{
    public:
    void show(){
        cout<<"class A\n";
    }
};
class B : public A{
    public:
    void display(){
        cout<<"class B\n";
    }
};
class C {
    public:
    void print(){
        cout<<"class C";
    }
};
class D : public B, public C{
    public:
    void final(){
        cout<<"class D\n";
    }
}
int main(){
    D obj; obj.show();
    obj.display();
    obj.print();
    obj.final();
    return 0;
}
