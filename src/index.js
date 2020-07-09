import express from 'express';
import consign from 'consign';

const app = express();

consign({
    cwd: 'src'
})
    .include('libs/config.js')
    .then('data.js')
    .then('libs/middlewares.js')
   // .then('routes')
    .then('libs/boot.js')
    .into(app);
