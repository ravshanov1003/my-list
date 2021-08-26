const express = require("express")

const { getTodos, getTodo } = require('./controllers/listController')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', getTodos)
app.get('/:id', getTodo)
app.get()

app.listen(3000, _ => console.log('server is running on port 3000'))