import express from 'express';
import consign from 'consign';

const app = express();

consign({
    cwd: 'src'
})
    .then('libs/config.js')
    .include('data.js')
    .then('libs/middlewares.js')
    .then('routes')
    .then('libs/boot.js')
    .into(app);
