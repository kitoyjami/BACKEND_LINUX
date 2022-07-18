// require nos sirve para importar un modulo

const { mult, split, subs, sum} = require('./operations')

const main = () => {
    const number1 =20
    const number2 =10

    const a = sum(number1, number2)
    const b = subs(number1, number2)
    const c = mult(number1, number2)
    const d = split(number1, number2)

    console.log(a, b, c, d)


}

main()


