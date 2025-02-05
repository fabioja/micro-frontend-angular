const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    uniqueName: "hostmain",
    publicPath: "http://localhost:4200/",
  },
  optimization: { runtimeChunk: false },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostmain",
      remotes: {
        //mfe1: "mfe1@http://localhost:4201/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};