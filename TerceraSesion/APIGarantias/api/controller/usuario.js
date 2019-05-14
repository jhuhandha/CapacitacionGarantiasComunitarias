const Usuario = require("./../model/usuario");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const OneSignal = require('onesignal-node');

let guardar = (req, res) => {

    let datos = req.body;

    let usuario = new Usuario({
        nombre: datos.nombre,
        apellido: datos.apellido,
        correo: datos.correo,
        telefono: datos.telefono,
        usuario: datos.usuario,
        push_id: datos.push_id,
        clave: bcrypt.hashSync(datos.clave, 10)
    });

    usuario.save((err, usuario) => {
        if (err)
            return res.status(401).json({
                ok: false,
                err
            });

        let token = jwt.sign({
            data: usuario
        }, process.env.SECRET, {
            expiresIn: '4h'
        });

        // var firstNotification = new OneSignal.Notification({      
        //     contents: {      
        //         en: `Hola, tenemos un nuevo usuario. ${usuario.nombrecompleto}`      
        //     }, 
        //     included_segments: ["Active Users", "Inactive Users"],   
        //     data : {
        //         id : usuario._id
        //     }  
        // });

        // myClient.sendNotification(firstNotification, function (err, httpResponse,data) {      
        //     if (err) {      
        //         console.log('Something went wrong...');      
        //     } else {      
        //         console.log(data, httpResponse.statusCode);      
        //     }      
        //  }); 

        return res.status(200).json({
            ok: true,
            usuario : usuario,
            token
        });
    })
}


module.exports = {
    guardar
}