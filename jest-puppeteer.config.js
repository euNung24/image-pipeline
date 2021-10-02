module.exports = {
  preset: "jest-puppeteer",
  server: {
    command: "yarn start", // webpack-dev-server --config ./webpack.config.js
    port: 3000,
  },
};
