"use strict"
var Product = require("../models/Product");
var controller = {
    getProduct: (req, res) => {
        var product_id = req.params.id;
        Product.findById(product_id, (err, product) => {
            if (err) {
                return res.status(500).send({ msg: "Error al obtener el producto" });
            }
            if (!product) {
                return res.status(404).send({ msg: "El producto no existe" });
            }
            return res.status(200).send({ product });
        });
    },
    getProductsOwner: (req, res) => {
        let owner = req.params.owner
        Product.find({owner:owner}).exec((err, products) => {
            if (err) {
                return res.status(500).send({ msg: "Ha ocurrido un error cargando los productos" });
            }
            if (!products) {
                return res.status(404).send({ msg: "No existen productos" });
            }
            return res.status(200).send({ products });
        });
    }
    ,
    getProductSearchOwner: (req, res) => {
        let productName = new RegExp(`${req.params.searchBy}`, "i")
        let owner = req.params.owner
        Product.find({name:productName,owner:owner}).exec((err, products) => {
            if (err) {
                return res.status(500).send({ msg: "Ha ocurrido un error cargando los productos" });
            }
            if (!products) {
                return res.status(404).send({ msg: "No existen productos" });
            }
            return res.status(200).send({ products });
        });
    },
    getProductSearch: (req, res) => { 
        let productName = new RegExp(`${req.params.searchBy}`, "i")
        Product.find({ name: productName }).exec((err, products) => {
            if (err) {
                return res.status(500).send({ msg: "Ha ocurrido un error cargando los productos" });
            }
            if (!products) {
                return res.status(404).send({ msg: "No existen productos" });
            }
            return res.status(200).send({ products });
        });
    }
};

module.exports = controller;