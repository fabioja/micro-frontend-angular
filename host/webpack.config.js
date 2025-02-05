const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  output: {
    uniqueName: "host",
    publicPath: "http://localhost:4100/",
  },
  optimization: { runtimeChunk: false },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        //mfe1: "mfe1@http://localhost:4201/remoteEntry.js",
      },
      exposes: {     
        './BannerComponent': './src/app/app.component.ts'
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};