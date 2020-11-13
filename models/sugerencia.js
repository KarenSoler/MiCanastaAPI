const mongoose = require('mongoose')

const sugerenciaSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    phone: {type: String, required: true},
    mensaje: {type: String, required:true},
 })
 module.exports = mongoose.model('sugerencia', sugerenciaSchema)