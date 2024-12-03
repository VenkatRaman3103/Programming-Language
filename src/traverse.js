const traverseNode = (node, parent, visitor) => {
    const method = visitor[node.type];

    if (method && method.enter) {
        method.enter(node);
    }

    if (node.arguments) {
        traverseArray(node.arguments, node, visitor);
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
    traverseNode(node, null, visitor);
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

// console.log(traverse(ast, visitor));

// console.log(ast);

module.exports = { traverse };
