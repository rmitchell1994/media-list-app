const fs = require("fs");
const process = require("process");
const { gitHash } = require("../build-utils/git-hash.js");

module.exports = (options) => {
  const mode = options.webpackConfig.mode || "development";
  const filePath = fs
    .readFileSync(`${process.cwd()}/src/index.html`)
    .toString();

  const config = fs.readFileSync(`${process.cwd()}/config/${mode}.json`);
  const gitShortHash = gitHash();
  const parsedIndex = filePath
    .replace("__GLOBAL_CONFIG__", `<script> const CONFIG = ${config} </script>`)
    .replace("__RELEASE_HASH__", gitShortHash);

  return parsedIndex;
};
