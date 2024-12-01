const { pop } = require('./utils');

const parenthesize = () => {};

function parse(tokens) {
    const token = pop(tokens);

    if (token.type == 'Number') {
        return {
            type: 'NumbericLiteral',
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

module.exports = {
    parse,
};
