//Generics

const names: Array<string> = []; // string[]
names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

//own generic types  //constraits

function merge<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);

interface Lenghthy {
  length: number;
}

function countAndPrint<T extends Lenghthy>(element: T): [T, string] {
  let descriptionText = "Got No value";
  if (element.length) {
    descriptionText = "Got " + element.length + " elemensts";
  }
  return [element, descriptionText];
}

console.log(countAndPrint("test"));

//key of

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: "Max" }, "name");

// Generic classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textSTorage = new DataStorage<string>();
textSTorage.addItem("Max");
textSTorage.addItem("Manu");

const numberStorage = new DataStorage<number>();

numberStorage.addItem(5);

/// generic types

interface CourseGoal {
  title: string;
  desc: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desc = desc;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const namesarr: Readonly<string[]> = ["Max", "Anna"];
