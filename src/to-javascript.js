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
    // console.log(generate);
    return generate(ast).code;
};

// const ast = {
//     type: 'CallExpression',
//     name: 'variable',
//     arguments: [
//         { type: 'NumericLiteral', value: 12 },
//         { type: 'NumericLiteral', value: 6 },
//     ],
// };

// console.log(toJavaScript(ast), '<==');
// console.log(ast);
