const webpack = require('webpack');
const { resolve } = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { injectBabelPlugin } = require('react-app-rewired');
const rewireVendorSplitting = require('react-app-rewire-vendor-splitting');
const forIn = require('lodash/forIn');

const aliases = {
  Assets: resolve(__dirname, 'src/assets/'),
  Modules: resolve(__dirname, 'src/modules/'),
  Pages: resolve(__dirname, 'src/pages/'),
  Services: resolve(__dirname, 'src/services/'),
  Utils: resolve(__dirname, 'src/utils/'),
  Src: resolve(__dirname, 'src/'),
  Theme: resolve(__dirname, 'src/modules/theme/'),
};
module.exports = (config, env) => {
  config = rewireAlias(config, aliases);

  // Split out the vendor bundle
  config = rewireVendorSplitting(config, env);

  // Add decorator support
  config = injectBabelPlugin(['transform-decorators-legacy'], config);

  if (process.env.ANALYZE) {
    // Run bundle analyzer
    config.plugins.push(new BundleAnalyzer());
  }

  // Remove data-testid properties
  config = injectBabelPlugin(['react-remove-properties', { properties: ['data-testid'] }], config);

  return config;
};

const rewireAlias = (config, a) => {
  const resolve = (config.resolve = config.resolve || {});

  const alias = (resolve.alias = resolve.alias || {});

  const rootRegex = /^\~\//;
  forIn(a, (value, key) => {
    if (rootRegex.test(value)) {
      value = resolve(value.replace(rootRegex, './'));
    }

    alias[key] = value;
  });

  return config;
};
