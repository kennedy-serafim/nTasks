
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var config = require('./libs/config')
var data = {};

var sequelize = new Sequelize(config);
const dir = path.join(__dirname, 'models');

fs
    .readdirSync(dir)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        const model = require(path.join(dir, file))(sequelize, Sequelize)
        data[model.name] = model;
    });

Object.keys(data).forEach(function (modelName) {
    if (data[modelName].associate) {
        data[modelName].associate(data);
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection with Database has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

data.sequelize = sequelize;
data.Sequelize = Sequelize;

module.exports = data;
