const { ObjectId } = require('mongoose')
const mongoose = require('mongoose')
const Tendero = require('./tendero')

const surtidoSchema = new mongoose.Schema({
    nameProduct: {type: String, required: true},
    priceProduct: {type: String, required: true},
    quantityProduct: {type: String, required: true},
    image: {type: String, required: true},
    tendero: {type: ObjectId , require: true, ref:'Tendero' }
})
module.exports = mongoose.model('Surtido', surtidoSchema)