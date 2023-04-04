import Datastore from 'nedb-promise';

const usersDatabase = new Datastore({ filename: 'users.db', autoload: true });
const historyDatabase = new Datastore({ filename: 'history.db', autoload: true });
const menuDatabase = new Datastore({ filename: 'menu.db', autoload: true });

export { usersDatabase, historyDatabase, menuDatabase };
