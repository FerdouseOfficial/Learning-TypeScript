 "use strict";
// Practicing Tuples in TS okay.
// in a broad catergory it's just an array a kind of specialized array that is given to us by typescript with some restrictions on to it so let's go ahead and catch up with that one so let's go
// as you know when we use API for our usage we use structure data in API sometimes at fist its come number sometimes its comes as string. So if you wanna add some restriction ro order to it so that we can set up which data will come first that's why we use tuples. that's the purpose of it okay. t
// that's the thing we can't do that in Simple Array.. I think it's clear to you now 
// her eis the example : -
let user; // remember one thing when you want to access multiple data types inside a tuple don't use or sign (|) use (,) Comman> Okay
user = ["Rozi", 2, true];
let color;
color = [32, 23, 23]; // that's how its works
const newUser = [112, "example.@google.com"];
newUser[1] = "hc.com"; // this is the bad behavior or the bug of the TypeScript tuple. we can change value inside the tuple. that's the minuse point.
// you can use push() pop() shift() unshift() splice() all the array method in it there will be no problem that's the bug of the tuples. That's the bad side of it . I think you understand it.
