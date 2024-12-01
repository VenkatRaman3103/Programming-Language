const { isNumber } = require('../src/identify');
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
        const letters = 'a b c';

        const output = [];

        for (let i = 0; i < letters.length; i++) {
            const character = letters[i];

            if (character != ' ') {
                output.push({
                    type: 'Letter',
                    value: character,
                });
            }
        }

        expect(tokenizer(letters)).toEqual(output);
    });

    it('should parse the numbers individually', () => {
        const numbers = '1 2 3';
        const output = [];

        for (let i = 0; i < numbers.length; i++) {
            const character = numbers[i];

            if (character != ' ') {
                output.push({
                    type: 'Number',
                    value: character,
                });
            }
        }

        expect(tokenizer(numbers)).toEqual(output);
    });

    it('should parse the number', () => {
        const numbers = '123';
        const output = [];

        output.push({
            type: 'Number',
            value: '123',
        });

        expect(tokenizer(numbers)).toEqual(output);
    });

    it('should parse sequence of characters', () => {
        const sequenceOfCharacters = 'asdf12345()';

        const output = [
            { type: 'Letter', value: 'asdf' },
            { type: 'Number', value: '12345' },
            { type: 'Parenthesis', value: '(' },
            { type: 'Parenthesis', value: ')' },
        ];

        expect(tokenizer(sequenceOfCharacters)).toStrictEqual(output);
    });

    it('should parse multiple digits', () => {
        const sequenceOfNumber = '(11 22 33)';

        const output = [
            { type: 'Parenthesis', value: '(' },
            { type: 'Number', value: '11' },
            { type: 'Number', value: '22' },
            { type: 'Number', value: '33' },
            { type: 'Parenthesis', value: ')' },
        ];

        expect(tokenizer(sequenceOfNumber)).toStrictEqual(output);
    });

    it('should parse string', () => {
        const string = '"string"';

        const output = [
            {
                type: 'String',
                value: 'string',
            },
        ];

        expect(tokenizer(string)).toStrictEqual(output);
    });
});
