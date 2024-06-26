console.log("Test 01 from Section 02")
let testNumbers: number = 100_100_100;
let testNumbers2 = 100_100_100;//able to recognized variable type base on assign value..doesn't need to declare like the first example
//ao its similar to javascript but like javascript you cant assign different type of value to variables because TS is static type assign variable type at complier.
//testNumbers2="This is not allowed";
let testString: string = "Test Value only";
let testString2 = "Test Value only";
let testBoolean: boolean = true;
let testBoolean2 = false;
//####################@@The "any" Type@@####################
let anyTypeVariable;//any type variable is when variable is not assign to value or variable type 
//then the variable can be use to assign to any type of value as user like asd much of different types
//Ex:-
anyTypeVariable = 10;
anyTypeVariable = "Test value";
//this actually invalid the TS type check feature so not recommend to use
//if you passing value as parameter in function if the passing parameter is not denoted like this "parameter:dataType(Ex:string)" you need to change this setting in tsconfig.json file ""noImplicitAny": false,"
function testAnyDataTypeFunction(/*this is wrong "parameter" fi this set the tsconfig file*/parameter: string) {
    /*function implementation */
}
//####################@@Arrays@@####################
//TS arrays are same as JS arrays same functionalities
let studentName = ["Ranul", "Tom", "Brian", "Gaveen"];//this array is recognized as a string array
studentName.forEach(n => { console.log(n.toString()) });//printing out the array using foreach()
let studentID: number[] = [];//if  you want empty array always assign and declare a type other wise compiler thing it is a any type array
studentID[0] = 19876523;
//####################@@Tuples@@####################
// tuple are fixed length array with key similar to HashMaps actually all doubts aside its HashMaps as exact declaration is different and multiple values can be stored in one item
//tuple are basic arrays in JS 
let students: [number, string] = [12002436892, "Ranul"];
students.push(81732837, "tom");
students.push(57838578, "lucky");//push() function use to add new items to the tuple
students.push(45387547, "brad");
students.push(92384235, "brian");
students.forEach(n => console.log("Student Info Entire:- " + n));//printing out all value in tuple
console.log("\n");
students.forEach(n => {
    if (n == "57838578") {
        students.pop();//removing item in last place

    }
});
students.forEach(n => console.log("Student Info Entire:- " + n));//printing out all value in tuple
//####################@@Enums@@####################

//the enums are similar to list but the values are related constants
enum clothSizes { small = "Shoulder=36.5,Bust=88,Waist=73,Hip=95,Thigh=56", medium = "Shoulder=38,Bust=94,Waist=79,Hip=101,Thigh=61", large = "Shoulder=40,Bust=103,Waist=88,Hip=110,Thigh=67" };
let smallSizeInfo = clothSizes.small;
console.log("Smaller Size Measurement Info:-" + smallSizeInfo);

//the JS code is little bit complex to reduce that complicity put a constant making in the enum declaration
const enum testEnum { One = 1, Two, Three };
console.log(testEnum.Three);

//####################@@Functions@@####################
//functions are same as JS and Java the difference between JS and TS function is in TS you have annotate return type and the passing parameter
//uncomment this "noUnusedParameters": true,  in tsconfig file to make sure that passing parameter is definitely used other wise compilation error also uncomment this "noImplicitReturns": true, too to have multiple return statements in function
function testFunction(testParameter: number=1000): number {
    if(testParameter==100){
        return 100;
    }
    return testParameter;
}
console.log(testFunction());

//####################@@Objects@@####################
//same as JS Objects in TS objects elements have to be declared based on there data type also you can use "readonly" to set object attributes to unable to changed
//"retire:" use for object defined methods you can have passing parameters and return type

let student:{
    studentID:number,
    studentName:string,
    studentBYear:number,
    age:(cYear:number)=>Number,
    displayAllInfo:()=>string
}={
    studentID:2050304060,
    studentName:"Ranul Gamage",
    studentBYear:2002,
    age:(cYear:number)=>{
        let studentAge;
        studentAge=cYear-student.studentBYear;
        return studentAge;
    },
    displayAllInfo(){
        return "Student Name:-"+student.studentName+
        "\n student ID:-"+student.studentID+
        "\n student Birth Year:-"+student.studentBYear+
        "\n student Age:-"+student.age(2024);
    }
};

console.log("Student "+student.studentName+" is "+student.age(2024)+"years old...");
console.log(student.displayAllInfo());