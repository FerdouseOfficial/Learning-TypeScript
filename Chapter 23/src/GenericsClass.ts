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



const score: Array<number> = []
const Name: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function indentityTwo(val: any): any {
    return val;
}
function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle{
    brand: string,
    type: number
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

function getSearchProducts<T>(products: T[]): T{
    //do some database operations
    const myIndex = 2;
    // return products[myIndex] // Now I am just don't write this because its throwing erro on me so I have ignore it for now oka.
    return products
}

const getMoreSearchProducts<T,>(products: T[]): T { // reserach what is the problem here okay. then figure it out
    return products
}