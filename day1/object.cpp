#include <iostream>
using namespace std;
// what is objects
// object to access propertes of class like data member and member function   
class tech {
public:
    string Leo;
    int teacher;
    string work;
    void displayInfo() {
        cout << "Company Name: " << Leo << ", Teacher: " << teacher << " work " <<work << endl;
    }
};
class Student{
    public:
    string name;
    int rollno;
    void print(){
        cout << "name: " << name << ", Roll no: " << rollno << endl;
    }


};
int main() {
    tech t;  
    t.Leo = "Leo Pardruns inovation technology";
    t.teacher = 4;
    t.work = "IT";
    t.displayInfo(); 

     Student s;
    s.name = "md zikrullah";
    s.rollno = 39;
    s.print();
    return 0;
}



