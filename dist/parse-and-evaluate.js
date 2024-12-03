"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAndEvaluate = void 0;
var _evaluate = require("./evaluate.js");
var _parse = require("./parse.js");
var _tokenizer = require("./tokenizer.js");
var _utils = require("./utils.js");
var parseAndEvaluate = exports.parseAndEvaluate = (0, _utils.pipe)(_tokenizer.tokenizer, _parse.parseTokens, _evaluate.evaluate);