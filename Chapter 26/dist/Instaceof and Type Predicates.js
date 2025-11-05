"use strict";
// Start Practcing hte concept of Instanceof and Type Predicates
// I don't understand what the code actually mean ask GPT okay. and learn from him 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        // (parameter) x: Date  I don't know what it is what it actually does learn from it in GPT okay
    }
    else {
        console.log(x.toUpperCase()); // Now just skip it bruh
        //  (parameter) x: Date I don't know what it is what it actually does learn from it in GPT okay
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
// I don't understand this chunk of it make sure to understand it okay.
// --------------------------------------------------------------------------------------------------------------------------------------------  
