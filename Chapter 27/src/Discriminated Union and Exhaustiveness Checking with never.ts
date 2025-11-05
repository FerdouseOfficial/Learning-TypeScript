// here we wil parctice 4 concepts okay.

// 1. Discriminated unions
// 2. The nevr  Type
// 3. Exhaustiveness checking
// 4. Never Type


// Discrimanted unions
interface Circle {
    kind: "circle", // Discrimanted unions
    radius: number
}
interface Square {
    kind: "square", // Discrimanted unions
    side: number
}
interface Rectangle {
    kind: 'rectangle', // Discrimanted unions
    length: number,
    width: number
}

type Shape = Circle | Square // also add the rectangle 

let getTrueShape = (shape: Shape) => {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side
}

// Exaustive Check 

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2;
            // using The never type here
        default: // in documentation its said you always have to have a default okay
            const _defaultforshape: never = shape
                return _defaultforshape;
        }
    }