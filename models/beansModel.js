import { menuDatabase } from '../database/database.js';

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

export { getMenuFromDatabase, itemExists };
