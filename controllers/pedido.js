const PedidoModel = require('../models/pedido')

exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })

    }

    const pedido = new PedidoModel({
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
        quantityProduct: req.body.quantityProduct,
        image: req.body.image,
        cliente: req.body.cliente
    })

    pedido.save()
        .then((datapedido) => { res.send(datapedido) })
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

    const pedido = {
        nameProduct: req.body.nameProduct,
        priceProduct: req.body.priceProduct,
        quantityProduct: req.body.quantityProduct,
        image: req.body.image,
        cliente: req.body.cliente
    }

    PedidoModel.findByIdAndUpdate(req.params.id, pedido)
        .then(
            (pedidoUpdate) => {
                res.send(pedidoUpdate)
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
    PedidoModel.find()
        .then((pedidos) => { res.send(pedidos) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.getOne = (req, res) => {
    PedidoModel.findById(req.params.id)
        .then((pedido) => { res.send(pedido) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )

}

exports.deleteOne = (req, res) => {
    PedidoModel.findByIdAndRemove(req.params.id)
        .then((pedido) => { res.send(pedido) })
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
