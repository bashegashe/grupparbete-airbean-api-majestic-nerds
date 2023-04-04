const MakeOrderController = {
  async makeOrder(req, res) {
    const { details } = req.body;

    res.json({ success: true, details });
  },
};

export default MakeOrderController;
