const { Router } = require("express");
const router = Router();
const { lnInsertTracking, lnTrackings } = require("../ln/lnTracking.js");

// COMMENT:Version 1

router.post("/tracking/", lnInsertTracking);
router.get("/trackings/", lnTrackings);

module.exports = router;
