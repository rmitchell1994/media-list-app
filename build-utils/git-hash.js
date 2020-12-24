const childProcess = require("child_process");

const gitHash = () =>
  childProcess.execSync("git rev-parse HEAD").toString().slice(0, 7);

module.exports = {
  gitHash,
};
