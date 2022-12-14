const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

//importa todos os modelos
const Usuario = require('../models/Usuario');

const connection = new Sequelize(dbConfig);

//inicializa todos os modelos
Usuario.init(connection);


//realiza todas as associações

Usuario.associate(connection.models);


module.exports = connection;