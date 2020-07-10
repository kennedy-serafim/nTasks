module.exports = app => {
    app.set('port', 3030);
    app.set('json spaces', 4);
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        next();
    });
}