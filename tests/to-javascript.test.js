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
});
