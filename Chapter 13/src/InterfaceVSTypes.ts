// Practicing the concept of Interfaces ad Types okay.....................
interface user {
    readonly dbId:number
    name: string,
    email?: string,
    id: number,
    googleId?: string
    startTrial(): string 
    getCoupon(couponName: string, value: number): number
}

// If you want to add more thing inside the user we can do that in the same user interface but if we want we can do that in another interface with same name user okay. 

// lets see how we can do that // 

interface user{ // We can call it """""""""""""""""""""""""""""""""""""" REOPENING OF THE INTERFACE """""""" important can be asked in interview okay.
    githubToken: string,
}

// we also have Inheritance options in interface here is how you can do that
// by using extends keyword we can access all the value of interface

interface Admin extends user{
    role: "admin" | "TA" | "Learner"
}

let hitesh: Admin = {dbId: 22, name: "Hc", id: 1, 
    githubToken: "github",
    role: "admin", // just like that we can do that
    startTrial : () => {
        return "Fuck Off Man" 
    }, getCoupon:(name: "hitesh10", value: 3) => {
        return 3
    }
}

hitesh.email = "WakaWakkaOOOO"



/// Always if you have problem make sure to read in the Official Documentation