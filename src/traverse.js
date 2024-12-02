// const traverseNode = ({ node, parent, visitor }) => {
//     const methods = visitor[node.type];
//     console.log(methods);
//
//     if (methods && methods.enter) {
//         methods.enter({ node, parent });
//     }
//
//     if (node.arguments) {
//         traverseArray({ array: node.arguments, parent: node, visitor });
//     }
//
//     if (methods && methods.exit) {
//         methods.exit({ node, parent });
//     }
// };
//
// const traverseArray = ({ array, parent, visitor }) => {
//     array.forEach((node) => {
//         traverseNode({ node, parent, visitor });
//     });
// };
//
// const traverse = (node, visitor) => {
//     traverseNode({ node, parent: null, visitor });
// };

const traverseNode = (node, parent, visitor) => {
    const method = visitor[node.type];

    if (method && method.enter) {
        method.enter(node);
    }

    if (node.arguments) {
        traverseArray((array = node.arguments), (parent = node), visitor);
    }

    // base case
    if (method && method.exit) {
        method.exit(node);
    }
};

const traverseArray = (array, parent, visitor) => {
    array.map((node) => traverseNode(node, parent, visitor));
};

const traverse = (node, visitor) => {
    traverseNode(node, (parent = null), visitor);
};

const ast = {
    type: 'CallExpression',
    name: 'add',
    arguments: [
        { type: 'NumericLiteral', value: 12 },
        { type: 'NumericLiteral', value: 6 },
    ],
};

const visitor = {
    // entering
    CallExpression: {
        enter: (node) => {
            node.name = 'subtract';
        },
    },
    // exit
    NumericLiteral: {
        exit: (node) => {
            node.value = node.value * 2;
        },
    },
};

// const testNode = { type: 'NumericLiteral', value: 12 };

console.log(traverse(ast, visitor));

console.log(ast);
// console.log(testNode);

// const visitor = {
//     CallExpression: {
//         enter({ node }) {
//             if (node.name === 'add') {
//                 node.name = 'subtract';
//             }
//         },
//     },
//     NumericLiteral: {
//         exit({ node }) {
//             node.value = node.value * 2;
//         },
//     },
// };

// traverse(ast, visitor);

module.exports = { traverse };
