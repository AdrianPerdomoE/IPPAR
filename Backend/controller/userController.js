'use strict'
var User = require('../models/User');

var controller = {
    saveUser: (req, res) => {
        let usuario = new User();
        var params = req.body;
        usuario.name = params.name;
        usuario.address = params.adress;
        usuario.password = params.password;
        usuario.email = params.email;
        usuario.save((err, userStored) => {
            if (err) {
                return res.status(500).send({ msg: 'Error en la petición' })
            }
            if (!userStored) {
                return res.status(404).send({ msg: 'No se ha podido guardar el usuario' })
            }
            return res.status(200).send({ msg: 'Usuario agregado exitosamente', user: userStored })
        })

    },
    getUser: function (req, res) {
        var email = req.params.email;

        if (!email) {
            return req.status(404).send({ message: 'El usuario no existe' })
        }


        User.findOne({ email: email }).exec((err, user) => {
            if (err) {
                return res.status(500).send({ message: 'Error al devolver los datos.' });
            }


            if (!user) return res.status(200).send({ message: 'El usuario no existe' })

            return res.status(200).send({ user });

        })
    },
    getUsers: function (req, res) {
        User.find({}).exec((err, users) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })

            if (!users) return res.status(404).send({ message: 'No hay usuarios para mostrar' })

            return res.status(200).send({ users });
        })

    },
    emailExistence: function (req, res) {
        let userEmail = req.params.email;

        User.find({}).exec((err, users) => {
            if (err) return res.status(500).send({ message: 'Error al devolver los datos' })

            if (!users) return res.status(404).send({ message: 'No hay usuarios registrados' })
            let existence = false
            users.forEach(usr => {
                if (usr.email == userEmail) { existence = true; }
            })
            return res.status(200).send({ existence });
        })

    }
    ,
    updateUser: function (req, res) {
        var userId = req.params.id;
        var update = req.body;

        User.findByIdAndUpdate(userId, update, { new: true }, (err, userUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar' });

            if (!userUpdated) return res.status(404).send({ message: 'No se ha podido actualizar' });

            return res.status(200).send({
                user: userUpdated
            })
        })
    },
    deleteUser: function (req, res) {
        let userId = req.params.id;

        User.findByIdAndDelete(userId, (err, userRemoved) => {
            if (err) return res.status(500).send({ message: 'No se ha podido borrar el proyecto' })

            if (!userRemoved) return res.status(404).send({ message: 'No se puede eliminar ese usuario' })

            return res.status(200).send({
                user: userRemoved
            })
        })
    }
}
module.exports = controller