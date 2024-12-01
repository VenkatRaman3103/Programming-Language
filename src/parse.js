const { isOpeningParenthesis, isClosingParenthesis } = require('./identify');
const { pop, peek } = require('./utils');

const parenthesize = (tokens) => {
    const token = pop(tokens);

    if (isOpeningParenthesis(token.value)) {
        const expression = [];

        while (!isClosingParenthesis(peek(tokens).value)) {
            expression.push(parenthesize(tokens));
        }

        pop(tokens);

        return expression;
    }

    return token;
};

function parse(tokens) {
    if (Array.isArray(tokens)) {
        const [first, ...rest] = tokens;

        return {
            type: 'CallExpression',
            name: first.value,
            arguments: rest.map(parse),
        };
    }

    const token = tokens;

    if (token.type == 'Number') {
        return {
            type: 'NumericLiteral',
            value: token.value,
        };
    }

    if (token.type == 'String') {
        return {
            type: 'StringLiteral',
            value: token.value,
        };
    }

    if (token.type == 'Identifier') {
        return {
            type: 'Identifier',
            value: token.value,
        };
    }
}

const tokens = [
    { type: 'Parenthesis', value: '(' },
    { type: 'Name', value: 'add' },
    { type: 'Number', value: 2 },
    { type: 'Number', value: 3 },
    { type: 'Parenthesis', value: '(' },
    { type: 'Name', value: 'add' },
    { type: 'Number', value: 2 },
    { type: 'Number', value: 3 },
    { type: 'Parenthesis', value: ')' },
    { type: 'Parenthesis', value: ')' },
];

// console.log(parse(parenthesize(tokens)));

module.exports = {
    parse: (tokens) => parse(parenthesize(tokens)),
};
