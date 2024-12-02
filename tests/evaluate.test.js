const { evaluate } = require('../src/evaluate.js');

describe(evaluate, () => {
    it('should able to evaluate single expression', () => {
        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                { type: 'NumericLiteral', value: 2 },
                { type: 'NumericLiteral', value: 3 },
            ],
        };

        expect(evaluate(ast)).toBe(5);
    });

    it('should able to evaluate mltiple expression', () => {
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

        expect(evaluate(ast)).toBe(6);
    });

    it('should able to look for the identifier', () => {
        const ast = { type: 'Identifier', name: 'pi' };

        expect(evaluate(ast)).toBe(3.141592653589793);
    });

    it('should able to find the maximum value from the arguments', () => {
        const ast = {
            type: 'CallExpression',
            name: 'max',
            arguments: [
                { type: 'NumericLiteral', value: 12 },
                { type: 'NumericLiteral', value: 6 },
            ],
        };

        expect(evaluate(ast)).toBe(12);
    });

    it('should able to find the minimum value from the arguments', () => {
        const ast = {
            type: 'CallExpression',
            name: 'min',
            arguments: [
                { type: 'NumericLiteral', value: 12 },
                { type: 'NumericLiteral', value: 6 },
            ],
        };

        expect(evaluate(ast)).toBe(6);
    });
});
