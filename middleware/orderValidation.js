import { itemExists } from '../models/beansModel.js';
/*
  Middleware för att validera så att produkterna i en order finns i menyn.
*/

async function checkOrder(req, res, next) {
  const { body } = req;
  let error = false;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < body.details.order.length; i++) {
    // eslint-disable-next-line no-await-in-loop
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
