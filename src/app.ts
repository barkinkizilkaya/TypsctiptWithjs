//Decorators

function Logger() {
  return function (constructor: Function) {
    console.log("Logging");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// at symbol special
//@Logger()
@Logger()
@WithTemplate("<h1>My page</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating Person Objects");
  }
}

const pers = new Person();
console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESSOR DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method DECORATOR");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("parameter DECORATOR");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const origiinalMetod = descriptor.value;
  const adjDescrptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundfn = origiinalMetod.bind(this);
      return boundfn;
    },
  };
  return adjDescrptor;
}

class Printer {
  message = "This Works";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage.bind(p));

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; //['required','positive']]
  };
}

var registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objectvalidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectvalidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectvalidatorConfig) {
    for (const validator of objectvalidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value; // + işareti numbere dönüştürür

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("invalid input");
    return;
  }
  console.log(createdCourse);
});
