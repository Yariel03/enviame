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

const stockProduct = async (idProducto) => {
  let respuesta = "";
  const query = `select stock from sellerwithproduct where id=${idProducto}`;
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateStock = async (idProduct, stock, cant) => {
  let respuesta = "";
  const query = `UPDATE sellerwithproduct SET stock = ${
    stock.stock - cant
  } WHERE id_product = ${idProduct} returning stock`;
  try {
    respuesta = await pool.query(query);
    console.log("respuesta", respuesta.rows[0]);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  newProducto,
  newProductoSeller,
  stockProduct,
  updateStock,
};
