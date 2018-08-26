const deps = require('../package.json').dependencies;

delete deps['react-scripts'];

module.exports = Object.keys(deps);
