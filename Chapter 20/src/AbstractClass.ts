// Abstract Class :---------------------

// when after using it in any class we can't crate any object from that class. Exactly like a blueprint 
abstract    class TakePhoto {
    constructor(
        public cameraModa: string,
        public filter: string
    ){}
    abstract getSepia(): void
    // abstract getReelTime(): numbe{
    //     // some complex calculation
    //     return 8;
    // }
}

// let hi = TakePhoto("name", "t") // we can create any object when the class is an abstract class okay remember it.

// but we can create it by extends the TakePhoto class into other class 

// this is how you do it

class apple extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
//     getReelTime(): number {
//         return 1
//     }
// }

let hi = new apple("name", "text") // here is how you can do that..........s


// notes of important things:- 
// class = blueprint for objects.

// abstract class = blueprint you cannot instantiate directly.

// extends = inheritance — child gets parent's properties/methods.

// constructor(...) sets up the object when it's created.

// public param inside constructor = creates + assigns a property automatically.

// super(...) = call parent constructor; must be called before this in subclass constructor.