"use strict";
// Generics class practice okay:--
// | Concept                                  | Meaning                                     |
// | ---------------------------------------- | ------------------------------------------- |
// | **Generic (`T`)**                        | A placeholder for any type                  |
// | **Generic Constraint (`T extends ...`)** | A rule that says **T must have some shape** |
// 🎯 Easiest Real-life Example
// Imagine you say:
// Anyone can enter the classroom. (Generic)
// But then you add a rule:
// Only students wearing ID cards can enter. (Generic Constraint)
// So the ID card requirement = extends.
// ⭐ Summary:-
// Generics allow flexibility.
// Generic Constraints allow controlled flexibility.
// They ensure that you can only pass types that match certain rules.
const score = [];
const Name = [];
function identityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
//identityFour<Bottle> ({})
// function getSearchProducts<T>(products: T): T{
//     //do some database operations
//     const myIndex = 2;
//     // return products[myIndex] // Now I am just don't write this because its throwing erro on me so I have ignore it for now oka.
//     return products
// }
// const getMoreSearchProducts<T,>(products: T): T { // reserach what is the problem here okay. then figure it out
//     return products
// }
// I have face this Issue before And I have chat solution about this with chatGPT make sure to read and check it out okay. bsource desktop account 
// function getSearchProducts<T>(products: T[]): T{
//     //do some database operations
//     const myIndex = 2;
//     // return products[myIndex] // Now I am just don't write this because its throwing erro on me so I have ignore it for now oka.
//     return products
// }
// const getMoreSearchProducts<T,>(products: T[]): T { // reserach what is the problem here okay. then figure it out
//     return products
// }
function anotherFuncctionj(val, val2) {
    return {
        val,
        val2
    };
}
anotherFuncctionj(3, 8);
let traverse = (val, val2) => {
    return {
        val,
        val2
    };
}; // this is now we write it by the arrow function just like that okay
class Sellable {
    cart = [];
    addToCart(product) {
        this.cart.push(product);
    }
}
// paste this code and understand the explanation of the code provided by GPT. and make sure to learn OOPs concepts first okay.
// analyze it okay.
