"use strict";
class Instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    cameraMode;
    filter;
    burst;
    shorts;
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
}
// very imporatant notes are here
// 1. Alway remember in constructor by following the rule of the interface Yes You have to put property according to the interface if it has 4. You have to add 4. But If you want you can add more properties to that. But you can't add less okay.
