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

async function insertOrder(order, userId) {
  const total = order.reduce((acc, cur) => acc + cur.price, 0);

  const orderObj = {
    total,
    orderNr: nanoid(),
    timestamp: Date.now(),
    orderDeliveryTime: Math.floor(Math.random() * 21 + 10),
  };

  if (userId) {
    orderObj.userId = userId;
  }

  historyDatabase.insert(orderObj);
}

async function findOrderInDatabase(orderNr) {
  const searchResult = await historyDatabase.findOne({ orderNr });
  const orderObj = {
    success: false,
  };

  if (searchResult) {
    orderObj.success = true;
    orderObj.order = searchResult;

    const estDeliveryMin = Math.round(((searchResult.timestamp
    + searchResult.orderDeliveryTime * 60000) - Date.now()) / 60000);

    if (estDeliveryMin < 0) {
      orderObj.message = 'Order is delivered';
    } else {
      orderObj.message = `Order will be delivered in ${estDeliveryMin} minutes`;
    }
  } else {
    orderObj.message = 'Order not found';
  }

  return orderObj;
}

export {
  getMenuFromDatabase, itemExists, insertOrder, findOrderInDatabase,
};
