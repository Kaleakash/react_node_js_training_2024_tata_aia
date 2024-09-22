"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // let express = requires("express")
let app = (0, express_1.default)();
let PORT = 9090;
app.use(express_1.default.json()); //enable json data from request body 
let employees = [
    { id: 100, name: "Ravi", salary: 34000 },
    { id: 101, name: "Raj", salary: 36000, age: 34 },
    { id: 102, name: "Ramesh", salary: 32000, age: 32 }
];
// http://localhost:9090/employees          // find all employee details 
app.get("/employees", (req, res) => {
    res.json(employees);
});
// http://localhost:9090/find_employee/100       path param 
app.get("/find_employee/:id", (req, res) => {
    let eid = parseInt(req.params.id); // coverting string to number 
    let result = employees.find(e => e.id == eid); // if record present it return that record else return undefined 
    if (result == undefined) {
        res.json({ "msg": "Record not present" });
    }
    else {
        res.json(result);
    }
});
// http://localhost:9090/store_employee 
app.post("/store_employee", (req, res) => {
    let employee = req.body; // id,name,salary,age 
    let result = employees.find(e => e.id == employee.id); // if record present it return that record else return undefined 
    if (result == undefined) {
        employees.push(employee);
        res.json({ "msg": "Record stored successfully" });
    }
    else {
        res.json({ "msg": "Employee id must be unique" });
    }
});
app.listen(PORT, () => console.log(`Server running on port number ${PORT}`));
