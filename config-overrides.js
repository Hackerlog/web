const { resolve } = require('path');
const { readFileSync } = require('fs');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { getLoader } = require('react-app-rewired');
const tsImportPluginFactory = require('ts-import-plugin');
const rewireLess = require('react-app-rewire-less');
const convertVars = require('less-vars-to-js');

const vars = resolve(__dirname, './src/assets/styles/vars.less');

module.exports = (config, env) => {
  if (process.env.ANALYZE) {
    config.plugins.push(new BundleAnalyzer());
  }

  const tsLoader = getLoader(
    config.module.rules,
    rule => rule.loader && typeof rule.loader === 'string' && rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory({
          libraryDirectory: 'es',
          libraryName: 'antd',
          style: true,
        }),
      ],
    }),
  };

  config = rewireLess.withLoaderOptions({
    modifyVars: convertVars(readFileSync(vars, 'utf8')),
  })(config, env);

  return config;
};
