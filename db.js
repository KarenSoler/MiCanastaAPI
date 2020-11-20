const mongoose = require('mongoose')
const config = require('./config')

const conectDB = () => {
    mongoose.connect('mongodb+srv://CynanesProyect:CYNANES2020@micanasta.q72ea.mongodb.net/MiCanasta?',{useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if(error){
            console.log('Error: ', error)
        }
        else{
            console.log('Nos conectamos a Cynanes Proyect DB.')
        }
    })
}
module.exports = {conectDB}