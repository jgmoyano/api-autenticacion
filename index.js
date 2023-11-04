require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: '*',  //Aqui va el dominio
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
}

app.use(express.json())
app.use(cors(corsOptions))

mongoose.connect(process.env.MONGO_URI)

app.use('/v1', routes)

app.post('/', (req, res) => {
    res.json({
        mensaje: 'se creó un elemento'
    })
})

app.get('/', (req, res) => {
    res.json({
        mensaje: 'se obtuvo un elemento'
    })
})

app.put('/', (req, res) => {
    res.json({
        mensaje: 'se actualizó un elemento'
    })
})

app.delete('/', (req, res) => {
    res.json({
        mensaje: 'se eliminó un elemento'
    })
})

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT)
})