"use strict";
var _a;
const e1 = {
    name: "Max",
    priviliges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
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
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//Nullish Coalescing
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
const results = add(1, 5);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("priviliges" in emp) {
        console.log("priviliges : " + emp.priviliges);
    }
    if ("startDate" in emp) {
        console.log("startDate : " + emp.startDate);
    }
}
printEmployeeInformation(e1);
function moveAnimal(animal) {
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
var userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi There!";
const errrBag = {
    email: "Need Mail",
    username: "Must start Capital Char",
};
//# sourceMappingURL=app.js.map