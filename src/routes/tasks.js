module.exports = app => {
    app.get('/tasks', (req, res) => {
        res.json({
            tasks: [
                { title: 'Some' }
            ]
        });
    });
}