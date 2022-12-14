const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sequelize = require('sequelize');
const Usuario = require('../models/Usuario');
const { Op } = require('sequelize');


module.exports = {

    async acessar(req, res) {

        const { usuario, usuario_id, empresa } = req.body;

        const token = jwt.sign({
            id_usuario: usuario_id,
            usuario: usuario,
            id_empresa: empresa
        },
            process.env.JWT_KEY,
            {
                expiresIn: "12h"
            }
        );
        return res.json({
            mensagem: "AUTENTICADO COM SUCESSO.",
            token: token
        })
    },

    async login(req, res) {

        try {
            var {
                usuario,
                senha,
            } = req.body;

            var user = await Usuario.findOne({
                attributes: ['id', 'usuario', 'senha'],
                where: { usuario: usuario, aplicacao: 2 }
            });


            if (!user || !bcrypt.compareSync(senha, user.senha)) {
                return res.status(200).send({
                    erro: 'USUÁRIO NÃO ENCONTRADO.'
                })
            } else {
                return res.json({ id: user.id, usuario: user.usuario })
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send({ mensagem: "ERRO AO AUTENTICAR.", error: error })
        }
    },
}
