import express, { urlencoded } from 'express' //const express = require('express')
import router from './routes/index.js'
import dotenv from 'dotenv'
import db from './config/db.js'
const app = express()
const port = process.env.PORT || 4000

dotenv.config()
//console.log(process.env.DATABASE)

//Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos Conectada'))
    .catch(error => console.log(error))

//Agregando template Engine - Pug
app.set('view engine', 'pug')

//Agregando midellWare en si todos son midelWars
app.use((req, res, next) => {
    const year = new Date()
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes'
    return next()
})

//Agregar la carpeta public
app.use(express.static('public'))

//body parser para ler datos del formulario
app.use(express.urlencoded({ extended: true }))

//Agregar Routing
app.use('/', router)

app.listen(port, () => {
    console.log(`Escuchando el puerto: ${port}`)
})

// app.listen(port, listening)
// function listening() {
//     console.log(`Escuchando en el puerto: ${port}`)
// }