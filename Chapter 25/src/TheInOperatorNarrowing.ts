// in operator

interface User{
    name: string,
    email: string
}

interface Admin{
    name:string,
    email: string,
    isAdmin: boolean
}

let isAdmin = (account: User | Admin) => {
    if("isAdmin" in account){
        return account.isAdmin // I have some confusion here I will write it later if I forgot that I will come back again or see this chunck of tutorial and find out what I wanna write okay
    }
} 