let child_process = require("child_process");
let path = require("path");

let childFile = path.resolve(__dirname, "./child.js");

let ls = child_process.spawn("node", [childFile, "-n", "10", "-t", "300"], {
  stdio: ["pipe", "pipe", "pipe"]
  // stdio: ['inherit', 'inherit', 'inherit'] // 子进程共享
});

ls.stdout.on("data", data => {
  console.log("data", data.toString());
});
ls.stderr.on("data", data => {
  console.log("err", data.toString());
});
ls.on("close", code => {
  console.log("close", code);
});


