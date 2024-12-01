const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const modulos = (a, b) => a % b;
const division = (a, b) => a / b;

const all =
    (fn) =>
    (...list) =>
        list.reduce(fn);

const add = all(addition);
const subtract = all(subtraction);
const multiply = all(multiplication);
const modulo = all(modulos);
const divide = all(division);
const log = console.log;
const pi = Math.pi;

const environment = {
    add,
    subtract,
    multiply,
    modulo,
    divide,
    log,
    pi,
};

module.exports = {
    environment,
};
