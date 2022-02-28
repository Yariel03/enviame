const { Router } = require("express");
const router = Router();
const { lnInsertGuest } = require("../ln/lnCrudGuest.js");

// comment: Registro del cliente de internet
router.post("/guest/", lnInsertGuest);

module.exports = router;
