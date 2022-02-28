const { pool } = require("../conexion/pg");

const newOrder = async (
  id_product,
  product_quantity,
  delivery_informacion,
  id_user_marketplace
) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.order ( id_product, product_quantity, delivery_information, id_user_marketplace) VALUES ('" +
    id_product +
    "', '" +
    product_quantity +
    "', '" +
    delivery_informacion +
    "', '" +
    id_user_marketplace +
    "')returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

const insertStateOrder = async (id_order_state, id_order) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.orderwithstate( id_order, id_order_state)VALUES ( " +
    id_order +
    ", " +
    id_order_state +
    ");";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

const currentStateOrder = async (id_order) => {
  let respuesta = "";
  const query =
    "SELECT id_order_state FROM public.orderwithstate WHERE id_order = " +
    id_order +
    ";";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

module.exports = {
  newOrder,
  insertStateOrder,
  currentStateOrder,
};
