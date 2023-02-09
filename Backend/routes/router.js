"use strict"
// configuración de las rutas

var express = require("express");
//controladores para usuarios
var userController = require('../controller/userController');
var productController = require('../controller/productController')
var storeController = require('../controller/storeController')
var cartController = require('../controller/CartController')
var orderController = require('../controller/orderController')
var router = express.Router();

//Rutas para el usuario
router.post('/USave', userController.saveUser);
router.get('/user/:email', userController.getUser);
router.get('/users', userController.getUsers);
router.get('/emailExistence/:email', userController.emailExistence);
router.post('/confirmPassword', userController.confirmPassword);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

//Rutas para producto
router.post('/saveProduct', productController.saveProduct);
router.get("/GetProduct/:id", productController.getProduct);
router.get("/GetProducts", productController.getProducts);
router.get("/GetProducts/:owner", productController.getProductsOwner);

//Rutas para tienda
router.post('/saveStore', storeController.saveStore);
router.get('/getStore/:id', storeController.getStore)
router.get('/getStores', storeController.getStores)

//Rutas para carrito
router.post('/saveCart', cartController.saveCart);
router.get('/getCart/:userId', cartController.getCart);
router.put('/updateCart/:id', cartController.updatecart);
router.put('/emptyCart', cartController.emptyCart);

//Routes para pedido
router.post('/saveOrder', orderController.saveOrder);
router.get('/getOrders', orderController.getOrders);
router.get('/getOrder/:id', orderController.getOrder);

module.exports = router;
