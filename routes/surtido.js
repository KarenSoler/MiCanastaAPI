module.exports = (app) => {
    const surtido = require('../controllers/surtido')
    app.post('/surtido/create', surtido.create)
    app.put('/surtido/update/:id', surtido.update)
    app.get('/surtido/getAll', surtido.getAll)
    app.get('/surtido/getOne/:id', surtido.getOne)
    app.delete('/surtido/delete/:id', surtido.deleteOne)
}