const path = require('path');

module.exports = ({ env }) => ({
  // connection: {
  //   client: 'sqlite',
  //   connection: {
  //     filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
  //   },
  //   useNullAsDefault: true,
  // },
  connection: {
    client: 'mysql',
    debug: false,
    useNullAsDefault: true,
    connection: {
      host      : 'db',
      port      : 3306,
      user      : 'root',
      password  : 'root',
      database  : 'walls',
    }
  }
});
