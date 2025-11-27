function iterate(object, callback) {
    if (typeof object !== 'object' || object === null) {
        throw new TypeError('First arg must be an object');
    }
    if (typeof callback !== 'function') {
        throw new TypeError('Second arg must be a function');
    }

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            callback(key, object[key], object);
        }
    }
}

const obj = { a: 1, b: 2, c: 3 };

iterate(obj, (key, value) => {
    console.log({ key, value });
});
