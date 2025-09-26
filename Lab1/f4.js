const arr = [true, false, false, 0, 1, -1, 2, -2, 100000, NaN, undefined, "text", "hi", true, {name: 'George'}, [0, 1, 2]];

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

