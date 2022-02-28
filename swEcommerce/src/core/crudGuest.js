const { pool } = require("../conexion/pg");
const {
  newUsers,
  newrolUser,
  newMarketplaceUser,
} = require("../helpers/users");
const insertGuest = async (
  name,
  short_description,
  email,
  password,
  shipping_address
) => {
  try {
    const idUser = await newUsers(name, short_description, email, password);
    await newrolUser(3, idUser.id);
    const idSeller = await newMarketplaceUser(idUser.id, shipping_address);
    return idSeller;
  } catch (error) {
    error(error);
  }
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
  insertGuest,
};
