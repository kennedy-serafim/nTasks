module.exports = app => {
    const Tasks = app.data.Tasks;

    app.route("/tasks")
        .all(app.auth.authenticate())
        .get((req, res) => {
            //Listar tarefas
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json(error.message);
                });
        })
        .post((req, res) => {
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        });

    app.route('/tasks/:id')
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findOne({ where: req.params })
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.status(404).json({ message: 'Tasks not found' });
                    }
                }).catch(err => {
                    res.status(412).json(err.message);
                });
        })
        .put((req, res) => {
            Tasks.update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        })
        .delete((req, res) => {
            Tasks.destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        });
}