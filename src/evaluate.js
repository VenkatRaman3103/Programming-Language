const { environment } = require('./standard-library');

const apply = (node) => {
    const fn = environment[node.name];
    const args = node.arguments.map(evaluate);
    console.log(args);
    return fn(...args);
};

const evaluate = (node) => {
    if (node.type == 'CallExpression') {
        return apply(node);
    }

    if (node.value) return node.value;
};

const ast = {
    type: 'CallExpression',
    name: 'add',
    arguments: [
        { type: 'NumericLiteral', value: 2 },
        { type: 'NumericLiteral', value: 3 },
        {
            type: 'CallExpression',
            name: 'subtract',
            arguments: [
                { type: 'NumericLiteral', value: 5 },
                { type: 'NumericLiteral', value: 4 },
            ],
        },
    ],
};

console.log(evaluate(ast));

module.exports = {
    evaluate,
};
