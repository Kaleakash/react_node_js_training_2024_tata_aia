var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.disEmp = function () {
        console.log("Employee class function");
        console.log("id " + this.id + " name " + this.name + " salary is" + this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, salary, numberOfEmp) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.numberOfEmp = numberOfEmp;
        return _this;
    }
    Manager.prototype.disMgr = function () {
        console.log("Manager class function");
        console.log("number of employee working under him " + this.numberOfEmp);
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(id, name, salary, projectName) {
        var _this = _super.call(this, id, name, salary) || this;
        _this.projectName = projectName;
        return _this;
    }
    Developer.prototype.disDev = function () {
        console.log("Developer class function");
        console.log("project name is " + this.projectName);
    };
    return Developer;
}(Employee));
var emp1 = new Employee(100, "Ravi", 24000);
emp1.disEmp();
var mgr1 = new Manager(101, "Ajay", 55000, 10);
mgr1.disMgr();
mgr1.disEmp();
var dev1 = new Developer(102, "Balaji", 45000, "Node JS");
dev1.disEmp();
dev1.disDev();
