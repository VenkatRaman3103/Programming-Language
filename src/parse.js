import { isOpeningParenthesis, isClosingParenthesis } from './identify.js';

import { pop, peek } from './utils.js';

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

// Exporting parse function after applying parenthesize
export const parseTokens = (tokens) => parse(parenthesize(tokens));
