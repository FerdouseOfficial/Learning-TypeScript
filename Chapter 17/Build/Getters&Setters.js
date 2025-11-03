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
// here is the professional way of writing code. How the professional wriet code
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
}
// this is the shortcut way of doing it.......
const hitesh = new User("h@ghs", "hitesh");
// hitesh.city = "delhi"
// we have learned TypeScript PUBLIC AND PRIVATE:-  
// Programming with MOsh getter and setter tutorial. Okay go ahead...
const person = {
    firstName: "Mosh",
    lastName: "Hamedani"
};
console.log(`${person}`);
