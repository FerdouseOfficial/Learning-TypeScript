"use strict";
let myName;
let MeaningOfLife;
let isLoading;
let album;
// let album: string | number;
/**
 * The `any` type in TypeScript allows a variable to hold any kind of value.
 * It disables type checking for that variable.
 */
myName = "John";
MeaningOfLife = 42;
isLoading = true;
album = 1;
console.log(myName);
console.log(MeaningOfLife);
console.log(isLoading);
function sum(a, b) {
    return a + b;
}
const sum2 = (c, d) => {
    return c - d;
};
let ans1 = sum(23, 2);
let ans2 = sum2(20, 3);
console.log(ans1);
console.log(ans2);
let postID;
let isActive;
let re = /\w+/g;
