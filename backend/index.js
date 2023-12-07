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

applyMiddleware(app)

const mongoose = require('mongoose')
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connected To MongoDB...'))
    .catch((err) => console.log(err))


app.use("/auth", authrouter)
app.use("/user", userrouter)
app.use("/program", programrouter)
app.use("/news", newsrouter)
app.use("/event", eventrouter)

const server = app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT)
});
module.exports = server

