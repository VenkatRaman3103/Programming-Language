"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.environment = void 0;
var addition = function addition(a, b) {
  return a + b;
};
var subtraction = function subtraction(a, b) {
  return a - b;
};
var multiplication = function multiplication(a, b) {
  return a * b;
};
var modulos = function modulos(a, b) {
  return a % b;
};
var division = function division(a, b) {
  return a / b;
};
var all = function all(fn) {
  return function () {
    for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
      list[_key] = arguments[_key];
    }
    return list.map(Number).reduce(fn);
  };
};
var add = all(addition);
var subtract = all(subtraction);
var multiply = all(multiplication);
var modulo = all(modulos);
var divide = all(division);
var log = console.log;
var pi = Math.PI;
var max = function max() {
  return Math.max.apply(Math, arguments);
};
var min = function min() {
  return Math.min.apply(Math, arguments);
};
var environment = exports.environment = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  modulo: modulo,
  divide: divide,
  log: log,
  pi: pi,
  max: max,
  min: min
};