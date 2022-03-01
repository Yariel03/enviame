const {
  UpdateStateOrders,
  InsertTracking,
  Trackings,
  UpdateTracking,
  DeleteTracking,
  SelectHistoryTracking,
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
const lnUpdateTracking = async (req, res) => {
  try {
    const { id_tracking } = req.params;
    const { origin, name, address } = req.body;
    await UpdateTracking(id_tracking, origin, name, address);

    res.status(200).json({ success: true, respuesta: "ok" });
  } catch (error) {
    res.status(500).json({ success: false, respuesta: error });
  }
};

const lnDeleteTracking = async (req, res) => {
  try {
    const { id_tracking } = req.params;
    await DeleteTracking(id_tracking);

    res.status(200).json({ success: true, respuesta: "ok" });
  } catch (error) {
    res.status(500).json({ success: false, respuesta: error });
  }
};
const lnHistoryTracking = async (req, res) => {
  try {
    const { id_tracking } = req.params;
    const respuesta = await SelectHistoryTracking(id_tracking);
    res.status(200).json({
      success: true,
      respuesta,
    });
  } catch (error) {
    res.status(500).json({ success: false, respuesta: error });
  }
};

module.exports = {
  lnUpdateState,
  lnInsertTracking,
  lnTrackings,
  lnUpdateTracking,
  lnDeleteTracking,
  lnHistoryTracking,
};
