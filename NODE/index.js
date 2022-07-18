const http = require('http')


// NODE corre por default en el pueto 3000

const port = 3001
const host ='localhost'
// req =request | res = response

// Es im callback que se ejecuta al finalizar 
// método http.createServer()
const server = http.createServer((req, res) => { 

    res.statusCode =200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Primer progama con backend java script\n')


  })
server.listen(port, host, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
