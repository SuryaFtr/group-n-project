const express = require('express')
const app = express()

const applyMiddleware = require('./middleware')
const authrouter = require('./routes/auth')
const userrouter = require('./routes/user')
const programrouter = require('./routes/program')
const newsrouter = require('./routes/news')
const eventrouter = require('./routes/event')

require('dotenv').config()
const PORT = process.env.PORT || 3000

const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected To MongoDB...'))
    .catch((err) => console.log(err))

app.use((req, res, next) => {
    const allowedOrigins = [
        '*'
    ];
    const origin = req.headers.origin;


    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);

        if (origin === '*') {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        }

        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); 4
    }

    next();
});

applyMiddleware(app)

app.use("/api/v1/auth", authrouter)
app.use("/api/v1/user", userrouter)
app.use("/api/v1/program", programrouter)
app.use("/api/v1/news", newsrouter)
app.use("/api/v1/event", eventrouter)

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
});
module.exports = server

