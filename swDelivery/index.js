const express = require("express");
const cors = require("cors");
const { superPro, clear, success } = require("./src/helpers/message.js");
const { Trackings, UpdateStateTracking } = require("./src/core/stateOrder");
var CronJob = require("cron").CronJob;
var job = new CronJob("*/5 * * * * *", async () => {
  superPro("10 second");
  let lstTracking = (await Trackings()).respuesta;
  lstTracking.forEach(async (tracking) => {
    await UpdateStateTracking(tracking.id, tracking.id_state + 1);
  });
});
job.start();

const app = express();
const port = 3002;

// COMMENT: middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Comment:Rutas
app.use(require("./src/route/rutasHome.js"));
app.use(require("./src/route/rutasWebhooks.js"));
app.use(require("./src/route/rutasTracking.js"));

//COMMENT: create a server
app.listen(port, () => {
  clear();
  superPro(` ---> Server is running on port 4000`);
  success(`\n Welcome swDelivery Open ctrl+click http://localhost:4000/ `);
});

module.exports = app;
