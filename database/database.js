const Datastore = require('nedb-promise');

const database = new Datastore({ filename: 'users.db', autoload: true });

export default database;
