// her we will learn more about bad behaviour of object in TypeScript okay.
const User = {
    name: "Rohan",
    email: "Rohan32@com",
    isActive: true
}

// in up how i write the object actually this is not a stadard way of writing object in TS.

// function createUser({name: string, isPaid: boolean}){} this is not the right way of writing syntax .
// here is the right syntax here
function createUser ({name, isPaid}: {name: string, isPaid: boolean}){} // this is not the actual way of declaring but this is how you do it inside the funciton okay.

let newUser = {name: "ali", isPaid: true, email: "ali@gmail.com"} // "This is how" we can do that now when we pass the newUser into the create user it doesn't show any error. Thaat's the bad behaviour but ther is way to fix it. We will learn it later by type and interfeaces okay. Remember it .

createUser(newUser) // if we want now we can't define any more values like email because it is not defined in the function createUser. but we can do that here is how it will show in the above section with "this is how"

// Practicing Destructuring here is the link of the chat if you have any further confuseion go here and learn about it okay.
// here is the link:- https://chatgpt.com/share/6906eedd-b914-800f-a9fb-170e305955a9

// const alpha = ['a', 'b', 'd', 3];
// const [f1, f2, , f3] = alpha; // This is how destrucing works okay.

// console.log(f1)

// in one line
// Destructuring is :- A quick way to unpack values from arrays or objects into separate variables. that's it okay.