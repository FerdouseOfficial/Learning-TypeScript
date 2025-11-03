// Practicing the crucial concepts of TS is Interfaces. Just like that okay.

interface user {
    readonly dbId:number
    name: string,
    email?: string,
    id: number,
    googleId?: string
    // defining a method:-
    // startTrial: () => string 
    // anotehr way of doing int the defination of method which hitesh like is this.
    startTrial(): string // its also a way you can do that
}

// let hitesh= {name:"hitesh", id: 1}  // that's most beginer make mistake like me they forgot to assign the user interface 

/// here is how you do that

let hitesh: user = {dbId: 22, name: "Hc", id: 1, 
    startTrial : () => {
        return "Fuck Off Man" // here is how you do it man declare a method
    }
} // that's the perfect way of doing it.

hitesh.email = "WakaWakkaOOOO"

// hitesh.dbId = 34 // we can do that because we cannot change or reassing readonly value remember it

