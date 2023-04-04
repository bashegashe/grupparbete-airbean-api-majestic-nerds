// Ska kolla om userId som skickas med är giltig eller inte, har inget med orderstatus att göra (!)

const StatusController = {
  async getStatus(req, res) {
    // Samma kommentar här som för historyController.js med säkerhet,
    // fördra att inte skicka med userId i url
    const { userId } = req.body;

    res.json({ success: true, userId });
  },
};

export default StatusController;
