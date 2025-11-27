const contract = (fn, ...types) => {
    const resultType = types[types.length - 1];
    const argTypes = types.slice(0, -1);

    return (...args) => {
        for (let i = 0; i < argTypes.length; i++) {
            const arg = args[i];
            const ExpectedType = argTypes[i];

            if (arg === null || arg === undefined || arg.constructor !== ExpectedType) {
                throw new TypeError(`Argument at index ${i} is expected to be ${ExpectedType.name}`);
            }
        }

        const result = fn(...args);

        if (result === null || result === undefined || result.constructor !== resultType) {
            throw new TypeError(`Result is expected to be ${resultType.name}`);
        }

        return result;
    };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);

console.dir(res);


const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');

console.dir(res2);
