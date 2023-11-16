const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    photo: { type: String },
    price: { type: String }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product