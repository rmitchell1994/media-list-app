const cucumber = require("cypress-cucumber-preprocessor").default;
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = (on) => {
  on(
    "file:preprocessor",
    webpackPreprocessor({
      options: require("../../webpack.config"),
    })
  );
  on("file:preprocessor", cucumber());
};
