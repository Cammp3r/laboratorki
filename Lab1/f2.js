function incObj(num) {
    num.n = num.n + 1;

}

const obj = { n: 33 };
incObj(obj);
console.dir(obj);