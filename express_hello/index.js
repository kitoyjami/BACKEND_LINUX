// importamos express
import express from 'express'
// const name = require ('module) no funciona con TYpe: module

// guarda funciones o métodos para trabajar la req, res, middle, handles, routers
const app = express()   

// localhost:3001/ => ruta raiz => USERS

/** SINTAXIS DE RESPUESTA DE NUESTRA API
    * {
    *  "message": "",
    * "data": {}
    * }
*/

// AQUI VAMOS A PONER NUESTROS MIDDLEWARES

// express.json() // para que nosotros podamos recibir json

app.use(express.json())

// define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get('/', (_, res)=> {
    res.status(200).json({message: "all users", 
    data:[
        {
            id:1, 
            name: "juan",
            lastName: "perez",
            email: "jgarcia@crsleon.com"
        },
        {
            id:2,
            name: "Eddy",
            lastName: "Urbano",
            email: "eurbano@crsleon.com"
        },
    ],
})
})

app.post('/', (req, res)=> {
    res.status(201).json({
        message: "user created successfully",
        data: { name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                id: 3 }, 
    })

})

app.delete('/:id', (req, res)=> {
    console.log('params', req.params.id)
    res.status(200).json(
        {
            message: "user deleted successfully",
            data: [
                { }   
            ]

        }

    )

})

app.put('/', (req, res)=> {
})

// Se define el puerto y el callback
app.listen(3001, ()=> {
    console.log('Application running on port 3001')
})