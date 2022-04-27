"use strict";
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