import { traverse } from './traverse.js';

export const transform = (node) => {
    const visitor = {
        CallExpression: {
            enter(node) {
                if (specialForm[node.name]) {
                    specialForm[node.name](node);
                }
            },
        },
    };

    return traverse(node, visitor);
};

const ast = {
    type: 'CallExpression',
    name: 'declare',
    arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
    ],
};

const specialForm = {
    declare(node) {
        const identifier = node.arguments[0];
        const assigment = node.arguments[1];

        node.type = 'VariableDeclaration';

        node.identifier = identifier;
        node.assigment = assigment;

        delete node.name;
        delete node.arguments;
    },
};

transform(ast);

console.log(ast);

export const specialFoms = {};
