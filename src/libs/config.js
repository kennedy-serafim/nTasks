const path = require('path');

module.exports = {
    databse: 'ntasks',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: path.join(__dirname, '..', '..', 'ntasks.sqlite'),
        define: {
            underscored: true
        }
    }
}