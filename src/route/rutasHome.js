const { Router } = require("express");
const router = Router();
const { pool } = require("./../conexion/pg");

// COMMENT:Version 1

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Bienvenido a la api del test Backend",
    info: "Funcionando al 100%",
    author: "Alexander Baldeon",
  });
});

router.get("/version", async (req, res) => {
  res.status(200).json({
    info: "V.0.0.1",
  });
});

module.exports = router;
