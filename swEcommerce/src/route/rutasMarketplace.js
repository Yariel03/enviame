const { Router } = require("express");
const router = Router();
const {
  lnlistarAllProducts,
  lnbuyProduct,
  lnCancelOrder,
} = require("../ln/lnCrudProducto.js");

// comment: listar todos los productos con sus vendedores
router.get("/marketplace/products", lnlistarAllProducts);

router.get(
  "/marketplace/products/buy/:idproduct/quality/:cant/:deliveryinformation/:idUser",
  lnbuyProduct
);

router.put("/marketplace/cancel/order/:idorder/state/:state", lnCancelOrder);

// router.put("/admin/seller/:id", lneditarVendedor);

// router.get("/admin/sellers", lnlistarVendedores);

// router.delete("/admin/seller/:id", lneliminarVendedores);

module.exports = router;
