const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { injectBabelPlugin } = require('react-app-rewired');
const rewireVendorSplitting = require('react-app-rewire-vendor-splitting');


module.exports = (config, env) => {

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
