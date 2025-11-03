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

function get