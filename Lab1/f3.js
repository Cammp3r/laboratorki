const arr = [true, false, false, 0, 1, -1, 2, -2, 100000, NaN, undefined, "text", "hi", true, {name: 'George'}, [0, 1, 2]];

const staticCount = {
    number: 0,
    string: 0,
    boolean: 0,
    undefined: 0,
    object: 0
}

for( ellement of arr) {
    if(typeof ellement === "number") {
        staticCount.number++;
    }
    else if(typeof ellement === "string") {
        staticCount.string++;
    }   
    else if(typeof ellement === "boolean") {
        staticCount.boolean++;
    }
    else if(typeof ellement === "undefined") {
        staticCount.undefined++;
    }
    else if(typeof ellement === "object") {
        staticCount.object++;
    } else {return "error"}

}

console.log(staticCount);