import knex from 'knex';

const db = knex({
    
    client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'pc159357',
    database : 'proffydb'

  }
});

export default db;