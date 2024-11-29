const {
    isLetter,
    isNumber,
    isWhitespace,
    isOperators,
    isOpeningParenthesis,
    isClosingParenthesis,
    isParenthesis,
} = require('./parser');

function tokenizer(input) {
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

        if (isWhitespace(input)) {
            curser++;
            continue;
        }

        if (isLetter(character)) {
            tokens.push({
                type: 'Letter',
                value: character,
            });
            curser++;
            continue;
        }

        if (isNumber(character)) {
            tokens.push({
                type: 'Number',
                value: character,
            });

            curser++;
            continue;
        }

        curser++;
    }

    return tokens;
}

// console.log(tokenizer('sdf'));

module.exports = {
    tokenizer,
};
