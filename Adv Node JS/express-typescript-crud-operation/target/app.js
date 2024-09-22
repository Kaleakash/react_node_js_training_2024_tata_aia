"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // let express = requires("express")
let app = (0, express_1.default)();
let PORT = 9090;
let employees = [
    { id: 100, name: "Ravi", salary: 34000 },
    { id: 101, name: "Raj", salary: 36000, age: 34 },
    { id: 102, name: "Ramesh", salary: 32000, age: 32 }
];
app.get("/employees", (req, res) => {
    res.json(employees);
});
app.listen(PORT, () => console.log(`Server running on port number ${PORT}`));
