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

// eslint-disable-next-line import/prefer-default-export
export { checkOrder };
