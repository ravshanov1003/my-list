const express = require("express")

const { listRouter } = require('./routes/listRouter')
const { authRouter } = require('./routes/authRouter')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/todo', listRouter)
app.use('/auth', authRouter)

app.listen(3000, _ => console.log('server is running on port 3000'))