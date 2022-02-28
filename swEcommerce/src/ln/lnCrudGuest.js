const { insertGuest } = require("../core/crudGuest.js");

const lnInsertGuest = async (req, res) => {
  const { name, short_description, email, password, shipping_address } =
    req.body;
  await insertGuest(name, short_description, email, password, shipping_address)
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
