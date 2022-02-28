const {
  insertVendedores,
  vendedores,
  vendedor,
  updateVendedor,
  deleteVendedor,
} = require("../core/crudVendedor.js");

const lninsertVendedores = async (req, res) => {
  const { name_pro, short_descripcion, email, password, wharehouse } = req.body;
  await insertVendedores(
    name_pro,
    short_descripcion,
    email,
    password,
    wharehouse
  )
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

module.exports = {
  lninsertVendedores,
  lnlistarVendedores,
  lnbuscarVendedor,
  lneditarVendedor,
  lneliminarVendedores,
};
