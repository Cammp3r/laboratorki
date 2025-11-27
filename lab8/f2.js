function store(value) {
    return function () {
        return value;
    };
}
const read = store("lol");
console.log(read());
