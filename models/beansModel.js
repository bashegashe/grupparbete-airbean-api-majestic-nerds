import { menuDatabase } from '../database/database.js';

// const menuDb = menuDatabase;

async function getMenuFromDatabase() {
  return menuDatabase;
}

export default getMenuFromDatabase;
