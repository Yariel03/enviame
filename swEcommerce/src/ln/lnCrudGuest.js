const { insertGuest } = require("../core/crudGuest.js");

const lnInsertGuest = async (req, res) => {
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

module.exports = {
  lnInsertGuest,
};
