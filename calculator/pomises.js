const retrieveData = () => {
    return new Promise((resolve, reject) => {
        resolve('Ejecutando en promesa')
    }
    )
}

async function main() {

    console.log('INICIO ')
    try {
        const resultPromise = await retrieveData()
        console.log(resultPromise)    
    } catch (error) {
        console.log(error)
    }
    
    console.log ('EJECUTANDO')
    console.log('FIN')

}

main()