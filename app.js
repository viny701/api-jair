const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('./src/database');
require('dotenv').config();
const cors = require('cors');

const rotaUsuario = require('./src/routes/usuario');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods',
        'PUT, POST, PATH, DELETE, GET'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods',
            'PUT, POST, PATH, DELETE, GET'
        );
        res.header("Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        return res.status(200).send({});
    }
    app.use(cors());
    next();
});


app.use('/usuarios', rotaUsuario);


// app.use('/gerarcsv', rotaGerarCSV);

app.use((req, res, next) => {
    const erro = new Error('Não enctontrado.');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;