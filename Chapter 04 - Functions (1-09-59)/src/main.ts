// Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Gutarist {
  name: string;
  active: boolean;
  albums: stringOrNumberArray;
}

type userID = stringOrNumber;

// interface mijanId = stringOrNumber

// Literal types

let Mynames: "Dave";

let userNames: "Dave" | "John" | "Amy";

userNames = "Dave";

const add = (a: number, b: number) => {
  return a + b;
};

const logMsg = (message: any) => {
  console.log(message);
};

logMsg("hello");
logMsg(add(3, 2));
// logMsg(add('2', 3))

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = function (c, d) {
  return c * d;
};
