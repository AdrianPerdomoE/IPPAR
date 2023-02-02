"use strict"
var Store = require("../models/Store");
var controller = {
    getStore: (req, res) => {
        var store_id = req.params.id;
        Store.findById(store_id, (err, store) => {
            if (err) {
                return res.status(500).send({ msg: "Error al obtener la tienda" });
            }
            if (!store) {
                return res.status(404).send({ msg: "La tienda no existe" });
            }
            return res.status(200).send({ store: store });
        });
    },
    getStores: (req, res) => {
        Store.find({}).exec((err, stores) => {
            if (err) {
                return res.status(500).send({ msg: "Ha ocurrido un error cargando las tiendas" });
            }
            if (!stores) {
                return res.status(404).send({ msg: "No existen tiendas" });
            }
            return res.status(200).send({ stores: stores });
        });
    }
};

module.exports = controller;