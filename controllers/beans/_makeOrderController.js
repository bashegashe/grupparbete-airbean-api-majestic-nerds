import { insertOrder } from '../../models/beansModel.js';

const MakeOrderController = {
  async makeOrder(req, res) {
    const { details, userId } = req.body;

    const result = await insertOrder(details.order, userId);

    res.json(result);
  },
};

export default MakeOrderController;
