const {
  insertVendedores,
  vendedores,
  vendedor,
  updateVendedor,
  deleteVendedor,
  listarAllOrders,
} = require("../core/crudVendedor.js");

const lninsertVendedores = async (req, res) => {
  const { name, short_description, email, password, wharehouse } = req.body;
  await insertVendedores(name, short_description, email, password, wharehouse)
    .then((respuesta) => {
      res.status(200).json({ success: true, respuesta: respuesta });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error });
    });
};

const lnlistarVendedores = async (req, res) => {
  respuesta = await vendedores();
  res.json(respuesta);
};

const lnbuscarVendedor = async (req, res) => {
  respuesta = await vendedor(req.params.id);
  res.json(respuesta);
};
const lneliminarVendedores = async (req, res) => {
  respuesta = await deleteVendedor(req.params.id);
  res.json(respuesta);
};

const lneditarVendedor = async (req, res) => {
  const { wharehouse } = req.body;
  respuesta = await updateVendedor(req.params.id, wharehouse);
  res.json(respuesta);
};
const lnlistarAllOrders = async (req, res) => {
  respuesta = await listarAllOrders(req.params.tipo);
  res.json(respuesta);
};

module.exports = {
  lninsertVendedores,
  lnlistarVendedores,
  lnbuscarVendedor,
  lneditarVendedor,
  lneliminarVendedores,
  lnlistarAllOrders,
};
