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

    it('should skip the whitespaces', () => {
        const whitespaces = '   ';
        const output = [];

        expect(tokenizer(whitespaces)).toStrictEqual([]);
    });

    it('should parse strings', () => {
        const letters = 'abc';

        const output = [];

        for (let i = 0; i < letters.length; i++) {
            const character = letters[i];

            output.push({
                type: 'Letter',
                value: character,
            });
        }

        expect(tokenizer(letters)).toEqual(output);
    });

    it('should parse the number', () => {
        const numbers = '123';
        const output = [];

        for (let i = 0; i < numbers.length; i++) {
            const character = numbers[i];

            output.push({
                type: 'Number',
                value: character,
            });
        }

        expect(tokenizer(numbers)).toEqual(output);
    });
});
