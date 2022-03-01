const { pool } = require("../conexion/pg");
const {
  newTracking,
  newProductTracking,
  newTrackingAllProducts,
} = require("../helpers/orders");
const UpdateStateOrders = async (idOrder, state) => {
  if (state == 4) {
    const query = `UPDATE orderwithstate set id_order_State = ${state} where id_order= ${idOrder} returning id`;
    return exec(query);
  } else {
    return {
      success: false,
      error:
        "este servicio solo se encarga de actualizar el estado de la orden a enviado",
    };
  }
};

const InsertTracking = async (order) => {
  try {
    let products = order.product;
    let idProduct = "";
    const idOrder = await newTracking(order);
    products.forEach(async (product) => {
      console.log("productost: ", product.sku);
      idProduct = await newProductTracking(
        product.sku,
        product.name,
        product.qty
      );

      let id = await newTrackingAllProducts(idOrder, idProduct);
    });
    order.tracking_number = idOrder;
    order.status = "READY_FOR_PICK_UP";
    return order;
  } catch (error) {}
};
const Trackings = async () => {
  try {
    const query = `SELECT * FROM tracking  `;
    return exec(query);
  } catch (error) {
    return { success: false, error };
  }
};
const UpdateTracking = async (id_tracking, origin, name, address) => {
  try {
    const query = `UPDATE public.tracking SET  origin='${origin}', name_client='${name}', addres_client='${address}' WHERE id=${id_tracking}; `;
    return exec(query);
  } catch (error) {
    return { success: false, error };
  }
};
const DeleteTracking = async (id_tracking) => {
  try {
    const query = `DELETE FROM public.tracking WHERE id=${id_tracking};`;
    return exec(query);
  } catch (error) {
    return { success: false, error };
  }
};

const SelectHistoryTracking = async (id_tracking) => {
  const query = `select * from tracking_history HI inner join tracking_state TS on TS.id=HI.id_status where HI.id_tracking=${id_tracking}`;
  try {
    const respuesta = await pool.query(query);
    return {
      success: true,
      respuesta: respuesta.rows,
      count: respuesta.rowCount,
    };
  } catch (error) {
    return { success: false, error };
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

module.exports = {
  UpdateStateOrders,
  InsertTracking,
  Trackings,
  UpdateTracking,
  DeleteTracking,
  SelectHistoryTracking,
};
