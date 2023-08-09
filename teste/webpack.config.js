const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path")


module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "vivo-app-container",
    projectName: "teste",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {

    target: "node",
    mode: "development",
    entry: path.resolve(process.cwd(), "src/node-entry.js"),
    output: {
      library: "vivo",
      libraryTarget: "var",
      filename: "teste-root-config.js",
      globalObject: `typeof self !== 'undefined' ? self : this`
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
