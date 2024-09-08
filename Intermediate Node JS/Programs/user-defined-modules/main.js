// let obj1 = require("./demo1")       // we load the modules 
// let obj2 = require("./demo2");
// let obj3 = require("./demo3")
// obj1.display1();
// obj2.display2();
// obj1.display();
// obj2.display();
// console.log(obj3.fname);
// console.log(obj3.sayHello("raj"))
//display1();

import Employee,{fname} from "./demo4.js";
let emp1 = new Employee();
emp1.disEmpInfo();
console.log(fname)