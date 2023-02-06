'use strict'
var Order = require('../models/Order');

var controller = {
    saveOrder: (req, res) => {
        let order = new Order();
        order.userId = params.userId;
        order.generateDate = params.generateDate;
        order.deliveryDate = params.deliveryDate;
        order.orderGroups = params.orderGroups;
        order.topay = params.toPay;
        var params = req.body;

        order.save((err, orderSave) => {
            if (err) {
                return res.status(500).send({ msg: 'Error en la petición' })
            }
            if (!orderSave) {
                return res.status(404).send({ msg: 'No se ha podido guardar el pedido' })
            }
            return res.status(200).send({ msg: 'Pedido agregado exitosamente', order: orderSave })
        })

    },

    getOrders: (req, res) => {
        Order.find({}).exec((err, orders) => {
            if (err) {
                return res.status(500).send({ msg: "Ha ocurrido un error cargando los pedidos" });
            }
            if (!orders) {
                return res.status(404).send({ msg: "No existen pedidos" });
            }
            return res.status(200).send({ orders });
        });
    },

    getOrder: function (req, res) {
        var orderId = req.params.orderId;

        if (!orderId) {
            return req.status(404).send({ message: 'El pedido no existe' })
        }

        Order.findOne({ orderId }).exec((err, orderFound) => {
            if (err) {
                return res.status(500).send({ message: 'Error al devolver los datos.' });
            }

            if (!orderFound) return res.status(200).send({ message: 'El pedido no existe' })

            return res.status(200).send({ order: orderFound });
        })
    }
}

module.exports = controller