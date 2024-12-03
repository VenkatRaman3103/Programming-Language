import { traverse } from '../src/traverse';

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
                    node.name = 'hello world';
                },
            },
            NumericLiteral: {
                exit: (node) => {
                    node.value = node.value * 2;
                },
            },
        };

        traverse(ast, visitor);

        expect(ast.name).toBe('hello world');
    });

    it('should traverse all the nodes in the ast tree and should double the number aka numeric literals', () => {
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
                    node.name = 'hello world';
                },
            },
            NumericLiteral: {
                exit: (node) => {
                    node.value = node.value * 2;
                },
            },
        };

        traverse(ast, visitor);

        expect(ast.arguments[0].value).toBe(24);
        expect(ast.arguments[1].value).toBe(12);
    });
});
