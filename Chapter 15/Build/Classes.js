"use strict";
// Classes in TS . we will practice that.
// class user {
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
// this is not the right sytax to write in TS. in Upper.
// this is the right syntax for doing it. I think you understand.
class user {
    email;
    name;
    city = "Jaipur";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const hitesh = new user("hgmail.com", "hiesh"); // here you create a new obj
