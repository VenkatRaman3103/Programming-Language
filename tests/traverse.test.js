const { traverse } = require('../src/traverse');

describe(traverse, () => {
    it('should traverse all the nodes in the ast tree and should able to change the values', () => {
        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                { type: 'NumericLiteral', value: 12 },
                { type: 'NumericLiteral', value: 6 },
            ],
        };

        const visitor = {
            CallExpression: {
                enter: (node) => {
                    node.name = 'subtract';
                },
            },
            NumericLiteral: {
                exit: (node) => {
                    node.value = node.value * 2;
                },
            },
        };

        traverse(ast, visitor);

        expect(ast.name).toBe('subtract');
    });
});
