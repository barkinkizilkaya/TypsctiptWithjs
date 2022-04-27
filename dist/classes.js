"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepertment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("This is ItDepartment");
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        else {
            this.instance = new AccountingDepartment("d2", []);
            return this.instance;
        }
    }
    describe() {
        console.log("This is AccountDepartment");
    }
    get mostRecentReport() {
        return this.lastReport;
    }
    set mostRecentReport(value) {
        this.lastReport = value;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReports() {
        console.log(this.reports);
    }
}
const itDepartment = new ITDepertment("it1", ["Max"]);
const accountingDepartment = AccountingDepartment.getInstance();
accountingDepartment.addReports("Something Went Wrong");
var result = accountingDepartment.getReports();
Department.createEmployee("test");
console.log(result);
//# sourceMappingURL=classes.js.map