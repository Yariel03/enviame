const { pool } = require("../conexion/pg");

const newUsers = async (name_pro, short_description, email, password) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.usuario ( name, short_description, email, password) VALUES ('" +
    name_pro +
    "', '" +
    short_description +
    "', '" +
    email +
    "', '" +
    password +
    "')returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    return error;
  }
};

const newrolUser = async (idRol, idUser) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.rol_usuario(id_rol, id_usuario)VALUES (" +
    idRol +
    ", " +
    idUser +
    ") returning id_rol,id_usuario;";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

const newSeller = async (idUser, wharehouse_address) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.seller_user(id_seller, wharehouse_address) VALUES (" +
    idUser +
    ", '" +
    wharehouse_address +
    "') returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

const newMarketplaceUser = async (idUser, shipping_address) => {
  let respuesta = "";
  const query =
    "INSERT INTO public.marketplace_user(id_user, shipping_address) VALUES (" +
    idUser +
    ", '" +
    shipping_address +
    "') returning id";
  try {
    respuesta = await pool.query(query);
    return respuesta.rows[0];
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  newUsers,
  newrolUser,
  newSeller,
  newMarketplaceUser,
};
