const { Router } = require("express");
const router = Router();

// COMMENT:Version 1

router.get("/", async (req, res) => {
  res.status(200).json({
    message: "Bienvenido a la api del test Ecommerce",
    info: "Funcionando al 100%",
    author: "Alexander Baldeon // @yarielbaldeon",
  });
});

router.get("/version", async (req, res) => {
  res.status(200).json({
    info: "V.0.0.1",
  });
});

module.exports = router;
