const { pool } = require("../conexion/pg");
const {
  newProducto,
  newProductoSeller,
  stockProduct,
  updateStock,
} = require("../helpers/productos");

const {
  newOrder,
  insertStateOrder,
  currentStateOrder,
} = require("../helpers/orders");
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

const allProducts = async () => {
  const query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id `;
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
const buyProduct = async (idProduct, cant, deliveryinformation, idUser) => {
  let stock = await stockProduct(idProduct);
  if (stock.stock >= cant) {
    await updateStock(idProduct, stock, cant);
    let id_order = await newOrder(idProduct, cant, deliveryinformation, idUser);
    await insertStateOrder(1, id_order.id);
    return {
      success: true,
      respuesta: "Compra realizada con exito",
    };
  } else {
    return {
      success: false,
      error:
        "No hay suficiente productos, solo nos queda en stock: " + stock.stock,
    };
  }
};

const allOrderSeller = async (idUser, tipo) => {
  let query = "";
  if (tipo != 0) {
    query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id inner join public.order O on O.id_product=B.id inner join orderwithstate OWS on OWS.id_order=O.id inner join order_state OS on OS.id=OWS.id_order_state where A.id_seller = ${idUser}`;
  } else {
    query = `SELECT * FROM sellerwithproduct A inner join products B on A.id_product=B.id inner join public.order O on O.id_product=B.id inner join orderwithstate OWS on OWS.id_order=O.id inner join order_state OS on OS.id=OWS.id_order_state where O.id_user_marketplace = ${idUser}`;
  }
  return exec(query);
};
const UpdateStateOrders = async (idOrder, state) => {
  let currentState = await currentStateOrder(idOrder);
  if (currentState.id_order_state + 1 == state) {
    const query = `UPDATE orderwithstate set id_order_State = ${state} where id_order= ${idOrder} returning id`;

    return exec(query);
  } else {
    return {
      success: false,
      error:
        "No puede cambiar el estado de la orden, debe seguir el flujo correcto creado,confirmado, enviado",
    };
  }
};

const cancelOrder = async (idOrder, state) => {
  let currentState = await currentStateOrder(idOrder);
  if (currentState.id_order_state == 1 || currentState.id_order_state == 2) {
    const query = `UPDATE orderwithstate set id_order_State = ${state} where id_order= ${idOrder} returning id`;

    return exec(query);
  } else {
    return {
      success: false,
      error:
        "No puede cancelar la orden, el pedido debe estar en estado confirmado o enviado",
    };
  }
};

const exec = async (SQL) => {
  try {
    const respuesta = await pool.query(SQL);
    return {
      success: true,
      respuesta: respuesta.rows,
      count: respuesta.rowCount,
    };
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
  allProducts,
  buyProduct,
  allOrderSeller,
  UpdateStateOrders,
  cancelOrder,
};
