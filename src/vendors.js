const deps = require('../package.json').dependencies;

module.exports = {
  vendors: Object.keys(deps),
};
