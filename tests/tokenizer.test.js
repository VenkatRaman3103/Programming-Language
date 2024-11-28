const { tokenizer } = require('../src/tokenizer');

describe('Tokenizer', () => {
    it('should return an array of tokens', () => {
        expect(Array.isArray(tokenizer('hello world'))).toBe(true);
    });

    it('should tokenize a pair of parentheses', () => {
        const input = '()';
        const output = [
            {
                type: 'Parenthesis',
                value: '(',
            },
            {
                type: 'Parenthesis',
                value: ')',
            },
        ];

        expect(tokenizer(input)).toEqual(output);
    });
});
