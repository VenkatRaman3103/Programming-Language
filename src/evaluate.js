import { environment } from './standard-library.js';

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

export const evaluate = (node) => {
    if (node.type == 'CallExpression') {
        return apply(node);
    }

    if (node.type == 'Identifier') {
        return getIdentifier(node);
    }

    if (node.value) return node.value;
};
