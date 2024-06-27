console.log("Section 3...Advanced Types!!!!");
//@##################################################@
//@#####################@TypeAlias@#############################@
//in objects if you want multiple objects with same attributes you need to repeat again and again in TS one of the best practices is not to repeat keep it dry
//this will help set a type of object attributes and use that type to crate multiple object have same attributes
type student = {
    studentID: number,
    studentName: string,
    studentBYear: number,
    age: (cYear: number) => Number,
    displayAllInfo: () => string
}
let student: student = {
    studentID: 2050304060,
    studentName: "Ranul Gamage",
    studentBYear: 2002,
    age: (cYear: number) => {
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
let studentTwo: student = {
    studentID: 2034627825,
    studentName: "Ben walker",
    studentBYear: 1998,
    age: (cYear: number) => {
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

//@#####################@Union Type@#############################@
//passing a parameter to function with different types of parameter union Types help do so.

function kgToLb(weight: (number | string)): number {
    if (typeof weight == "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
}

console.log("30KG is " + kgToLb(50) + "Lb");
console.log("100KG is " + kgToLb("100") + "Lb");

//@#####################@Intersection Type@#############################@
//set a object with two types for example student grade report need the student object and student marks object
type studentOne = {
    studentID: number,
    studentName: string,
    studentBYear: number,
    age: (cYear: number) => Number,
    displayAllInfo: () => string
}

type studentMarks = {
    unitName: string,
    unitCode: string,
    mark: number,
    grade: string
}
let unitCOMP3003: studentMarks;
type studentGradeReport = studentOne & studentMarks;

let student001: studentGradeReport = {
    studentID: 2050304060,
    studentName: "Ranul Gamage",
    studentBYear: 2002,
    age: (cYear: number) => {
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


//@#####################@Literal Type@#############################@
//this help to set certain values to a variable other then the set values variable will not accept.
type metrics = "CM" | "Inch";
let heightMetrics: metrics = "CM";

//@#####################@Nullable Type@#############################@
//in TS default you can pass a null value to a function which expected a some data type value...
//but there is way to do this you need to change the parameter type to union type..

function greet(name: string | null | undefined) {
    if (name) {
        console.log("ආයුබෝවන් " + name + " !!!!");
    } else {
        console.log("\n\nпривет пользователь")
    }
}

greet("රනුල්");
greet(null);

//@#####################@Optional Chaining@#############################@
//this helps you with null and undefine return values when we want to print out a function return value from function that can return null or undefined values we need to use if condition to validate the return value
//if you use optional chaining you don't have to put this before return value"?." then the compiler will determine weather this value is printable or not if the value is null or undefined it will ignored. 
type customer = {
    birthDay: Date;
}
function getCustomers(id: number): customer | null | undefined {
    if(id==112445){
        let date=new Date();
        date.setDate(15);
        date.setMonth(5);
        date.setFullYear(2002);

        return {birthDay:date};
    }
    return id == 0 ? null : { birthDay: new Date() };
}

console.log(getCustomers(0)?.birthDay?.getFullYear);
console.log(getCustomers(112445)?.birthDay);



function getStudentBOD(studentID: number | null): number | null | undefined {
    let students: [number, number] = [12002436892, 2002_05_15];
    students.push(81732837, 1997_06_15);
    students.push(57838578, 2003_02_10);//push() function use to add new items to the tuple
    students.push(45387547, 2007_12_31);
    students.push(92384235, 2001_01_01);
    if (studentID) {
        students.filter((n) => {
            if (n == studentID) {
                return n;
            }
            return n;
        })
    } else {
        return null;
    }
    return undefined;
}
let bod = getStudentBOD(12002436892);
console.log();

