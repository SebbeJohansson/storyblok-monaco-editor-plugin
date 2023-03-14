const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const path = require("path");

module.exports = {
  configureWebpack: {
    output: {
      filename: 'export.js'
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
      new MonacoWebpackPlugin({
        languages: ["python"],//configure your languages here
        features: ["coreCommands", "find"],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set(
      "vscode",
      path.resolve(
        "./node_modules/monaco-languageclient/lib/vscode-compatibility"
      )
    );
  },
  filenameHashing: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  css: {
    extract: false
  }
}