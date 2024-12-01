const { environment } = require('./standard-library');

const apply = (node) => {
    const fn = environment[node.name];
    const args = node.arguments.map(evaluate);
    return fn(...args);
};

const evaluate = (node) => {
    if (node.type == 'CallExpression') {
        return apply(node);
    }

    if (node.value) return node.value;
};

module.exports = {
    evaluate,
};
