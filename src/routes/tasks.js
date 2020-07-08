module.exports = app => {
    const Tasks = app.models.tasks;

    app.get('/tasks', (req, res) => {
        Tasks.findAll({}, tasks => {
            return res.json(tasks);
        });

    });
}