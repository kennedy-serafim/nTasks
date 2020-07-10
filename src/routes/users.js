module.exports = app => {
    const Users = app.data.Users;

    app.route('/user')
        .all(app.auth.authenticate())
        .get((req, res) => {
            Users.findByPk(req.user.id, {
                attributes: ['id', 'name', 'email']
            })
                .then(result => {
                    if (result) {
                        res.json(result)
                    } else {
                        res.status(404).json({ message: 'User not found' })
                    }
                })
                .catch(err => {
                    res.status(412).json(err.message);
                });
        })
        .delete((req, res) => {
            Users.destroy({ where: { id: req.user.id } })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json(error.message);
                });
        });

    app.post('/users', (req, res) => {

        Users.create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json(error.message);
            });
    });
}