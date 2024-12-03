"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTokens = void 0;
var _identify = require("./identify.js");
var _utils = require("./utils.js");
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _parenthesize = function parenthesize(tokens) {
  var token = (0, _utils.pop)(tokens);
  if ((0, _identify.isOpeningParenthesis)(token.value)) {
    var expression = [];
    while (!(0, _identify.isClosingParenthesis)((0, _utils.peek)(tokens).value)) {
      expression.push(_parenthesize(tokens));
    }
    (0, _utils.pop)(tokens);
    return expression;
  }
  return token;
};
function parse(tokens) {
  if (Array.isArray(tokens)) {
    var _tokens = _toArray(tokens),
      first = _tokens[0],
      rest = _tokens.slice(1);
    return {
      type: 'CallExpression',
      name: first.value,
      arguments: rest.map(parse)
    };
  }
  var token = tokens;
  if (token.type == 'Number') {
    return {
      type: 'NumericLiteral',
      value: token.value
    };
  }
  if (token.type == 'String') {
    return {
      type: 'StringLiteral',
      value: token.value
    };
  }
  if (token.type == 'Identifier') {
    return {
      type: 'Identifier',
      value: token.value
    };
  }
}

// Exporting parse function after applying parenthesize
var parseTokens = exports.parseTokens = function parseTokens(tokens) {
  return parse(_parenthesize(tokens));
};