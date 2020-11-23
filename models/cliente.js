const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    phone: { type: String, require: true},
    name: { type: String, require: true},
    lastName: { type: String, require: true},
    password: { type: String, require: true },
    repeatPassword: { type: String, require: true},
})

module.exports = mongoose.model('Cliente', clienteSchema)