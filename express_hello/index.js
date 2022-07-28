// importamos express
import express from 'express'
// const name = require ('module) no funciona con TYpe: module

// guarda funciones o métodos para trabajar la req, res, middle, handles, routers
const app = express()   

// localhost:3001/

// define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get('/', (req, res)=> {
    console.log('res =========', res)

    res.send('primer backend con express')
})

// Se define el puerto y el callback
app.listen(3001, ()=> {

    console.log('Application running on port 3001')
})