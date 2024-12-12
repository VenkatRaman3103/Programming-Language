import {
    isLetter,
    isNumber,
    isWhitespace,
    isOperators,
    isOpeningParenthesis,
    isClosingParenthesis,
    isParenthesis,
    isQuote,
} from './identify.js';

export function tokenizer(input) {
    let tokens = [];
    let curser = 0;

    while (curser < input.length) {
        const character = input[curser];

        if (isParenthesis(character)) {
            tokens.push({
                type: 'Parenthesis',
                value: character,
            });

            curser++;
            continue;
        }

        if (isWhitespace(character)) {
            curser++;
            continue;
        }

        if (isLetter(character)) {
            let word = character;

            curser++;

            while (isLetter(input[curser]) && curser < input.length) {
                word += input[curser];
                curser++;
            }

            tokens.push({
                type: 'Letter',
                value: word,
            });

            continue;
        }

        if (isNumber(character)) {
            let numbers = character;

            curser++;

            while (isNumber(input[curser]) && curser < input.length) {
                numbers += input[curser];
                curser++;
            }

            tokens.push({
                type: 'Number',
                value: numbers,
            });

            continue;
        }

        if (isQuote(character)) {
            let string = '';

            curser++;

            while (!isQuote(input[curser]) && curser < input.length) {
                string += input[curser];
                curser++;
            }

            tokens.push({
                type: 'String',
                value: string,
            });

            curser++;
            continue;
        }

        throw new Error(`${character} is not a valid syntax`);
    }

    return tokens;
}

console.log(tokenizer('(123 and "string")'));
// console.log(tokenizer('123 asd'), '//<==');
// console.log(tokenizer('"some123"'));
