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

const enum SeatChoice {
    AISLE = "aisle",
    MIDDLE= "middle",              /////////// You also can do it just like this okay Hurrah this is so cool
    WINDOW= "window", 
    FOURTH= "fourth" 
}


// there is a lot of way you can do tha

// HERE IS HOW YOU WILL ACCESS THEM :- 

let hcSeat = SeatChoice.AISLE // tha'ts how


// when You see the compiled version of it its a very huge function so to make it small add "CONST" infront of te enum okay

// REMEMBER

// Teh moto behind having a typescript is having a restricton while writing the code but the code that is being produced by the Javascrpt shold bbe clean and beautiful and that is why there's a lot of discussion and helathy discussion around the community which is good .