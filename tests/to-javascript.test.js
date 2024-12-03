import { toJavaScript } from '../src/to-javascript';

describe(toJavaScript, () => {
    it('shold convert the teddy code to the javascript code', () => {
        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                { type: 'NumericLiteral', value: 12 },
                { type: 'NumericLiteral', value: 6 },
            ],
        };

        const output = 'add(12, 6)';

        expect(toJavaScript(ast)).toBe(output);
    });

    it('shold convert the teddy code to the javascript code test 2', () => {
        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                {
                    type: 'CallExpression',
                    name: 'subtract',
                    arguments: [
                        { type: 'NumericLiteral', value: 24 },
                        { type: 'NumericLiteral', value: 12 },
                    ],
                },
                { type: 'NumericLiteral', value: 6 },
            ],
        };

        const output = 'add(subtract(24, 12), 6)';

        expect(toJavaScript(ast)).toBe(output);
    });
});
