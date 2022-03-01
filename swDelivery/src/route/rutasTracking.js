const { Router } = require("express");
const router = Router();
const {
  lnInsertTracking,
  lnTrackings,
  lnUpdateTracking,
  lnDeleteTracking,
  lnHistoryTracking,
} = require("../ln/lnTracking.js");

// COMMENT:Version 1

router.post("/tracking/", lnInsertTracking);

router.get("/trackings/", lnTrackings);

router.put("/tracking/:id_tracking", lnUpdateTracking);

router.delete("/tracking/:id_tracking", lnDeleteTracking);

router.get("/trackings/:id_tracking/history", lnHistoryTracking);

module.exports = router;
