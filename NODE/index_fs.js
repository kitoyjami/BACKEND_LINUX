const fs = require('fs')

const data = 'texto de prueba'

const nameFile = './archivo_texto.txt'
fs.writeFile(nameFile, data,
    (err) => {

        if (err) {
            console.log(err)
        } else console.log('archivo creado')
    }
)


fs.readFile(nameFile, (err, data) => {


    if (err) {
        console.log(err, ` error al leer el archivo ${nameFile}`)
    } else console.log("contenido ",data.toString())
})
