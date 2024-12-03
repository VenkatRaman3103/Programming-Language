import * as getGenerate from '@babel/generator';
const generate = getGenerate.default;
import { traverse } from '../src/traverse.js';

const babelVisitor = {
    CallExpression: {
        enter: (node) => {
            node.callee = { type: 'Identifier', name: node.name };
        },
    },
};

export const toJavaScript = (ast) => {
    traverse(ast, babelVisitor);
    return generate(ast).code;
};
