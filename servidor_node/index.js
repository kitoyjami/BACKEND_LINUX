const http = require('http')

//CLIENTE
// axios.get('http://localhost:3000/')


// SERVIDOR
const server = http.createServer( (req,res) => {

     console.log('req', req.headers.authorization)
     console.log('req', req.url)
     console.log('req', req.method)
})


server.listen(3000,'localhost', ()=>{
    console.log('Servidor arriba');
})