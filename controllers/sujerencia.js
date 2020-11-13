const SugerenciaModel = require('../models/sugerencia')
const service = require('../services/index')

exports.create = (req, res) => {

    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const sugerencia = new SugerenciaModel ({
        firstName: req.body.firstName,
        email:  req.body.email,
        phone: req.body.phone,        
        mensaje: req.body.mensaje        
    })

    sugerencia.save()
    .then((dataSugerencia) => {res.send(dataSugerencia)})
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update=(req, res) => {
    if(Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
        const sugerencia = {
            firstName: req.body.firstName,
            email:  req.body.email,
            phone: req.body.phone,        
            mensaje: req.body.mensaje              
        }

    SugerenciaModel.findByIdAndUpdate(req.params.id, sugerencia)
    .then(
        (sugerenciaUpdate) => {
            res.send(sugerenciaUpdate)
        }
    )
    .catch(
        (error) => {
            res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.getAll = (req, res) => {
    SugerenciaModel.find()        
        .then((sugerencias) => {res.send(sugerencias) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.getOne = (req, res) => {
    SugerenciaModel.findById(req.params.id)  
        .populate('sugerencia') 
        .exec()   
        .then((sugerencia) => { res.send(sugerencia) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
exports.deleteOne = (req, res) => {
    SugerenciaModel.findByIdAndRemove(req.params.id)
        .then((sugerencia) => { res.send(sugerencia) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}

exports.login = (req, res) => {
    SugerenciaModel.findOne({email: req.body.email}, (error, dataSugerencia) => { //Se valida el correo.    
        if(dataSugerencia != null){
            if(dataSugerencia.password == req.body.password){
                res.send({token: service.createToken(dataSugerencia)})
            }else{
                res.status(400).send({
                    message: 'Los datos no coinciden.'
                })
            }    
        }else{
            res.status(400).send({
                message: 'Los datos no coinciden.'
            })
        }
    })
}