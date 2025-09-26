function incObj(num) {
    num.n = num.n *3;

}

const obj = { n: 33 };
incObj(obj);
console.dir(obj);