const express = require('express')
const app = express()
const routegenerator = require('./routergen')
// rutas!
app.use('/p1', routegenerator('mihandler'))
app.use('/p2', routegenerator('miotrohandler'))
app.use('/p3', routegenerator('nocompletehandler'))

app.listen(8888, (error)=> {
    if (error) throw Error
    console.log('escuchando en 8888')
})