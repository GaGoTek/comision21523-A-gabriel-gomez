const { Router } = require('express')
const router = Router();


const users = [{
    id: 1,
    name: "John",
    lastname: "Doe"
},
{
    id: 2,
    name: "Tony",
    lastname: "Stark"
},
{
    id: 3,
    name: "Laura",
    lastname: "Smith"
}, ]

router.get('/', (req, res)=>{ 
    res.send('Bienvenido Visitante a mi primer servidor en Express')

})

router.get('/users', (req, res)=>{
    res.json(users)
})



router.post('/recibir-datos/:userId', (req, res)=>{

//Recibir datos a travez del Body
    const { name, lastname } = req.body;
   // console.log(req.body);

//Recibir datos a travez del Query
const { q } = req.query;

//Params
//const {userId} = req.params;
const userId = req.params.userId;


// res.send(`Bienvenido ${name} ${lastname}`)
// res.send(`Bienvenido ${q}`)

res.send(`Id de usuario ${userId}`)

})




module.exports = router;