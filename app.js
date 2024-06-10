const express = require('express')

const app = express()

// Config JSON Response
app.use(express.json())

// Public folder for images
app.use(express.static('public'))

// Routes


app.listen(5000)