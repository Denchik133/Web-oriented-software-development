// Завдання 1

const N = prompt("Type N:", 52);
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}
console.log("\nTask 1:");
console.log("N =", N, ", Sum =", sum);

// Завдання 2

const array = [-7, 17, 52, 67, -9, 0, 5051];
let max = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}

console.log("\nTask 2:");
console.log("Array =", array, ", Max =", max);

// Завдання 3

let evenCount = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        evenCount++;
    }
}

console.log("\nTask 3:");
console.log("Array =", array, ", Even numbers =", evenCount);

// Завдання 4

console.log("\nTask 4:");
console.log("Array =", array, ", Numbers > 10:");

for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
        console.log(array[i]);
    }
}

// Завдання 5

const multiplier = 13;

console.log("\nTask 5:");
console.log("Array =", array, ", Multiplier =", multiplier);
console.log("Result:");

for (let i = 0; i < array.length; i++) {
    console.log(array[i] * multiplier);
}

// Завдання 6

const randomArray = [];
for (let i = 0; i < 13; i++) {
    randomArray.push(Math.floor(Math.random() * 152) + 1);
}

console.log("\nTask 6:");
console.log("Random array =", randomArray);
console.log("Even numbers:");

for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
    }
}

// Завдання 7

const num = prompt("Type number for factorial:", 7);
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log("\nTask 7:");
console.log(num + "! =", factorial);