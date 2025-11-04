const score: Array<number> = []
const names: Array<string> = []

// this is generics 

function ntityOne(val: number | boolean):  number | boolean {
    return val
}

function identityTwo(val: any): any {
    return val;
}

// the actual way of writing generics here is how you write it :-

function identityThree<Type>(val: Type): Type {
    return val
}

identityThree(3) // let me make it clear how it works actually when You use <> I mean Generics  its automatically tract the type of the value. and set it up as a type of the function also for the val parameter also fo the function return type just like that. 

// If you want to clearly understand just mouseOver in the identityThree(3) then you will see how it works