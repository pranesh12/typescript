console.log("hello");
//alias
type personType = { name: string; age: number };

const person: personType = {
  name: "Prnaesh",
  age: 5,
};

//interface object blueprint
interface StudentInterface {
  name: string;
  age: number;
  phone?: number;
}

const studentone: StudentInterface = {
  name: "Pranesh",
  age: 4,
};
const studentwo: StudentInterface = {
  name: "home",
  age: 4,
  phone: 9808084,
};

const numbers: number[] = [1, 3, 5];
const any: any[] = [23, "3lj"];
const number2: (number | string)[] = [13, "pranesh"];
const persons: object[] | StudentInterface[] = [
  {
    name: "Pranesh",
    age: 4,
  },
];
const myname: string = "piko";

const printName = (name: string): void => {
  console.log(`Hola ${name}`);
};
printName("pranesh");

//function that return a number

const add = (a: number, b: number): number => {
  return a + b;
};
console.log(add(4, 5));

//function signiture

let mul: (a: number, b: number) => number;
//It will return number

mul = (a: number, b: number) => {
  return a * b;
};

mul(4, 4);

//array type is strign and it will return string
const getArray = (arr: string[]): string[] => {
  return arr;
};

//generics types
// It is dynamic array type wich return that type of array
const getArrayOne = <T>(arr: T[]): T[] => {
  return arr;
};

const printString = getArrayOne<string>(["Pranesh", "crypto"]);
const printArry = getArrayOne<number>([1, 2, 4]);

console.log(printArry);
console.log(printString);

//generics in function
const PintAnything = <T>(something: T): void => {
  console.log(something);
};

PintAnything<string>("poko");
PintAnything<boolean>(true);
PintAnything<number>(3);

//tuple Here you have to maintain order
let t: [string, number, boolean] = ["pilo", 3, false];

//enum

enum Week {
  Sat,
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
}
