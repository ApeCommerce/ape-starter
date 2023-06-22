const welcomeBundle = require('./bundle/welcome');

const boot = {
  bundles: async () => [welcomeBundle],
};

module.exports = boot;
