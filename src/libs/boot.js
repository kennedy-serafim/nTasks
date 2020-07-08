module.exports = app => {
    app.data.sync().then(() => {
        app.listen(app.get('port'), () => {
            console.log(`Server is running in ${app.get('port')}`);
        });
    });

}