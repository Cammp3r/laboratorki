function composeRight(...fns) {
    for (const fn of fns) {
        if (typeof fn !== "function") {
            throw new Error("Arguments must be functions");
        }
    }

    let errorHandler = null;

    const composed = function (initialValue) {
        try {
            return fns.reduceRight((value, fn) => fn(value), initialValue);
        } catch (err) {
            if (errorHandler) errorHandler(err);
            return undefined;
        }
    };
    composed.on = function (event, handler) {
        if (event === "error") {
            errorHandler = handler;
        }
    };

    return composed;
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log( composeRight(inc, twice, cube)(6) );

