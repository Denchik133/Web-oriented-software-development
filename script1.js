console.log("JS LOADED");
console.log("BUTTON:", document.getElementById("buttonn"));

// Завдання 1

function greet(name) {
    console.log("\nTask 1:");
    console.log("Привіт, " + name + "!");
}
greet("Андрій");

// Завдання 2

function square(num) {
    return num * num;
}
console.log("\nTask 2:");
console.log("square(7) =", square(52));

// Завдання 3

const perimeter = (a, b) => 2 * (a + b);
console.log("\nTask 3:");
console.log("perimeter(5, 2) =", perimeter(5, 2));

// Завдання 4

function calc(a, b, operation) {
    return operation(a, b);
}

function add(x, y) { return x + y; }
function mult(x, y) { return x * y; }
function mminus(x, y) { return x - y; }
function div(x, y) { return x / y; }

console.log("\nTask 4:");
console.log("calc(5, 2, add) =", calc(5, 2, add));
console.log("calc(5, 2, mult) =", calc(5, 2, mult));
console.log("calc(5, 2, mminus) =", calc(5, 2, mminus));
console.log("calc(5, 2, div) =", calc(5, 2, div));

// Завдання 5

const user = {
    name: "Alex",
    age: 20
};
console.log("\nTask 5:");
console.log("User " + user.name + " is " + user.age + " years old");

// Завдання 6

console.log("\nTask 6:");
const person = {
    name: "Olena",
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet();

// Завдання 7

console.log("\nTask 7:");
document.getElementById("button").onclick = function () {
    this.textContent = "Натиснуто!";
};

// Завдання 8

console.log("\nTask 8:");
const items = [
    { title: "Car", price: 10000 },
    { title: "Phone", price: 500 },
    { title: "Book", price: 1500 },
    { title: "Knife", price: 5200 }
];

document.getElementById("show").onclick = function () {
    let rand = Math.floor(Math.random() * items.length);
    document.getElementById("result").textContent =
        items[rand].title + " — $" + items[rand].price;
};

// Завдання 9

console.log("\nTask 9:");
let count = 0;

document.getElementById("counterButton").onclick = function () {
    count++;
    document.getElementById("count").textContent = count;
};

// Завдання 10

const array = [1, 5, 12, -3, 40, 8, 7];

const filtered = array.filter(function (n) {
    return n > 10;
});

console.log("\nTask 10:");
console.log("Original:", array);
console.log("Filtered (>10):", filtered);