const Student = {
    name :"Ritik",
    age :21,
    
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}
//-----------------------------------------

const Employee = {
    calTex(){
        return this.salary ;
    },
};

const Ritik = {
    name: "Ritik",
    salary: 50000,
};

Object.setPrototypeOf(Ritik, Employee); // ye bhi ek tarika hai prototype set karne ka
//-----------------------------------------
Ritik.__proto__ = Employee;

console.log(Ritik.calTex()); // Output: 50000
//-----------------------------------------

class Toyota{

}
class model extends Toyota{
    
}
// super keyword
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Toyota", "Corolla");
console.log(myCar.show());

