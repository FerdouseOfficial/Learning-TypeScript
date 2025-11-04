"use strict";
// we will learn getter and setter...// Learning private public 
// one of the best way of learn to code by seeing reading other code. its not about logic. Its about syntax shortcuts and file structure. 
// class User{
//     email: string
//     name: string
//     private readonly city: string = "Jaipur"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
let body = document.querySelector("body");
body.style.backgroundColor = "#000";
// here is the professional way of writing code. How the professional wriet code
// class User{
//     private _courseCount = 1;  
// private readonly city: string = "Jaipur"
// constructor(
//     public email: string,
//     public name: string) {
// }
// get getAppleEmail(): string {
//     return `apple ${this.email}`;
// }
// } 
// this is the shortcut way of doing it.......
// const hitesh = new User("h@ghs", "hitesh")
// hitesh.city = "delhi"
// we have learned TypeScript PUBLIC AND PRIVATE:-  
// Programming with MOsh getter and setter tutorial. Okay go ahead...
// interface User {
//     firstName: string,
//     lastName: string,
//     fullName(): string
// }
// const person: User = {
//     firstName: "Mosh",
//     lastName: "Hamedani",
//     fullName: () => {
//         return `${person.firstName} ${person.lastName}`
//     }
// };
// console.log(person.fullName());
// here is the very simple explnation of getter and setter
//  f Very Simple Explanation:
// get → used to get a value like a property.
// → You don’t call it with ().
// set → used to set or update a value.
// → Runs automatically when you assign something.
// this is the JavaScript version of Getters and Setter. 
// const person = {
//     firstName: "Mosh",
//     lastName: "Hamedani",
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`;
//     },
//     set fullName(value) {
//         let parts = value.split(" ")
//         value.firstName = parts[0];
//         value.lastName = parts[1];
//     }
// }
// let a = person.fullName = "Moash Hamedani"
// console.log(a)
// let b = person.fullName = "Joe Rogan"
// console.log(b)
class User {
    email;
    name;
    _courseCount = 1;
    city = "Jaipur";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // Now If you wanna read or access the private courseCount here is how you do it.
    get courseCount() {
        return this._courseCount;
    }
    // here is how you set value inside it........
    // one more imporatnt things about setter. 
    // You are not able set types of setter okay. You can set return or type in setter okay remember it. 
    // there is no return type in setter in TypeScript
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
