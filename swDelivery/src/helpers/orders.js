const { pool } = require("../conexion/pg");

const newTracking = async (order) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.tracking(foreing_order_id, id_state, origin, name_client, addres_client)VALUES (" +
    order.foreing_order_id +
    ", 1,'" +
    order.origin.addres +
    "', '" +
    order.destination.name +
    "', '" +
    order.destination.addres +
    "') returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};
const newProductTracking = async (id, name, quantity) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.tracking_products( sku, name_producto, qty)VALUES ( " +
    id +
    ", " +
    name +
    ", " +
    quantity +
    ") returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

const newTrackingAllProducts = async (idTracking, idProduct) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.tracking_all_products(  id_tracking, id_product)VALUES ( " +
    idTracking +
    ", " +
    idProduct +
    ") returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

module.exports = {
  newTracking,
  newProductTracking,
  newTrackingAllProducts,
};
