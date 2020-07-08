module.exports = app => {
    app.listen(app.get('port'), () => {
        console.log(`Server is running in ${app.get('port')}`);
    });
}