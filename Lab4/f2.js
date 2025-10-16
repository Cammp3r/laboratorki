const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

function max(objects) {
    let maxVal = -Infinity;

   for (const row of objects) {

  for (const element of row) {

    if (element > maxVal) {
        maxVal = element;
    }
  }
}
return maxVal;
}

console.log(max(m))