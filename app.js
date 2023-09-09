const express = require('express')
const app = express()



// Mis Middlewares

app.use(express.json())


app.use(require('./routes/users.routes'))


app.listen(3000, console.log('servidor en http://localhost:3000/'))
