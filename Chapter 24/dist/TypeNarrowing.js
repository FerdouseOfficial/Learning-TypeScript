"use strict";
/**
 * Summary: Type Narrowing in TypeScript (very simple)
 *
 * Type narrowing is how TypeScript figures out a more specific type from a
 * broader union type so you can safely use properties and methods.
 *
 * Key ideas:
 * - Start with a union type (e.g., number | string | null).
 * - Use checks (type guards) to reduce the union to a single type:
 *   - typeof x === "string" or "number" for primitives.
 *   - x === null or if (!x) for null/undefined checks.
 *   - Array.isArray(x) or typeof x === "object" to handle arrays/objects.
 *   - x instanceof SomeClass for class instances.
 *   - user-defined type guards (function isFoo(x): x is Foo) for custom logic.
 * - Control-flow matters: checks inside if/else branches let the compiler
 *   assume the narrowed type within that branch.
 *
 * Why it helps:
 * - Prevents runtime errors by ensuring the right operations are used for
 *   the narrowed type (e.g., .toLowerCase() only on strings).
 * - Keeps code readable and explicit about which types are handled.
 *
 * Tip: Prefer simple, clear checks and consider discriminated unions for
 * structured variants — they make narrowing easy and explicit.
 */
// Practicing Type Narrowing here okay !
// don't just stick with what the tutorial teach you.
// make sure. I mean obviously You must have to how could I say You need this ASS to be done you have to read the documentation okay.
// Hitesh name is practice file as Detaction.ts okay
// remember you have to be very cautious in writing the business case okay. Remember that
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// this all are cautionary tales so make sure ou pay attention on the caution not what could be the solution ther. 
// If you have issue with understanding anything here the code and the comment anything just go to the times of of TypeNarrowing in TS okay you will undersand that.  
function providedId(id) {
    if (!id) {
        console.log("Please Provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    // !!!!!!!!!!!!!
    // DON"T DO THIS
    // KEEP READING 
    // !!!!!!!!!!!1!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// is simple
// here the concept of Type Narrowing:- 
