const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = config => {
  if (process.env.ANALYZE) {
    config.plugins.push(new BundleAnalyzer());
  }

  return config;
};
