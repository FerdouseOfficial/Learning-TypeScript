"use strict";
// Abstract Class :---------------------
// when after using it in any class we can't crate any object from that class. Exactly like a blueprint 
class TakePhoto {
    cameraModa;
    filter;
    constructor(cameraModa, filter) {
        this.cameraModa = cameraModa;
        this.filter = filter;
    }
}
// let hi = TakePhoto("name", "t") // we can create any object when the class is an abstract class okay remember it.
// but we can create it by extends the TakePhoto class into other class 
// this is how you do it
class apple extends TakePhoto {
    cameraMode;
    filter;
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hi = new apple("name", "text"); // here is how you can do that..........s
// notes of important things:- 
// class = blueprint for objects.
// abstract class = blueprint you cannot instantiate directly.
// extends = inheritance — child gets parent's properties/methods.
// constructor(...) sets up the object when it's created.
// public param inside constructor = creates + assigns a property automatically.
// super(...) = call parent constructor; must be called before this in subclass constructor 
