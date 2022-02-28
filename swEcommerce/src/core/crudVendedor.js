const { pool } = require("../conexion/pg");
const { newUsers, newrolUser, newSeller } = require("./../helpers/users");
const insertVendedores = async (
  name_pro,
  short_description,
  email,
  password,
  wharehouse_address
) => {
  try {
    const idUser = await newUsers(name_pro, short_description, email, password);
    await newrolUser(2, idUser.id);
    const idSeller = await newSeller(idUser.id, wharehouse_address);
    return idSeller;
  } catch (error) {
    error(error);
  }
};

const vendedores = async () => {
  const query = `SELECT * FROM seller_user`;
  return exec(query);
};

const vendedor = async (id) => {
  const query = `SELECT * FROM seller_user A inner join usuario B on A.id_seller=B.id  WHERE A.id = ${id}`;
  return exec(query);
};
const listarAllOrders = async (id) => {
  const query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id inner join public.order O on O.id_product=B.id inner join orderwithstate OWS on OWS.id_order=O.id inner join order_state OS on OS.id=OWS.id_order_state`;
  return exec(query);
};

const updateVendedor = async (id, wharehouse_address) => {
  const query = `UPDATE seller_user SET wharehouse_address = '${wharehouse_address}' WHERE id = ${id}`;
  return exec(query);
};

const deleteVendedor = async (id) => {
  const query = `DELETE FROM seller_user WHERE id = ${id}`;
  return exec(query);
};

const exec = async (SQL) => {
  try {
    const respuesta = await pool.query(SQL);
    return { success: true, respuesta: respuesta.rows };
  } catch (error) {
    return { success: false, error };
  }
};

const error = (error) => {
  console.log(error);
  return error;
};

module.exports = {
  insertVendedores,
  vendedores,
  vendedor,
  updateVendedor,
  deleteVendedor,
  listarAllOrders,
};
