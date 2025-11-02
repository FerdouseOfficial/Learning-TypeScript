"use strict";
// Here we will practice TypeAliases 
function createUser(user) {
    return user;
}
createUser({ name: "", email: "", isActive: true }); // here you will do that okay.
function printCoord(pt) {
    console.log(`The coordinate's x value is ${pt.x}\n The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 400, y: 2000 });
