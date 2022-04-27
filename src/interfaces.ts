interface Person {
  name: string;
  age: string;

  greet(phrase: string): void;
}

class test implements Person {
  name: string;
  age: string;
  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }

  constructor(name: string, age: string) {
    this.age = age;
    this.name = age;
  }
}
