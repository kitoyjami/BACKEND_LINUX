// importamos express
import express from 'express'
import UserService from './services/Users.js'
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

const userService= new UserService()


// define el verbo HTTP con 2 params; la ruta '/' y el handler
app.get('/', (_, res)=> {
    console.log('respuesta de mi instancia', userService.users)
    res.status(200).json({message: "all users", 
    data: userService.users
})
})

app.post('/', async (req, res)=> {
    const {name, lastName, email} = req.body

    try{
        const result = await userService.createUser({name, lastName, email})
        console.log('result', result)
        res.status(201).json({
            message: result,
            data: { name,
                    lastName,
                    email,
                    id: 3 }, 
        })
    } catch(error) {
        console.log('error', error)
    }

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

app.put('/:id', async(req, res)=> {
    const {name , lastName, email}= req.body
    const {id} =req.params
    console.log('params', id)
    try{
        const result =await userService.updateUser(id, {
            name, 
            lastName,
            email   
        })

        res.status(200).json({
            message: result,
            data: { 
                name, 
                lastName,
                email
            }
        })

    } 
    catch(error) {
        console.log('error', error)
    }



})

// Se define el puerto y el callback
app.listen(3001, ()=> {
    console.log('Application running on port 3001')
})