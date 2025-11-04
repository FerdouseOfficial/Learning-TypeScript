"use strict";
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
// we can use Inheritace to create subUser....
// but we can't access the private value by that. As we already know that by Using Private Keyword we can only access that withing the class. Just like that 
