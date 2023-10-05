const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    port : 5432,
    password : 'rainwind171',
    database : 'smart-brain'
  }
});

module.exports = db;