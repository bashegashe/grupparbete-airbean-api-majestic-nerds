const Datastore = require('nedb-promise');

const usersDatabase = new Datastore({ filename: 'users.db', autoload: true });
const historyDatabase = new Datastore({ filename: 'history.db', autoload: true });

export { usersDatabase, historyDatabase };
