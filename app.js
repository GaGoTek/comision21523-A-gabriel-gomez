const express = require('express')

const app = express()

app.get('/', (req, res)=>{ 
    res.send('Bienvenido a mi primer servidor en Express')

})

app.listen(3000, console.log('servidor en http://localhost:3000/'))