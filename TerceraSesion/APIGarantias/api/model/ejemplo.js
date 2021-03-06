const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre : {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    apellido : {
        type: String,
        required: true
    },
    telefono : {
        type: String,
        required: false
    },
    correo : {
        type: String,
        required: true,
    },
    usuario : {
        type: String,
        required: true
    },
    clave : {
        type: String
    },
    estado : {
        type: Boolean,
        required: false,
        default: true
    },
    google_id : {
        type: String
    },
    created_at :{
        type: Date,
        default :  Date.now
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);