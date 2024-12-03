"use strict";

var traverseNode = function traverseNode(node, parent, visitor) {
  var method = visitor[node.type];
  if (method && method.enter) {
    method.enter(node);
  }
  if (node.arguments) {
    traverseArray(node.arguments, node, visitor);
  }

  // base case
  if (method && method.exit) {
    method.exit(node);
  }
};
var traverseArray = function traverseArray(array, parent, visitor) {
  array.map(function (node) {
    return traverseNode(node, parent, visitor);
  });
};
var traverse = function traverse(node, visitor) {
  traverseNode(node, null, visitor);
};
var ast = {
  type: 'CallExpression',
  name: 'add',
  arguments: [{
    type: 'NumericLiteral',
    value: 12
  }, {
    type: 'NumericLiteral',
    value: 6
  }]
};
var visitor = {
  // entering
  CallExpression: {
    enter: function enter(node) {
      node.name = 'subtract';
    }
  },
  // exit
  NumericLiteral: {
    exit: function exit(node) {
      node.value = node.value * 2;
    }
  }
};

// const testNode = { type: 'NumericLiteral', value: 12 };

// console.log(traverse(ast, visitor));

// console.log(ast);

module.exports = {
  traverse: traverse
};