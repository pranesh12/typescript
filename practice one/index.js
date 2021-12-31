"use strict";
console.log("hello");
const person = {
    name: "Prnaesh",
    age: 5,
};
const studentone = {
    name: "Pranesh",
    age: 4,
};
const studentwo = {
    name: "home",
    age: 4,
    phone: 9808084,
};
const numbers = [1, 3, 5];
const any = [23, "3lj"];
const number2 = [13, "pranesh"];
const persons = [
    {
        name: "Pranesh",
        age: 4,
    },
];
const myname = "piko";
const printName = (name) => {
    console.log(`Hola ${name}`);
};
printName("pranesh");
//function that return a number
const add = (a, b) => {
    return a + b;
};
console.log(add(4, 5));
//function signiture
let mul;
//It will return number
mul = (a, b) => {
    return a * b;
};
mul(4, 4);
//array type is strign and it will return string
const getArray = (arr) => {
    return arr;
};
//generics types
// It is dynamic array type wich return that type of array
const getArrayOne = (arr) => {
    return arr;
};
const printString = getArrayOne(["Pranesh", "crypto"]);
const printArry = getArrayOne([1, 2, 4]);
console.log(printArry);
console.log(printString);
//generics in function
const PintAnything = (something) => {
    console.log(something);
};
PintAnything("poko");
PintAnything(true);
PintAnything(3);
//tuple Here you have to maintain order
let t = ["pilo", 3, false];
//enum
var Week;
(function (Week) {
    Week[Week["Sat"] = 0] = "Sat";
    Week[Week["Sun"] = 1] = "Sun";
    Week[Week["Mon"] = 2] = "Mon";
    Week[Week["Tue"] = 3] = "Tue";
    Week[Week["Wed"] = 4] = "Wed";
    Week[Week["Thu"] = 5] = "Thu";
    Week[Week["Fri"] = 6] = "Fri";
})(Week || (Week = {}));
