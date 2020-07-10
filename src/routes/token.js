require('dotenv').config();
import jwt from 'jwt-simple';

module.exports = app => {
    const Users = app.data.Users;

    app.post('/token', (req, res) => {
        const { email, password } = req.body;

        console.log(email, password)

        if (email && password) {

            Users.findOne({ where: { email } })
                .then(user => {
                    console.log(Users.isPassword(user.password, password));

                    if (Users.isPassword(user.password, password)) {
                        const payload = { id: user.id };
                        res.json({
                            token: jwt.encode(payload, process.env.JWT_SECRET)
                        });
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(error => {
                    res.status(401).json(
                        {
                            message: 'Unauthorized',
                            error
                        });
                });
        } else {
            res.status(400).json({ message: 'Email and Password is required' });
        }
    });
}