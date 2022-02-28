const { Router } = require("express");
const router = Router();
const {
  lninsertProducto,
  lnlistarProductos,
  lnbuscarProducto,
  lneditarProduct,
  lneliminarProducts,
} = require("../ln/lnCrudProducto.js");

// comment: Crear nuevo producto
router.post("/seller/newproduct", lninsertProducto);

router.get("/sellers/:idseller/products", lnlistarProductos);

router.get("/seller/:idseller/product/:idproduct", lnbuscarProducto);

router.put("/seller/:idseller/product/:idproduct", lneditarProduct);

router.delete("/seller/:idseller/product/:idproduct", lneliminarProducts);

module.exports = router;
