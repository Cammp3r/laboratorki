const ipToNum = (ip) => {
    return ip
  .split('.')
  .map(Number)

  .reduce((acc, byte, i, arr) => {
      return acc + (byte << (8 * (arr.length - 1 - i)));
    }, 0);

}

console.log("from 192.168.0.1 to ", ipToNum("192.168.0.1"));
console.log("from 10.0.0.1 to ", ipToNum("10.0.0.1"));
console.log("from 212.168.0.254 to ", ipToNum("212.168.0.254"));
console.log("from 55.113.22.44 to ", ipToNum("55.113.22.44"));
