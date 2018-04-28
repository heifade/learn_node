const util = require("util");

module.exports = async function wait(time) {
  await util.promisify(setTimeout)(time);
};
