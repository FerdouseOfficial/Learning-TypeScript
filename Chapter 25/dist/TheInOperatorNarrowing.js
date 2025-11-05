"use strict";
// in operator
let isAdmin = (account) => {
    if ("isAdmin" in account) {
        return account.isAdmin; // I have some confusion here I will write it later if I forgot that I will come back again or see this chunck of tutorial and find out what I wanna write okay
    }
};
