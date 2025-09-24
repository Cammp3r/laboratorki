// #1

function incNum(n) {
    return n*2;
}

const r = 10;
const q = incNum(r);

console.log(r, q);

// #2

function incObj(num) {
    num.n = num.n *3;

}

const obj = { n: 33 };
incObj(obj);
console.dir(obj);

// #3
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
    }

}

console.log(staticCount);


// #4

const dynamicCount = {
    
}





for ( const ellement of arr) {
 const type = typeof ellement;

 if(!dynamicCount[type]) {
    dynamicCount[type] = 0;
 }

 dynamicCount[type]++;
}

console.log(dynamicCount);


