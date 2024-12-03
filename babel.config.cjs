module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-proposal-export-default-from',
    ],
};
