import Sequelize from 'sequelize';

const config = require('./libs/config');
let sequelize = null;

module.exports = () => {
    if (!sequelize) {
        sequelize = new Sequelize(
            config.databse,
            config.username,
            config.password,
            config.params
        );
        
    }

    return sequelize;
}