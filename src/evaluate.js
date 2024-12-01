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

const ast = { type: 'Identifier', name: 'pi' };
console.log(getIdentifier(ast));

module.exports = {
    evaluate,
};
