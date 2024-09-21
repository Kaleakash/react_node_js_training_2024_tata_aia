class Employee {
    constructor(private id:number,private name:string,private salary:number){}
    disEmp() : void {
        console.log("Employee class function")
        console.log("id "+this.id+" name "+this.name+" salary is"+this.salary)
    }
}
class Manager extends Employee{                     // numberOfEmp
    constructor(id:number,name:string,salary:number,private numberOfEmp:number){
        super(id,name,salary);
    }
    disMgr():void {
        console.log("Manager class function")
        console.log("number of employee working under him "+this.numberOfEmp);
    }
}
class Developer extends Employee {                      // projectName
    constructor(id:number,name:string,salary:number,private projectName:string){
        super(id,name,salary);
    }
    disDev(): void {
        console.log("Developer class function")
        console.log("project name is "+this.projectName)
    }
}
class Address {
    
}
let emp1 = new Employee(100,"Ravi",24000);
emp1.disEmp();
let mgr1 = new Manager(101,"Ajay",55000,10);
mgr1.disMgr();
    mgr1.disEmp();
let dev1 = new Developer(102,"Balaji",45000,"Node JS");
    dev1.disEmp();
dev1.disDev();