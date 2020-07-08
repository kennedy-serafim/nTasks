import express from 'express';
import consign from 'consign';

const port = 3000;

const app = express();

app.set('json spaces', 4);

consign()
    .include('./routes')
    .into(app);

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});