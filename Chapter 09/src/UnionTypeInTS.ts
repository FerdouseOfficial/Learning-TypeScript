// Learning Union Type in TypeScript //


type user = {
    name: string
    id: number
}

type Admin = {
    userName: string
    id: number
}

let hitesh: user | Admin = {name: "hitesh", id: 334}
hitesh = {userName: "hc", id: 334}

function getDbId(id : number | string) {
    if(typeof id === "string") {
        id.toUpperCase()
    }
}

let data: number[] = [1, 2, 3];
let data2: string[] = ["1", "2", "3"];
// let data3: number[] | string[] = ["1", 2, "3"] // by applying this syntax you cannot write 2 data type. You can only pass the value all string o rall will be number

// here is the right way of doing it. 

let data4: (number | string)[] = [1, 2, "3"] // Now it will have all the mix value that's how you should write the syntax. I think you get it okay.

// also there is one more classic situation:- 

let pi: 3.14 = 3.14 // by this you can assign the direct value its can't be changed...

// her is the more real use case scenario okay . here it is :- 
// suppose you making a seat booking site for aeroplane 

// here is the example

let seatAllotment: "aisle" | "middle" | "window"; // by writing this you can only access or write this 3 value. You can't over write it .

seatAllotment = "aisle";
// seatAllotment = "crew" // You can't do that because the crew sit is only for he crew not for general person. just kidding. You cannot access this because the crew doesn't exist inside the seatAllotment
