// // creating object in literal style 
// let emp1={id:100,name:"Ravi",age:21};
// console.log(emp1.id+" "+emp1.name+" "+emp1.age)
// let emp2 = {id:101,name:"Ramesh",salary:34000}
// let emp3 = {id:"afas123",fname:"Raju",lname:"Patil"}
// interface EmployeeType {
//     id:number;
//     name:string;
//     salary:number;
//     age?:number;
// }
// let emp1:EmployeeType={id:100,name:"Ravi",salary:45000,age:24}
// let emp2:EmployeeType={id:101,name:"Raj",salary:46000}
// console.log("id "+emp1.id+" name "+emp1.name+" salary "+emp1.salary+" Age is "+emp1.age)
// console.log("id "+emp2.id+" name "+emp2.name+" salary "+emp2.salary+" Age is "+emp2.age)
// // like empty constructor 
// function Employee(){                // object creation using function style 
//     this.id=100;
//     this.name="Ravi";
//     this.age=21;                // instance variable 
//     let city = "Bangalore"       // local or like private variable. 
//     this.displayEmpInfo = function() {
//         console.log("employee object function")
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//          console.log("city is "+city)
//     }
// }
// //Employee(); consider as normal function 
// let emp1 = new Employee();      // created the memory
// let emp2 = new Employee();
// console.log("id is "+emp1.id)
// console.log("name is "+emp1.name)
// console.log("age is "+emp1.age)
// emp1.displayEmpInfo();
// console.log("id is "+emp2.id)
// console.log("name is "+emp2.name)
// console.log("age is "+emp2.age)
// emp1.displayEmpInfo();
// parameter constructor 
// function Employee(id:number=0,name:string="Unknown",age:number=18,...tech:Array<string>){                // object creation using function style 
//     this.id=id;
//     this.name=name;
//     this.age=age;                // instance variable 
//     this.tech=tech;
//     this.displayEmpInfo = function() {
//         console.log("employee object function")
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//         for(let t of tech){
//             console.log(t)
//         }
//     }
// }
// let emp1 = new Employee(1,"Ravi",21,"Java","Python");      // created the memory
// let emp2 = new Employee(2,"Ramesh");
// emp1.displayEmpInfo();
// emp2.displayEmpInfo();
// ES6 style object creation in type script with default empty constructor 
// class Employee {
//     id:number=100;      // no this keyword in class while creating instance variable.    
//     name:string = "Ravi Kumar";
//     age:number = 21;            // instance variable 
//     displayEmpInfo():void {
//         console.log("Employee details are")
//         console.log("id is "+this.id);
//         console.log("name is "+this.name);
//         console.log("age is "+this.age);
//     }
// }
// let emp1 = new Employee();
// emp1.displayEmpInfo();
// ES6 style object creation in type script with constructor 
class Employee {
    constructor(id = 0, name = "", salary = 0.0) {
        console.log("parameter constructor");
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(" employee class function");
        console.log("id is " + this.id + " name is " + this.name + " salary is " + this.salary);
    }
}
let emp1 = new Employee(100, "Ravi", 34000);
let emp2 = new Employee(101, "Raj", 36000);
let emp3 = new Employee();
let emp4 = new Employee(100);
let emp5 = new Employee(101, "Rajesh");
emp1.display();
emp2.display();
//console.log(emp1.id)
