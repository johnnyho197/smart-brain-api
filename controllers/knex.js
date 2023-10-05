const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : 'dpg-ckf64puafg7c7383d500-a',
    user : 'smart_brain_sz29_user',
    port : 5432,
    password : 'pxTHFNN4rjNad4n8NPb0fJszM41n51iZ',
    database : 'smart_brain_sz29'
  }
});

module.exports = db;