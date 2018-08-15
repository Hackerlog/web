const { resolve } = require('path');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { injectBabelPlugin } = require('react-app-rewired');
const { updateConfig } = require('react-app-rewire-antd-theme');

const vars = resolve(__dirname, './src/assets/styles/vars.less');
const options = {
  varFile: vars,
};

module.exports = (config, env) => {
  if (process.env.ANALYZE) {
    // Run bundle analyzer
    config.plugins.push(new BundleAnalyzer());
  }

  // Use Ant Design
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd-import'],
    config
  );

  // Remove data-testid properties
  config = injectBabelPlugin(['react-remove-properties', { properties: ['data-testid'] }], config);

  // Add decorator support
  config = injectBabelPlugin(['transform-decorators-legacy'], config);

  // Use custom Ant Design variables
  config = updateConfig(config, env, options);

  return config;
};
