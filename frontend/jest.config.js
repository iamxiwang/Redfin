module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
        '\\.css$': '<rootDir>/fileTransformer.js',
    },
        moduleNameMapper: {
            '\\.(css|less)$': 'identity-obj-proxy',
        },
        
        testEnvironment: "jsdom"
        
};