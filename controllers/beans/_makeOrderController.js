import { insertOrder } from '../../models/beansModel.js';

const MakeOrderController = {
  async makeOrder(req, res) {
    const { details } = req.body;

    if (res.locals.isAuthorized) {
      await insertOrder(details.order, req.body.id);
    } else {
      await insertOrder(details.order);
    }

    res.json({ success: true, details });
  },
};

export default MakeOrderController;
