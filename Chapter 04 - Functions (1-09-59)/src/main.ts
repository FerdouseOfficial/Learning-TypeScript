// // Type Aliases
// type stringOrNumber = string | number;

// type stringOrNumberArray = (string | number)[];

// interface Gutarist {
//   name: string;
//   active: boolean;
//   albums: stringOrNumberArray;
// }

// type userID = stringOrNumber;

// // interface mijanId = stringOrNumber

// // Literal types

// let Mynames: "Dave";

// let userNames: "Dave" | "John" | "Amy";

// userNames = "Dave";

// const add = (a: number, b: number) => {
//   return a + b;
// };

// const logMsg = (message: any) => {
//   console.log(message);
// };

// logMsg("hello");
// logMsg(add(3, 2));
// // logMsg(add('2', 3))

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number;

// let multiply: mathFunction = function (c, d) {
//   return c * d;
// };

// You will face many problem. But the people who stick with that problem and make it work. Until you solve the problem 



// here is the better way to write funciton all will be provide here okay:- 

//here is 1 way! writing in general way the typical way of wriitng function
// function getValue(myVal: number) {
//   if(myVal > 5){
//     return true;
//   }
//   return "200 OK";
// }

//here is another way :- Writing arrow funciton.
// const getHello = (s: string): string => {
//   return "";
// }

// const heros = ["thor", "spiderman", "ironman"];
// // const heros = [1, 2, 3]
// heros.map((heros) => {
//   return `hero is ${heros}`
// })


// its a good practice that always write what the function will return void or return tell it explicitly okay.
// if it declares return then set the function return type as return. But if the function return void then then the funciton return type as void; just like that okay.
function consoleError(errmsg: string): void{
  console.log(errmsg);
  
}
