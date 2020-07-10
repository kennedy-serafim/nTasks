require('dotenv').config();
import jwt from 'jwt-simple';

module.exports = app => {
    const Users = app.data.Users;

    app.post('/token', (req, res) => {
        const { email, password } = req.body;

        if (email && password) {
            Users.findOne({ where: email })
                .then(user => {
                    if (Users.isPassword(user.password, password)) {
                        const payload = { id: user.id };
                        res.json({
                            token: jwt.encode(payload, process.env.JWT_SECRET)
                        });
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => res.sendStatus(401));
        } else {
            res.sendStatus(401);
        }
    });
}