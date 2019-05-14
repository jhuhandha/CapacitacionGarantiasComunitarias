const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    apellido: {
        type: String,
        required: [true, 'El campo apellido es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El campo correo es requerido']
    },
    telefono: {
        type: String,
        required: false,
        maxlength: [15, 'El telefono no debe superar los 15']
    },
    google_id: {
        type: String,
        unique: false
    },
    push_id: {
        type: String,
        unique: false
    },
    socket_id: {
        type: String,
        unique: false
    },
    usuario: {
        type: String,
        unique: true,
        required: [true, 'El campo usuario es requerido']
    },
    clave: {
        type: String,
        required: [true, 'El campo clave es requerido']
    },
    ingresos: [{
        fecha: {
            type: Date,
            default: Date.now
        }
    }]
});

usuarioSchema.plugin(uniqueValidator, {
    message: 'Error, el campo {PATH} es unico.'
});

var virtual = usuarioSchema.virtual('nombrecompleto');
virtual.get(function () {
  return this.nombre + ' ' + this.apellido;
});

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuario');