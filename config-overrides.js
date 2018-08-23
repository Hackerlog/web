const webpack = require('webpack');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = (config, env) => {
  // Split out the vendor bundle
  // config.plugins.push(
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     minChunks: ({ resource }) => /node_modules/.test(resource),
  //   })
  // );

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
