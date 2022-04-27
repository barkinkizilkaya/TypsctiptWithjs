abstract class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employees: string) {
    this.employees.push(employees);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepertment extends Department {
  describe(this: Department): void {
    console.log("This is ItDepartment");
  }
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    } else {
      this.instance = new AccountingDepartment("d2", []);
      return this.instance;
    }
  }

  describe(this: Department): void {
    console.log("This is AccountDepartment");
  }
  private lastReport: string;

  get mostRecentReport() {
    return this.lastReport;
  }
  set mostRecentReport(value: string) {
    this.lastReport = value;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReports(text: string) {
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
