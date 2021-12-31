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
