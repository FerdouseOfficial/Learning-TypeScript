"use strict";
// Practicing the crucial concepts of TS is Interfaces. Just like that okay.
// let hitesh= {name:"hitesh", id: 1}  // that's most beginer make mistake like me they forgot to assign the user interface 
/// here is how you do that
let hitesh = { dbId: 22, name: "Hc", id: 1,
    startTrial: () => {
        return "Fuck Off Man"; // here is how you do it man declare a method
    }, getCoupon: (name, value) => {
        return 3;
    }
}; // that's the perfect way of doing it.
hitesh.email = "WakaWakkaOOOO";
// hitesh.dbId = 34 // we can do that because we cannot change or reassing readonly value remember it
// the concept of Interface
// Yur operating sytem is a interface for hardware it doesn't allow you that when you click a utton how does it happpen you don't know ad you don't care about it you just know ifI click on this something happens if I click on this. You don't know what deep down is happening. that's the simple theory 
