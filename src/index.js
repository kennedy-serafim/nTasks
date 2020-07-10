import express from 'express';
import consign from 'consign';

const app = express();
app.use(express.json());

consign({
    cwd: 'src'
})
    .include('libs/config.js')
    .then('data.js')
    .then('auth.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);