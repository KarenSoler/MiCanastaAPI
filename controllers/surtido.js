const SurtidoModel = require('../models/surtido')

exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }

    const surtido = new SurtidoModel({
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
        quantityProduct: req.body.quantityProduct,
        image: req.body.image,
        tendero: req.body.tendero
    })

    surtido.save()
        .then((datasurtido) => { res.send(datasurtido) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }

    const surtido = {
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
        quantityProduct: req.body.quantityProduct,
        image: req.body.image,
        tendero: req.body.tendero
    }

    SurtidoModel.findByIdAndUpdate(req.params.id, surtido)
        .then(
            (surtidoUpdate) => {
                res.send(surtidoUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
exports.getAll = (req, res) => {
    SurtidoModel.find()
        .then((surtidos) => { res.send(surtidos) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.getOne = (req, res) => {
    SurtidoModel.findById(req.params.id)
        .then((surtido) => { res.send(surtido) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.deleteOne = (req, res) => {
    SurtidoModel.findByIdAndRemove(req.params.id)
        .then((surtido) => { res.send(surtido) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
