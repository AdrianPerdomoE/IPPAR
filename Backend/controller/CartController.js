'use strict'
var Cart = require('../models/Cart');

var controller = {
    saveCart: (req, res) => {
        let carrito = new Cart();
        var params = req.body;
        carrito.cartItems = params.cartItems;
        carrito.userId = params.userId;
        carrito.toPay = params.toPay;
        carrito.save((err, cartSave) => {
            if (err) {
                return res.status(500).send({ msg: 'Error en la petición' })
            }
            if (!cartSave) {
                return res.status(404).send({ msg: 'No se ha podido guardar el carrito' })
            }
            return res.status(200).send({ msg: 'Carrito agregado exitosamente', cart: cartSave })
        })

    },
    getCart: function (req, res) {
        var userId = req.params.userId;

        if (!userId) {
            return req.status(404).send({ message: 'El carrito no existe' })
        }


        Cart.findOne({ userId: userId }).exec((err, cartFound) => {
            if (err) {
                return res.status(500).send({ message: 'Error al devolver los datos.' });
            }


            if (!cartFound) return res.status(200).send({ message: 'El carrito no existe' })

            return res.status(200).send({ cart: cartFound });

        })
    }
    ,
    updatecart: function (req, res) {
        var cartId = req.params.id;
        var update = req.body;
        Cart.findByIdAndUpdate(cartId, update, { new: true }, (err, cartUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar' });

            if (!cartUpdated) return res.status(404).send({ message: 'No se ha podido actualizar' });

            return res.status(200).send({
                cart: cartUpdated
            })
        })
    },
    emptyCart: function (req, res) {
        let update = req.body;
        update.cartItems = [];
        update.toPay = 0;
        Cart.findByIdAndUpdate(update._id, update, { new: true }, (err, cartUpdated) => {
            if (err) return res.status(500).send({ message: 'Error al actualizar' });

            if (!cartUpdated) return res.status(404).send({ message: 'No se ha podido actualizar' });

            return res.status(200).send({
                cart: cartUpdated
            })
        })
    }
}
module.exports = controller