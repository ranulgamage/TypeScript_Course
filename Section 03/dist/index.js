"use strict";
var _a, _b, _c;
console.log("Section 3...Advanced Types!!!!");
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
let studentTwo = {
    studentID: 2034627825,
    studentName: "Ben walker",
    studentBYear: 1998,
    age: (cYear) => {
        let studentAge;
        studentAge = cYear - studentTwo.studentBYear;
        return studentAge;
    },
    displayAllInfo() {
        return "Student Name:-" + studentTwo.studentName +
            "\n student ID:-" + studentTwo.studentID +
            "\n student Birth Year:-" + studentTwo.studentBYear +
            "\n student Age:-" + studentTwo.age(2024);
    }
};
console.log("Student " + studentTwo.studentName + " is " + studentTwo.age(2024) + "years old...");
console.log(studentTwo.displayAllInfo());
function kgToLb(weight) {
    if (typeof weight == "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log("30KG is " + kgToLb(50) + "Lb");
console.log("100KG is " + kgToLb("100") + "Lb");
let unitCOMP3003;
let student001 = {
    studentID: 2050304060,
    studentName: "Ranul Gamage",
    studentBYear: 2002,
    age: (cYear) => {
        let studentAge;
        studentAge = cYear - student001.studentBYear;
        return studentAge;
    },
    displayAllInfo() {
        return "Student Name:-" + student001.studentName +
            "\n student ID:-" + student001.studentID +
            "\n student Birth Year:-" + student001.studentBYear +
            "\n student Age:-" + student001.age(2024);
    },
    unitCode: "CMPE1000",
    unitName: "Hardware Fundamentals",
    mark: 91,
    grade: "A+"
};
console.log(student001);
let heightMetrics = "CM";
function greet(name) {
    if (name) {
        console.log("ආයුබෝවන් " + name + " !!!!");
    }
    else {
        console.log("\n\nпривет пользователь");
    }
}
greet("රනුල්");
greet(null);
function getCustomers(id) {
    if (id == 112445) {
        let date = new Date();
        date.setDate(15);
        date.setMonth(5);
        date.setFullYear(2002);
        return { birthDay: date };
    }
    return id == 0 ? null : { birthDay: new Date() };
}
console.log((_b = (_a = getCustomers(0)) === null || _a === void 0 ? void 0 : _a.birthDay) === null || _b === void 0 ? void 0 : _b.getFullYear);
console.log((_c = getCustomers(112445)) === null || _c === void 0 ? void 0 : _c.birthDay);
function getStudentBOD(studentID) {
    let students = [12002436892, 20020515];
    students.push(81732837, 19970615);
    students.push(57838578, 20030210);
    students.push(45387547, 20071231);
    students.push(92384235, 20010101);
    if (studentID) {
        students.filter((n) => {
            if (n == studentID) {
                return n;
            }
            return n;
        });
    }
    else {
        return null;
    }
    return undefined;
}
let bod = getStudentBOD(12002436892);
console.log();
//# sourceMappingURL=index.js.map