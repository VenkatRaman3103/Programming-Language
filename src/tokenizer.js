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
        const char = input[curser];

        if (isParenthesis(char)) {
            tokens.push({
                type: 'Parenthesis',
                value: char,
            });

            curser++;
            continue;
        }

        curser++;
    }

    return tokens;
}

module.exports = {
    tokenizer,
};
