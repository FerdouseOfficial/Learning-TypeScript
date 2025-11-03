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


let hitesh: user = {dbId: 22, name: "Hc", id: 1, 
    startTrial : () => {
        return "Fuck Off Man" 
    }, getCoupon:(name: "hitesh10", value: 3) => {
        return 3
    }
}

hitesh.email = "WakaWakkaOOOO"