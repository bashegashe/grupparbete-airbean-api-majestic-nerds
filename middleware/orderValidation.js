import { itemExists } from '../models/beansModel.js';
import { userIdExists } from '../models/userModel.js';

async function checkOrder(req, res, next) {
  const { body } = req;

  if (!body?.details?.order) {
    return res.status(400).json({ success: false, message: 'Invalid or no data in order' });
  }

  if (!(Array.isArray(body.details.order) && body.details.order.length > 0)) {
    return res.status(400).json({ success: false, message: 'Invalid or no data in order' });
  }

  if ('userId' in body && !(await userIdExists(body.userId))) {
    return res.status(401).json({ success: false, error: 'Unauthorized access' });
  }

  let error = false;
  for (let i = 0; i < body.details.order.length; i++) {
    const exists = await itemExists(body.details.order[i]);
    if (!exists) {
      error = true;
    }
  }
  if (!error) {
    return next();
  }
  return res.status(400).json({ success: false, message: 'Could not create order' });
}

async function validateOrderNr(req, res, next) {
  const { orderNr } = req.params;

  if (orderNr === undefined) {
    return res.status(400).json({ success: false, message: 'Order number missing' });
  } if (orderNr.length !== 21) {
    return res.status(400).json({ success: false, message: 'Order number is not valid' });
  }
  return next();
}

export { checkOrder, validateOrderNr };
