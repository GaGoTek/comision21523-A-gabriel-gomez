// // importar modulo fs
// const fs = require(`fs`);

// // //creacion de Archivo txt a traves de "fs"
// // fs.createWriteStream(`./archivo.txt`, (err, done)=>{
// //     console.log(`Archivo creado con Exito`);
// // });



// // importar modulo http
// const http = require(`http`);
// const { clearScreenDown } = require("readline");




// const users = [{
//     id: 1,
//     name: "john",
//     lastname: "Doe"
// },
// {
//     id: 2,
//     name: "Tony",
//     lastname: "Stark"
// },
// {
//     id: 3,
//     name: "Laura",
//     lastname: "Smith"
// }, ]





// //Crear servidor con "http"
// http.createServer( (req, res) => {

//     if(req.url === '/users'){
//         console.log(req.url);
//         // (200, { 'Content-Type': 'text/html' });
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(users));
//         res.end();
//         return;
//     }

//     res.end() 
// }) .listen(3000, console.log(`El servidor está funcionando en http://localhost:3000/`))