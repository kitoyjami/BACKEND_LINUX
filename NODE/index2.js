const OS = require('os');

// variables globales en el server

console.log('dirname', __dirname)
console.log('filename', __filename)
console.log('process', process.env)


console.log('free memory', OS.freemem())