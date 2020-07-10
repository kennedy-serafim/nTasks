module.exports = app => {
    const Tasks = app.data.Tasks;

    app.route("/tasks")
        .all(app.auth.authenticate())
        .get((req, res) => {
            //Listar tarefas
            Tasks.findAll({
                where: req.user.id
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json(error.message);
                });
        })
        .post((req, res) => {
            req.body.user_id = req.user.id;

            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        });

    app.route('/tasks/:id')
        .all(app.auth.authenticate())
        .get((req, res) => {
            Tasks.findOne({
                where: {
                    id: req.params,
                    user_id: req.user.id
                }
            })
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
            Tasks.update(req.body, {
                where: {
                    id: req.params,
                    user_id: req.user.id
                }
            })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        })
        .delete((req, res) => {
            Tasks.destroy({
                where: {
                    id: req.params,
                    user_id: req.user.id
                }
            })
                .then(result => res.sendStatus(204))
                .catch(err => {
                    res.status(412).json(err.message);
                });
        });
}