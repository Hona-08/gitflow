module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'travel',
      },
      migrations: {
        directory: './db/migrations',
      },
    },
    // Add other environments (e.g., production) as needed.
  };