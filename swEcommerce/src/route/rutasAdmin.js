const { Router } = require("express");
const router = Router();
const {
  lninsertVendedores,
  lnlistarVendedores,
  lnbuscarVendedor,
  lneditarVendedor,
  lneliminarVendedores,
  lnlistarAllOrders,
} = require("../ln/lnCrudVendedores.js");
let respuesta = "";

// comment: Crear nuevo vendedor
router.post("/admin/newseller", lninsertVendedores);

router.get("/admin/seller/:id", lnbuscarVendedor);

router.put("/admin/seller/:id", lneditarVendedor);

router.get("/admin/sellers", lnlistarVendedores);

router.delete("/admin/seller/:id", lneliminarVendedores);

router.get("/admin/orders", lnlistarAllOrders);

module.exports = router;
