module.exports = app => {
    const Tasks = app.data.Tasks;

    app.get('/tasks', (req, res) => {
        Tasks.findAll({}).then(tasks => {
            res.json(tasks);
        });
    });
}