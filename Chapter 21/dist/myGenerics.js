"use strict";
const score = [];
const names = [];
// this is generics 
function ntityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// the actual way of writing generics here is how you write it :-
function identityThree(val) {
    return val;
}
identityThree(3); // let me make it clear how it works actually when You use <> I mean Generics  its automatically tract the type of the value. and set it up as a type of the function also for the val parameter also fo the function return type just like that. 
// If you want to clearly understand just mouseOver in the identityThree(3) then you will see how it works 
// its just lock the same value you provide as an argument..
// more shorter way of doing that is this just type T:- 
function identityFour(val) {
    return val;
}
identityFour({ brand: "wasa", type: 2 }); // that's how you will do it....
