//fileTransformer.js

//It is responsible for transforming different file types, such as CSS files, during the testing process. In this case, the transformer returns an empty module for CSS files, allowing Jest to handle CSS imports without throwing errors.

module.exports = {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
      // The output is always the same.
        return 'cssTransform';
    },
};