const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var fotoSchema = new Schema({
    url : {
        type: String,
        required : [true, 'La foto es requerida']
    },
    descripcion : String
});

module.exports = mongoose.model('Foto', fotoSchema, 'foto');