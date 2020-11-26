const mongoose = require('mongoose')

const tenderoSchema = new mongoose.Schema({
    business: {type: String, required: true},
    nit: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    document: {type: String, required: true},
    phone: {type: String, required: true},
    email: { type: String, require: true, unique: true },
    city: {type: String, required: true},
    address: {type: String, required: true},
    password: { type: String, require: true },
    repeatPassword: { type: String, require: true},
})
module.exports = mongoose.model('Tendero', tenderoSchema)