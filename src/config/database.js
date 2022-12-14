{
  require('dotenv').config();

  module.exports = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    define: {
      underscored: true,
      timestamps: true,
    },
    logging: (process.env.NODE_ENV === 'homolog' ? console.log : false),
  }
}
