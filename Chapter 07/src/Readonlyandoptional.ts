// her we will practiceth READONLY and optional okay.

// her we will learn 3 simple things
            // 1. The fist one is a keyword wich says read only
            // 2. the second one is  just a question mark? literal question mark.
            // 3. third one is a use case scenario that you'll be using a lot.



// here we are learning the READONLY keyword and the "?" question mark keyword as optional

// here is the example. okay.

/**
 * Represents a user in the system.
 * 
 * The `_id` property is marked as `readonly`, meaning it cannot be modified after the user is created.
 * The `creditCardNum` property is optional, indicated by the `?` symbol, meaning it may or may not be present on a user object.
 */
type User = {
    readonly _id: string,
    name : string,
    email: string,
    isActive: boolean,
    creditCardNum ?: number
}

let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: true,
}
myUser.email = "fut@gmail.com"
// myUser._id = "fol"


type cardNumber = {
    cardNumber: string
}

type cardDate ={
    cardDate: string
}

// above you have write 2 type alias  but if you write code this way it will end up being a mess.

// so here we can apply the simple formula mix and match of the two above 

//  I have use the readonly and ? concept actually we use readonly for that no one can change the value of it. and by using ? this we say that this is a optional thing"
