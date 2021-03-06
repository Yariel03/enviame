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

const update30StateTracking = async (id_order) => {
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

const currentStateTracking = async (id_order) => {
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

const passToPass = async (currentState, newState) => {
  let diff = newState - currentState;
  return diff == 1 ? true : false;
};

module.exports = {
  newTracking,
  newProductTracking,
  newTrackingAllProducts,
};
