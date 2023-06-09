const { types: t } = require('@babel/core');

module.exports = function() {
    return {
        visitor: {
            CallExpression(path) {
                if (t.isMemberExpression(path.node.callee) &&
                    t.isIdentifier(path.node.callee.object, { name: 'console' }) &&
                    t.isIdentifier(path.node.callee.property, { name: 'log' })) {
                    path.remove();
                }
            }
        }
    };
};
