module.exports = (app) => {
    const sugerencia = require('../controllers/sujerencia')
    app.post('/sugerencia/create', sugerencia.create)
    app.put('/sugerencia/update/:id', sugerencia.update)
    app.get('/sugerencia/getAll', sugerencia.getAll)
    app.get('/sugerencia/getOne/:id', sugerencia.getOne)
    app.delete('/sugerencia/delete/:id', sugerencia.deleteOne)
}