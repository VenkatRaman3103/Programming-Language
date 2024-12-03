export default {
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(@your-project-name)/)'],
    extensionsToTreatAsEsm: ['.js'],
};
