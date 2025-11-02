// Here we will practice TypeAliases 

// here we will create a Type Aliases or (Type format for object ) or whatever you say
// than we will create a function and pass the type aliases as a Type Anotation for user parameter just like that/

// here is the code 

type User = {
    name: string;
    email: (string | number);
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}

createUser({name: "", email: "", isActive: true}) // here you will do that okay.


// here is one experiment of mine 

type Point= {
    x: number;
    y: number;
}

function printCoord(pt: Point): void{
    console.log(`The coordinate's x value is ${pt.x}\n The coordinate's y value is ${pt.y}`);
}

printCoord({x: 400, y: 2000});