import { users } from "../database/database.js";

export const createUser = (req, res, next) => {
    req.on('data', (chunk) => {
        const readableChunk = chunk.toString();
        const body = JSON.parse(readableChunk);
        req.body = body;
        const { username, password, profession } = req.body;
        users.push({ username, password, profession })
        console.log(req.body)
        next();
    })
    res.send('POST REQUEST AT /user')
}

export const getUsers = (req, res) => {
    res.send(`GET REQUEST ON /user ${users}`)
}

