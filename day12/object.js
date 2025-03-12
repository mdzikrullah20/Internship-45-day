//create a class
class study{
    constructor(name,id){
        this.name = name
        this.id = id;
    }
    data(){
        console.log(`hello my name is ${this.name} my id ${this.id}`);  
    }
}
//create a object
let data1 = new study("zikrullah","D39")
data1.data()