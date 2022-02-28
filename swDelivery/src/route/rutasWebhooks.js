const { Router } = require("express");
const router = Router();
const { lnUpdateState } = require("../ln/lnTracking.js");

// COMMENT:Version 1

router.post("/webhooks/notification", lnUpdateState);

module.exports = router;
