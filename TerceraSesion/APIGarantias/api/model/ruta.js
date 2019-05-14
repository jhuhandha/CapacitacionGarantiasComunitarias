const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var rutaSchema = new Schema({
    nombre : {
        type : String,
        required : [true, 'El campo nombre es requerido']
    },
    usuario_id : {
        type : Schema.Types.ObjectId,
        ref: 'Usuario',
        required : [true, 'El usuario es requerido']
    },
    fecha_creacion : {
        type : Date,
        default : Date.now,
    },
    fecha_final : {
        type : Date
    },
    hora_inicial : {
        type: String
    },
    hora_final : {
        type: String
    },
    lat : {
        type: Number
    },
    long : {
        type: Number
    },
    pasos : [{
        lat: Number,
        long: Number,
        foto_id: {
            type: Schema.Types.ObjectId,
            ref : 'Foto'
        }
    }]
});

module.exports = mongoose.model('Ruta', rutaSchema, 'ruta');