module.exports = app => {
    app.data.sequelize.sync().then(() => {
        app.listen(app.get('port'), () => {
            console.log(`Server is running in ${app.get('port')}`);
        });
    });

}