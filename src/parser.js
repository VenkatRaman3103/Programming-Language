// parsers
const LETTER = /[a-zA-Z]/;
const WHITESPACE = /\s+/;
const NUMBER = /^[0-9]+$/;
const OPERATORS = ['+', '-', '*', '/', '%'];

// checking the characters
const isLetter = (input) => LETTER.test(input);
const isNumber = (input) => NUMBER.test(input);
const isWhitespace = (input) => WHITESPACE.test(input);
const isOperators = (input) => OPERATORS.includes(input);
