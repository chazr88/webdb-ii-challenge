// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.car-dealer.db3'
    },
    useNullAsDefault: true,

    migrations: {//Any files we create we want to be stored here
      directory: './data/migrations'
    },

    seeds: {
      directory: './data/seeds'
    }
 
  },

};
