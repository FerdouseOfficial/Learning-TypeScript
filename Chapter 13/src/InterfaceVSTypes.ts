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

let hitesh: user = {dbId: 22, name: "Hc", id: 1, 
    startTrial : () => {
        return "Fuck Off Man" 
    }, getCoupon:(name: "hitesh10", value: 3) => {
        return 3
    }
}

hitesh.email = "WakaWakkaOOOO"