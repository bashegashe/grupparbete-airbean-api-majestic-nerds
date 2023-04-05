import { nanoid } from 'nanoid';
import { menuDatabase, historyDatabase } from '../database/database.js';

function getMenuFromDatabase() {
  return menuDatabase.find({});
}

async function itemExists(item) {
  const product = await menuDatabase.findOne({ title: item.name, price: item.price });
  if (!product) {
    return false;
  }
  return true;
}

async function insertOrder(order, id) {
  const total = order.reduce((acc, cur) => acc + cur.price, 0);

  const orderObj = {
    total,
    orderNr: nanoid(),
    timestamp: Date.now(),
    orderDeliveryTime: Math.floor(Math.random() * 21 + 10),
  };

  if (id) {
    orderObj.id = id;
  }

  historyDatabase.insert(orderObj);
}

export { getMenuFromDatabase, itemExists, insertOrder };
