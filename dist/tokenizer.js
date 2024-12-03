"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenizer = tokenizer;
var _identify = require("./identify.js");
function tokenizer(input) {
  var tokens = [];
  var curser = 0;
  while (curser < input.length) {
    var character = input[curser];
    if ((0, _identify.isParenthesis)(character)) {
      tokens.push({
        type: 'Parenthesis',
        value: character
      });
      curser++;
      continue;
    }
    if ((0, _identify.isWhitespace)(character)) {
      curser++;
      continue;
    }
    if ((0, _identify.isLetter)(character)) {
      var word = character;
      curser++;
      while ((0, _identify.isLetter)(input[curser]) && curser < input.length) {
        word += input[curser];
        curser++;
      }
      tokens.push({
        type: 'Letter',
        value: word
      });
      continue;
    }
    if ((0, _identify.isNumber)(character)) {
      var numbers = character;
      curser++;
      while ((0, _identify.isNumber)(input[curser]) && curser < input.length) {
        numbers += input[curser];
        curser++;
      }
      tokens.push({
        type: 'Number',
        value: numbers
      });
      continue;
    }
    if ((0, _identify.isQuote)(character)) {
      var string = '';
      curser++;
      while (!(0, _identify.isQuote)(input[curser]) && curser < input.length) {
        string += input[curser];
        curser++;
      }
      tokens.push({
        type: 'String',
        value: string
      });
      curser++;
      continue;
    }
    throw new Error("".concat(character, " is not a valid syntax"));
  }
  return tokens;
}

// console.log(tokenizer('123 asd'), '//<==');
// console.log(tokenizer('"some123"'));