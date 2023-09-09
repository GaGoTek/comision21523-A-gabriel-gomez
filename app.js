// importar modulo fs
const fs = require(`fs`);

// //creacion de Archivo txt a traves de "fs"
// fs.createWriteStream(`./archivo.txt`, (err, done)=>{
//     console.log(`Archivo creado con Exito`);
// });

// importar modulo http
const http = require(`http`);

//Crear servidor con "http"
http.createServer( (req, res) => {
    res.write(req.url)
    res.end()
}) .listen(3000, console.log(`El servidor está funcionando en https://localhost:3000`))