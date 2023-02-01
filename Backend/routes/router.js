"use strict"
// configuración de las rutas

var express = require("express");
//controladores para usuarios
var userController = require('../controller/userController');
var productController = require('../controller/productController')
var storeController = require('../controller/storeController')
var router = express.Router();

//Rutas para el usuario
router.post('/USave', userController.saveUser);
router.get('/user/:email', userController.getUser);
router.get('/users', userController.getUsers);
router.get('/emailExistence/:email', userController.emailExistence);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

//Rutas para producto
router.get("/GetProduct/:id", productController.getProduct);
router.get("/GetProducts/:owner", productController.getProductsOwner);
router.get('/searchProduct/:searchBy',productController.getProductSearch);
router.get('/search/:searchBy/:owner',productController.getProductSearchOwner);

//Rutas para tienda
router.get('/getStore/:id',storeController.getStore)
router.get('/getStores',storeController.getStores)
module.exports = router;