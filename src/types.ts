type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
  name: "Max",
  priviliges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//type guards
//function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

//Optional Changing
const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My Own Desc" },
};

console.log(fetchedUserData?.job?.title);

//Nullish Coalescing

const userInput = null;

const storedData = userInput ?? "DEFAULT";

const results = add(1, 5);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("priviliges" in emp) {
    console.log("priviliges : " + emp.priviliges);
  }
  if ("startDate" in emp) {
    console.log("startDate : " + emp.startDate);
  }
}

printEmployeeInformation(e1);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("speed :" + speed);
}

var userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi There!";

interface ErrorContainer {
  [prop: string]: string;
}

const errrBag: ErrorContainer = {
  email: "Need Mail",
  username: "Must start Capital Char",
};
