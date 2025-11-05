// Start Practcing hte concept of Instanceof and Type Predicates

// I don't understand what the code actually mean ask GPT okay. and learn from him 

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        
        // (parameter) x: Date  I don't know what it is what it actually does learn from it in GPT okay
    } else {
        console.log(x.toUpperCase());                                                                         // Now just skip it bruh
        
        //  (parameter) x: Date I don't know what it is what it actually does learn from it in GPT okay
    }
}


// here comes the tricky part:-

// Using Type Predicates

// here typescript has nothing to do. Its a bit of logical flow okay.

// -------------------------------------------------------------------------------------------------------------------------------------------- 
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish Food"
    } else {
        pet
        return "Bird Food"
    }
}


// I don't understand this chunk of it make sure to understand it okay.

// --------------------------------------------------------------------------------------------------------------------------------------------  


