const { parse } = require('../src/parse');

describe(parse, () => {
    it('should return the token with numericLiteral type', () => {
        const tokens = [{ type: 'Number', value: 2 }];

        const output = { type: 'NumbericLiteral', value: 2 };

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
});
