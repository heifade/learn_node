const cluster = require("cluster");
const p = require("os");

if (cluster.isMaster) {
  for (let i = 0; i < p.cpus().length; i++) {
    let worker = cluster.fork();
    worker.on("exit", (code, signal) => {
      console.log("worker exit");
    });
    worker.on("disconnect", () => {
      console.log("worker disconnect");
    });
    worker.on("message", msg => {
      console.log("parent message:", msg);
    });
    worker.send("hellow child");
  }
  console.log(process.pid);

  setTimeout(() => {
    for (const id in cluster.workers) {
      cluster.workers[id].kill();
    }
  }, 5000);
} else {
  console.log(cluster.worker.process.pid);

  setTimeout(() => {}, 100000);

  cluster.worker.send("hellow parent");

  cluster.worker.on("message", msg => {
    console.log("child message:", msg);
  });
}
