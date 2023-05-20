//babel.config.js

// This file provides the Babel configuration for transforming the code during the testing process. It ensures that your code is transpiled correctly, allowing you to use modern JavaScript syntax .jsx file and React features in your test files.

module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-react',
    ],
};