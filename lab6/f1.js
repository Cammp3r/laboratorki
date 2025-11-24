function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== "function") {
            throw new Error("All arguments to pipe must be functions");
        }
    }

    return function (initialValue) {
        return fns.reduce((value, fn) => fn(value), initialValue);
    };
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const f = pipe(inc, twice, cube);

console.log( f(6) );
