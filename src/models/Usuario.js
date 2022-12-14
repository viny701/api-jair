const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            usuario: DataTypes.STRING,
            senha: DataTypes.STRING,
            adi_setor_id: DataTypes.INTEGER,
            last_valid_token: DataTypes.STRING,
            aplicacao: DataTypes.INTEGER,
            pessoa_id: DataTypes.INTEGER,
            notification: DataTypes.INTEGER,
            first_notification: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'usuario'
        });
    }
    static associate(models) {
        // this.hasMany(models.Adi_adiantamento, { foreignKey: 'usuario_id', as: 'adiantamentos' });
        // this.belongsToMany(models.Perfil, { foreignKey: 'usuario_id', through: 'usuario_perfis', as: 'perfis' });
        // this.belongsToMany(models.Empresa, { foreignKey: 'usuario_id', through: 'usuario_empresas', as: 'empresas' });
        // this.belongsToMany(models.Modulo, { foreignKey: 'usuario_id', through: 'usuario_modulos', as: 'modulos' });
        // this.hasMany(models.Usuario_setores_ponto, { foreignKey: 'usuario_id', as: 'setores_pontos' });
        // this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
        // this.hasMany(models.Usuario_empresa, {foreignKey: 'usuario_id', as: 'usuarios_empresas'}); 
        // this.belongsTo(models.Adi_setor, { foreignKey: 'adi_setor_id', as: 'adi_setor' });
        // this.hasMany(models.Usuario_modulo, {foreignKey: 'usuario_id', as: 'usuarios_modulos'}); 
    }
}

module.exports = Usuario;