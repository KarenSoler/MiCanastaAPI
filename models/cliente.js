const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = mongoose.model('Cliente', clienteSchema)

/*  email: { type: String, require: true, unique: true },
    phone: { type: String, require: true},
    name: { type: String, require: true},
    lastName: { type: String, require: true},
    password: { type: String, require: true },
    repeatPassword: { type: String, require: true },
    rol: { type: String, require: true},
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]*/
