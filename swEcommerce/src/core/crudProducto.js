const { pool } = require("../conexion/pg");
const { newProducto, newProductoSeller } = require("../helpers/productos");
const insertProductos = async (name, short_description, stock, idSeller) => {
  try {
    const idProducto = await newProducto(name, short_description);
    const idProductoSeller = await newProductoSeller(
      idProducto.id,
      idSeller,
      stock
    );
    return idProductoSeller;
  } catch (error) {
    error(error);
  }
};

const Productos = async (idUser) => {
  const query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id  WHERE A.id_seller = ${idUser}`;
  return exec(query);
};

const Producto = async (idUser, idProducto) => {
  const query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id  WHERE A.id_seller = ${idUser} and A.id_product = ${idProducto}`;
  return exec(query);
};

const updateProduct = async (idSeller, idProduct, name, short_description) => {
  const query = `UPDATE products SET name = '${name}', short_description='${short_description}' from products A inner join sellerwithproduct B on A.id=B.id_product WHERE A.id = ${idProduct} and id_seller = ${idSeller}`;
  return exec(query);
};

const deleteProduct = async (idProduct, idUser) => {
  const query = `DELETE FROM sellerwithproduct A using products B WHERE A.id_product = ${idProduct} and A.id_seller = ${idUser}`;
  console.log("query", query);
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
  insertProductos,
  Producto,
  Productos,
  updateProduct,
  deleteProduct,
};
