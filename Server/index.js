const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://0.0.0.0:27017/test')

app.post('/add', (req, res => {
    const task = req.body.task;
    TodoModel.create
}))

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})