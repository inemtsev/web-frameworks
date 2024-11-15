import cluster from "node:cluster";
import os from "node:os";

const cpus = os.availableParallelism();

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  await import("./app.ts");
}