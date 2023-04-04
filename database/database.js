import Datastore from 'nedb-promise';

const usersDatabase = new Datastore({ filename: 'database/users.db', autoload: true });
const historyDatabase = new Datastore({ filename: 'database/history.db', autoload: true });
const menuDatabase = new Datastore({ filename: 'database/menu.db', autoload: true });

export { usersDatabase, historyDatabase, menuDatabase };
