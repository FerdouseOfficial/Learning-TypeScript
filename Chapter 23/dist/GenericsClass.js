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
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 2;
    // return products[myIndex] // Now I am just don't write this because its throwing erro on me so I have ignore it for now oka.
    return products;
}
const getMoreSearchProducts;
(products) => {
    return products;
};
