#include <iostream>
using namespace std;
// what is Polymorphism
// ek naam se multiple task perform karne ke ability ko polymorephim kehte hain
//compiletime: overloding same function name but diffrent parameter
//runtime : overriding same function name same parameter

class Math {
public:
    int add(int a, int b) {
        return a + b;
    }

    float add(float a, float b) {
        return a + b;
    } 
    int add(int a,int b,int c)
    {
        return a+b+c;
    }
     int add()
    {
        return 25+25;
    }
};
int main() {
    Math m;
    cout << m.add(5, 10) << endl;        
    cout << m.add(5.5f, 10.5f) << endl; 
    cout<<m.add(12,13,14)<<endl;
    cout<<m.add()<<endl;
    return 0;
}