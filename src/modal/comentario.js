const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newComentario = new Schema({
    NombreRuta: {type: String},

    comentarios:[{
        nombre: {type: String},
        comentario: {type: String},
        email: {type: String},
        fecha: {type: Date, default: Date.now},
        idComen: {type: String},
    }]

   });  




module.exports = mongoose.model('Comentario', newComentario);