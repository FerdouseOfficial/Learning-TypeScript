interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

interface Story{
    createStory(): void
}
class YouTube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string,
    ){}

    createStory(): void {
        console.log("mine");
        
    }
}

// very imporatant notes are here 

// 1. Alway remember in constructor by following the rule of the interface Yes You have to put property according to the interface if it has 4. You have to add 4. But If you want you can add more properties to that. But you can't add less okay.

// this is how to do: -------- That's how typeScript generate less error and having more consistency