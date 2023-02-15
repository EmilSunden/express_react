import express from 'express';
import cors from 'cors';

import { createUser, getUsers } from './controllers/users.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => {
    res.send('HOMEPAGE');
})

app.get('/user', getUsers);

app.post('/user', createUser)

app.listen(5000, () => {
    console.log('Backend running on http://localhost:5000')
});