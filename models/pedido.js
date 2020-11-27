const mongoose = require('mongoose')
const Cliente = require('./cliente')

const pedidoSchema = new mongoose.Schema({
    nameProduct: {type: String, required: true},
    priceProduct: {type: String, required: true},
    quantityProduct: {type: String, required: true},
    image: {type: String, required: true},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true}
    
})
module.exports = mongoose.model('Pedido', pedidoSchema)