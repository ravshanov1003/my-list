const express = require("express")

const { router } = require('./routes/listRouter')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/todo', router)

app.listen(3000, _ => console.log('server is running on port 3000'))