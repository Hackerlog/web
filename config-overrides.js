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
    config.plugins.push(new BundleAnalyzer());
  }

  // config = injectBabelPlugin(
  //   ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  //   config
  // );

  // config = updateConfig(config, env, options);

  return config;
};
