"use strict";
console.log("Test 01 from Section 02");
let testNumbers = 100100100;
let testNumbers2 = 100100100;
let testString = "Test Value only";
let testString2 = "Test Value only";
let testBoolean = true;
let testBoolean2 = false;
let anyTypeVariable;
anyTypeVariable = 10;
anyTypeVariable = "Test value";
function testAnyDataTypeFunction(parameter) {
}
let studentName = ["Ranul", "Tom", "Brian", "Gaveen"];
studentName.forEach(n => { console.log(n.toString()); });
let studentID = [];
studentID[0] = 19876523;
let students = [12002436892, "Ranul"];
students.push(81732837, "tom");
students.push(57838578, "lucky");
students.push(45387547, "brad");
students.push(92384235, "brian");
students.forEach(n => console.log("Student Info Entire:- " + n));
console.log("\n");
students.forEach(n => {
    if (n == "57838578") {
        students.pop();
    }
});
students.forEach(n => console.log("Student Info Entire:- " + n));
var clothSizes;
(function (clothSizes) {
    clothSizes["small"] = "Shoulder=36.5,Bust=88,Waist=73,Hip=95,Thigh=56";
    clothSizes["medium"] = "Shoulder=38,Bust=94,Waist=79,Hip=101,Thigh=61";
    clothSizes["large"] = "Shoulder=40,Bust=103,Waist=88,Hip=110,Thigh=67";
})(clothSizes || (clothSizes = {}));
;
let smallSizeInfo = clothSizes.small;
console.log("Smaller Size Measurement Info:-" + smallSizeInfo);
;
console.log(3);
function testFunction(testParameter = 1000) {
    if (testParameter == 100) {
        return 100;
    }
    return testParameter;
}
console.log(testFunction());
let student = {
    studentID: 2050304060,
    studentName: "Ranul Gamage",
    studentBYear: 2002,
    age: (cYear) => {
        let studentAge;
        studentAge = cYear - student.studentBYear;
        return studentAge;
    },
    displayAllInfo() {
        return "Student Name:-" + student.studentName +
            "\n student ID:-" + student.studentID +
            "\n student Birth Year:-" + student.studentBYear +
            "\n student Age:-" + student.age(2024);
    }
};
console.log("Student " + student.studentName + " is " + student.age(2024) + "years old...");
console.log(student.displayAllInfo());
//# sourceMappingURL=index.js.map