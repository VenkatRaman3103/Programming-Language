const { evaluate } = require('../src/evaluate');

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
});
