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

// function getSearchProducts<T>(products: T[]): T{
//     //do some database operations
//     const myIndex = 2;
//     // return products[myIndex] // Now I am just don't write this because its throwing erro on me so I have ignore it for now oka.
//     return products
// }

// const getMoreSearchProducts<T,>(products: T[]): T { // reserach what is the problem here okay. then figure it out
//     return products
// }

function anotherFuncctionj<T, U extends number>(val:T, val2: U):object {
    return{
        val,
        val2
    }
}

anotherFuncctionj(3, 8 )

// this portion of array function I have done this because I am seeing tha tam I able to do tha twith arrow funciton

// we will practice with interface 
interface Database {
    connection: string,
    username: string,
    password: string
}

let traverse = <T, U extends Database>(val: T, val2:U):object => { // learn what is the shortcut way of doing it the syntax the extends
    return{
        val,
        val2
    }
} // this is now we write it by the arrow function just like that okay

// traverse({}) // learn how you will implement or How you will write inside traverse() after extends the traverse type as Database


// one more thing here 

// final practice with Classes 