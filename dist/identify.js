"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWhitespace = exports.isQuote = exports.isParenthesis = exports.isOperators = exports.isOpeningParenthesis = exports.isNumber = exports.isLetter = exports.isClosingParenthesis = void 0;
// parsers
var LETTER = /[a-zA-Z]/;
var WHITESPACE = /\s+/;
var NUMBER = /^[0-9]+$/;
var OPERATORS = ['+', '-', '*', '/', '%'];

// checking the characters
var isLetter = exports.isLetter = function isLetter(input) {
  return LETTER.test(input);
};
var isNumber = exports.isNumber = function isNumber(input) {
  return NUMBER.test(input);
};
var isWhitespace = exports.isWhitespace = function isWhitespace(input) {
  return WHITESPACE.test(input);
};
var isOperators = exports.isOperators = function isOperators(input) {
  return OPERATORS.includes(input);
};
var isOpeningParenthesis = exports.isOpeningParenthesis = function isOpeningParenthesis(intput) {
  return intput == '(';
};
var isClosingParenthesis = exports.isClosingParenthesis = function isClosingParenthesis(intput) {
  return intput == ')';
};
var isParenthesis = exports.isParenthesis = function isParenthesis(input) {
  return isOpeningParenthesis(input) || isClosingParenthesis(input);
};
var isQuote = exports.isQuote = function isQuote(input) {
  return input == '"';
};