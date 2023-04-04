import { menuDatabase } from '../database/database.js';

function getMenuFromDatabase() {
  return menuDatabase.find({});
}

export default getMenuFromDatabase;
