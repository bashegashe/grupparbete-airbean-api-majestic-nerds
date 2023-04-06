import { insertOrder } from '../../models/beansModel.js';

const MakeOrderController = {
  async makeOrder(req, res) {
    const { details, userId } = req.body;

    await insertOrder(details.order, userId);

    res.json({ success: true, details });
  },
};

export default MakeOrderController;
