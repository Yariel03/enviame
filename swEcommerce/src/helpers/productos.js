const { pool } = require("../conexion/pg");

const newProducto = async (name, short_description) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.products( name, short_description)VALUES ( '" +
    name +
    "', '" +
    short_description +
    "') returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

const newProductoSeller = async (idProducto, idSeller, stock) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.sellerwithproduct( id_seller, id_product, stock)VALUES ( " +
    idSeller +
    ", " +
    idProducto +
    ", " +
    stock +
    ") returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  newProducto,
  newProductoSeller,
};
