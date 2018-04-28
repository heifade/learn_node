const commander = require("commander");
const util = require("util");

commander
  .version("1.0.1")
  .option("-n, number <n>", "总共次数", parseInt)
  .option("-t, time <n>", "间隔时间", parseInt)
  .parse(process.argv);

async function wait(time) {
  await util.promisify(setTimeout)(time);
}

async function run() {
  let n = commander.number;
  while (n > 0) {
    console.log("222");

    await wait(commander.time);
    n--;
  }
}

run();

// process.exitCode = 0;
