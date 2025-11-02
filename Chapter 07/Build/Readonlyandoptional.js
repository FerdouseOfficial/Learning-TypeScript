"use strict";
// her we will practiceth READONLY and optional okay.
let myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: true,
};
myUser.email = "fut@gmail.com";
// above you have write 2 type alias  but if you write code this way it will end up being a mess.
// so here we can apply the simple formula mix and match of the two above 
//  I have use the readonly and ? concept actually we use readonly for that no one can change the value of it. and by using ? this we say that this is a optional thing"
