const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const {conectDB} = require('./db')



const app = express()

app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3000


conectDB()
require('./routes/user')(app)
require('./routes/product')(app)
require('./routes/barrio')(app)
require('./routes/tienda')(app)
require('./routes/cliente')(app)
require('./routes/tendero')(app)
require('./routes/sugerencia')(app)
require('./routes/surtido')(app)
require('./routes/pedido')(app)

app.listen(port, () => {
    console.log('El servidor se levanto correctamente.')
})