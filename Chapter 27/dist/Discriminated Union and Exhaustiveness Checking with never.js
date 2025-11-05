"use strict";
// here we wil parctice 4 concepts okay.
let getTrueShape = (shape) => {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
};
// Exaustive Check 
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        // using The never type here
        default: // in documentation its said you always have to have a default okay
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
