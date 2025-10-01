const average = (a, b) => (a + b) / 2;
console.log(average(30, 50));

const square = (x) => x * x;
console.log(square(3));

const cube = (x) => x * x * x;
console.log(cube(3));

for (let i = 0; i <= 9; i++) {
    console.log(`Number: ${i}, Square: ${square(i)}, Cube: ${cube(i)}`);
    average(square(i), cube(i));
    console.log(`Average of Square and Cube: ${average(square(i), cube(i))}`);
}