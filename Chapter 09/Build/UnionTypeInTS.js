"use strict";
// Learning Union Type in TypeScript //
let hitesh = { name: "hitesh", id: 334 };
hitesh = { userName: "hc", id: 334 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
