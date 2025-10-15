"use strict";
// Practicing objects, arrays, tuples and
const stringArr = ["hey", "one", "dave"];
// console.log(stringArr)
let guitars = ["strats", "Les Paul", 5150];
const mixedData = ["EVh", 1984, true];
stringArr[0] = "John";
// stringArr.push(13);
stringArr.push("hey");
// console.log(stringArr)
guitars[0] = 1984;
guitars.unshift("jim");
console.log(guitars);
// stringArr = guitars; // its not right because stringArr is only can have the string.
//but guters can do it because its union type support both number and string
guitars = stringArr;
console.log(guitars);
// just like that
let test = []; // here will go any type of data
// console.log(test)
// but if you wanna define a specific data types for it here how you do it
let teams = []; // here you go all data will be string
// Tuples
let myTuple = ["mahin", 2, true, "love"];
// console.log(myTuple)
// myTuple.push(1)
// myTuple[0] = 2 // Not okay
let mixed = ["Jhon", 1, false];
mixed = myTuple;
// myTuple = mixed
// OBJECTS
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = teams;
myObj = {};
const exampleObj = {
    prop1: "dave",
    prop2: true,
};
exampleObj.prop1 = "fine";
let evh = {
    name: "fahim Abdullah",
    active: true,
    albums: [1984, 5150, "oui12"],
};
let JP = {
    name: "jimmy",
    active: true,
    albums: ["i", "ii", "iv"],
};
evh = JP;
const greetGuitarist = (guitarist) => {
    console.log(`Hello ${guitarist.name}!`);
};
greetGuitarist(JP);
////////// Enums
/// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript bu something added to htte language and runtime.
// enum grade {
//   U,
//   D,
//   C,
//   B,
//   A,
// }
// console.log(grade.U);
/*
  What is an enum in TypeScript?

  An enum (short for "enumeration") is a way to give names to a set of numeric values.
  It helps you group related values together and use easy-to-read names instead of numbers.

  For example:
    enum Color {
      Red,
      Green,
      Blue
    }

  Now, you can use Color.Red, Color.Green, or Color.Blue in your code instead of 0, 1, or 2.
  This makes your code easier to read and understand.
*/
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labStaff"] = "labStaff";
})(whoType || (whoType = {}));
let names = whoType.student;
console.log(names);
