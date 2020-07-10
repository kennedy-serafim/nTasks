module.exports = app => {
    const Users = app.data.Users;

    app.get('/users/:id', (req, res) => {
        Users.findByPk(req.params.id, {
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
    });

    app.delete('/users/:id', (req, res) => {
        Users.destroy({ where: { id: req.params.id } })
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