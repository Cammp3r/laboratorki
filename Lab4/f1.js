const a = (1, 2, 3, 4, 5)

function sum1(...args) {
    if (args.length === 0) return 0;

 let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
 }
 return total;
}

console.log(sum1(a))

const b = (0) 

function sum2(...args) {
    if (args.length === 0) return 0;

    let total = 0;
    for (let element of args) {
        total += element;
    }
    return total;
}

console.log(sum2(b))

const c = sum3()

function sum3(...args) {
     if (args.length === 0) return 0;
        

    let total = 0;
    while (args.length > 0) {
        total += args.shift();
    }
    return total;
}

console.log(sum3(c))

const d = (1, -1, 1)

function sum4(...args) {
    if (args.length === 0) return 0;
    let total = 0;
    do {
        total += args.pop();
    } while (args.length > 0);
    return total;
}

console.log(sum4(d))



const e = sum5(10, -1, -1, -1)

function sum5(...args) {
    return args.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}

console.log(sum5(e))
