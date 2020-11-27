module.exports = (app) => {
    const pedido = require('../controllers/pedido')
    app.post('/pedido/create', pedido.create)
    app.put('/pedido/update/:id', pedido.update)
    app.get('/pedido/getAll', pedido.getAll)
    app.get('/pedido/getOne/:id', pedido.getOne)
    app.delete('/pedido/delete/:id', pedido.deleteOne)
}