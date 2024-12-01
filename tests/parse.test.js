const { parse } = require('../src/parse');

describe(parse, () => {
    it('should return the token with numericLiteral type', () => {
        const tokens = [{ type: 'Number', value: 2 }];

        const output = { type: 'NumericLiteral', value: 2 };

        expect(parse(tokens)).toStrictEqual(output);
    });

    it('should return the token with stringLiteral type', () => {
        const tokens = [{ type: 'String', value: 'hello world' }];

        const output = { type: 'StringLiteral', value: 'hello world' };

        expect(parse(tokens)).toStrictEqual(output);
    });

    it('should return the token with Identifiew type', () => {
        const tokens = [{ type: 'Identifier', value: 'x' }];

        const output = { type: 'Identifier', value: 'x' };

        expect(parse(tokens)).toStrictEqual(output);
    });

    it('should return an AST for a basic data structure', () => {
        const tokens = [
            { type: 'Parenthesis', value: '(' },
            { type: 'Name', value: 'add' },
            { type: 'Number', value: 2 },
            { type: 'Number', value: 3 },
            { type: 'Parenthesis', value: ')' },
        ];

        const ast = {
            type: 'CallExpression',
            name: 'add',
            arguments: [
                { type: 'NumericLiteral', value: 2 },
                { type: 'NumericLiteral', value: 3 },
            ],
        };

        const result = parse(tokens);

        expect(result).toEqual(ast);
    });

    it('should return an AST for a nested data structure', () => {
        const tokens = [
            { type: 'Parenthesis', value: '(' },
            { type: 'Name', value: 'add' },
            { type: 'Number', value: 2 },
            { type: 'Number', value: 3 },
            { type: 'Parenthesis', value: '(' },
            { type: 'Name', value: 'subtract' },
            { type: 'Number', value: 4 },
            { type: 'Number', value: 2 },
            { type: 'Parenthesis', value: ')' },
            { type: 'Parenthesis', value: ')' },
        ];

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
                        { type: 'NumericLiteral', value: 4 },
                        { type: 'NumericLiteral', value: 2 },
                    ],
                },
            ],
        };

        const result = parse(tokens);

        expect(result).toEqual(ast);
    });
});
