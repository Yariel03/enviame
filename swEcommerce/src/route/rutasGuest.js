const { Router } = require("express");
const router = Router();
const { lnInsertGuest } = require("../ln/lnCrudGuest.js");

// comment: Crear nuevo producto
router.post("/guest/", lnInsertGuest);

module.exports = router;
