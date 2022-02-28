const { Router } = require("express");
const router = Router();
const {
  lninsertProducto,
  lnlistarProductos,
  lnbuscarProducto,
  lneditarProduct,
  lneliminarProducts,
  lnListarOrders,
  lnUpdateStateOrders,
} = require("../ln/lnCrudProducto.js");

// comment: Crear nuevo producto
router.post("/seller/newproduct", lninsertProducto);

router.get("/sellers/:idseller/products", lnlistarProductos);

router.get("/seller/:idseller/product/:idproduct", lnbuscarProducto);

router.put("/seller/:idseller/product/:idproduct", lneditarProduct);

router.delete("/seller/:idseller/product/:idproduct", lneliminarProducts);

router.get("/seller/:idseller/orders/tipo/:tipo", lnListarOrders);

router.put("/seller/order/:idorder/state/:state", lnUpdateStateOrders);

module.exports = router;
