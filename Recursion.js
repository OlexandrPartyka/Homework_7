function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 8;

const factResult = factorial(n);
const fiboResult = fibonacci(n);

console.log(`Факторіал ${n} = ${factResult}`);
console.log(`Число Фібоначчі (${n}-те) = ${fiboResult}`);
