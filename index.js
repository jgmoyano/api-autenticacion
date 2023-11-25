require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes')
const app = express()
const cors = require('cors')
const mercadopago = require("mercadopago");

mercadopago.configure({
    access_token: "TEST-678012166059343-111111-b7336364ce4bd0784b3708f031d53aa2-215874158",
  });

const corsOptions = {
    origin: '*',
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

app.post("/create_preference", (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: "https://jgmoyano.github.io/Proyecto-5",
        failure: "https://jgmoyano.github.io/Proyecto-5",
        pending: "",
      },
      auto_return: "approved",
    };
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  });

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT)
})

