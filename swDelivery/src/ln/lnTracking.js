const {
  UpdateStateOrders,
  InsertTracking,
  Trackings,
} = require("../core/stateOrder");

const lnUpdateState = async (req, res) => {
  const { id_order, id_order_state } = req.body;
  await UpdateStateOrders(id_order, id_order_state)
    .then((respuesta) => {
      res.status(200).json({ success: true, respuesta: respuesta });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error });
    });
};

const lnInsertTracking = async (req, res) => {
  const { order } = req.body;
  await InsertTracking(order)
    .then((respuesta) => {
      res.status(200).json({ success: true, respuesta: respuesta });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error });
    });
};

const lnTrackings = async (req, res) => {
  await Trackings()
    .then((respuesta) => {
      res.status(200).json({ success: true, respuesta: respuesta });
    })
    .catch((error) => {
      res.status(500).json({ success: false, error });
    });
};

module.exports = {
  lnUpdateState,
  lnInsertTracking,
  lnTrackings,
};
