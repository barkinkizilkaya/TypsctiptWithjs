"use strict";
//Generics
const names = []; // string[]
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
//own generic types  //constraits
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
console.log(merge({ name: "Max" }, { age: 30 }));
const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.age);
function countAndPrint(element) {
    let descriptionText = "Got No value";
    if (element.length) {
        descriptionText = "Got " + element.length + " elemensts";
    }
    return [element, descriptionText];
}
console.log(countAndPrint("test"));
//key of
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Max" }, "name");
// Generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textSTorage = new DataStorage();
textSTorage.addItem("Max");
textSTorage.addItem("Manu");
const numberStorage = new DataStorage();
numberStorage.addItem(5);
function createCourseGoal(title, desc, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesarr = ["Max", "Anna"];
//# sourceMappingURL=Generics.js.map