import path from 'path';

module.exports = {
    client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'pc159357',
    database : 'proffydb'
  },
  migrations:{
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  }
};