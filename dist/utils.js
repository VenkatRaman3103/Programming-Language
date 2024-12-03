"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pop = exports.pipe = exports.peek = void 0;
var peek = exports.peek = function peek(input) {
  return input[0];
};
var pop = exports.pop = function pop(input) {
  return input.shift();
};
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return function (value) {
    return funcs.reduce(function (value, func) {
      if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
      }
      return func(value);
    }, value);
  };
};