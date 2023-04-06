import { findOrderInDatabase } from '../../models/beansModel.js';

const GetOrderController = {
  async getOrder(req, res) {
    const { orderNr } = req.params;

    const orderObj = await findOrderInDatabase(orderNr);

    res.json(orderObj);
  },
};

export default GetOrderController;
