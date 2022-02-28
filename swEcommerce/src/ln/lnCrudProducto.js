const {
  insertProductos,
  Productos,
  Producto,
  updateProduct,
  deleteProduct,
} = require("../core/crudProducto.js");

const lninsertProducto = async (req, res) => {
  const { name, short_description, stock, idSeller } = req.body;
  await insertProductos(name, short_description, stock, idSeller)
    .then((respuesta) => {
      res.status(200).json({ success: true, respuesta: respuesta });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error });
    });
};

const lnbuscarProducto = async (req, res) => {
  respuesta = await Producto(req.params.idseller, req.params.idproduct);
  res.json(respuesta);
};
const lnlistarProductos = async (req, res) => {
  respuesta = await Productos(req.params.idseller);
  res.json(respuesta);
};

const lneliminarProducts = async (req, res) => {
  respuesta = await deleteProduct(req.params.idproduct, req.params.idseller);
  res.json(respuesta);
};

const lneditarProduct = async (req, res) => {
  const { name, short_description } = req.body;
  respuesta = await updateProduct(
    req.params.idseller,
    req.params.idproduct,
    name,
    short_description
  );
  res.json(respuesta);
};

module.exports = {
  lninsertProducto,
  lnbuscarProducto,
  lnlistarProductos,
  lneditarProduct,
  lneliminarProducts,
};
