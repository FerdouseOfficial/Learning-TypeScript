"use strict";
// Practicing concepts of Enum in TS 
// enum SeatChoice {
//     AISLE,
//     MIDDLE,
//     WINDOW,
//     FOURTH
// }
// enum SeatChoice { /// YOu also can set there specific value on them just like that that's will be fine okay
//     AISLE = 10 ,
//     MIDDLE= 12,
//     WINDOW = 202,
//     FOURTH
// }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice["FOURTH"] = "fourth";
})(SeatChoice || (SeatChoice = {}));
// there is a lot of way you can do tha
// HERE IS HOW YOU WILL ACCESS THEM :- 
let hcSeat = SeatChoice.AISLE; // tha'ts how
// when You see the compiled version of it its a very huge function so to make it small add "CONST" infront of te enum okay
// REMEMBER
// Teh moto behind having a typescript is having a restricton while writing the code but the code that is being produced by the Javascrpt shold bbe clean and beautiful and that is why there's a lot of discussion and helathy discussion around the community which is good .
