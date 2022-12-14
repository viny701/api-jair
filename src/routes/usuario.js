const express = require('express');
const router = express.Router();
const login = require('../midleware/login');
const controllerUsuarios = require('../controllers/controllerUsuarios');

router.post('/', controllerUsuarios.acessar);
router.post('/login', controllerUsuarios.login);


module.exports = router;