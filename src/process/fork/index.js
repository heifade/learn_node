const child_process = require("child_process");
const path = require("path");
const wait = require("../../util/wait");

let childFile = path.resolve(__dirname, "./child.js");

let ls = child_process.fork(childFile, ["-n", "10", "-t", "300"], {
  encoding: "utf8"
  // silent: true, 当此值为true时，则子进程中的 stdin、 stdout 和 stderr 会被导流到父进程中，此时可通过ls.stdout.on('data',fn) 来获取子进程的输出
});

ls.on("message", data => {
  console.log("message", data);
});

ls.on("close", code => {
  console.log("close", code);
});

// ls.stdout.on('data', (data) => {
//   console.log(data.toString());
// })

async function run() {
  let n = 10;
  while (n > 0) {
    // 向子进程发送add命令
    ls.send({
      type: "add",
      v1: n,
      v2: n
    });

    await wait(200);
    n--;
  }

  // 向子进程发送关闭消息
  ls.send({
    type: "close"
  });
}

run();
