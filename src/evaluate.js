const { environment } = require('./standard-library');

const apply = (node) => {
    const fn = environment[node.name];
    const args = node.arguments.map(evaluate);
    return fn(...args);
};

const getIdentifier = (node) => {
    const fn = environment[node.name];

    if (fn) {
        return fn;
    }
};

const evaluate = (node) => {
    if (node.type == 'CallExpression') {
        return apply(node);
    }

    if (node.type == 'Identifier') {
        return getIdentifier(node);
    }

    if (node.value) return node.value;
};

const ast = {
    type: 'CallExpression',
    name: 'max',
    arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
    ],
};

console.log(getIdentifier(ast));
console.log(evaluate(ast));

module.exports = {
    evaluate,
};
