const express = require('express')
const app = express()
const routegenerator = require('./routergen')
// rutas!
function middle(req,res,next){
    console.log('middleware')
    next()
}
app.use('/p1', middle, routegenerator('mihandler'))
app.use('/p2', routegenerator('miotrohandler'))
app.use('/p3', middle,routegenerator('nocompletehandler'))

app.listen(8888, (error)=> {
    if (error) throw Error
    console.log('escuchando en 8888')
})