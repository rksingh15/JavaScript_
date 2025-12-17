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

