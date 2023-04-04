const GetOrderController = {
  async getOrder(req, res) {
    const { orderId } = req.params;

    res.json({ success: true, orderId });
  },
};

export default GetOrderController;
