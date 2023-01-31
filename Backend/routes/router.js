"use strict"
// configuración de las rutas

var express = require("express");
//controladores para usuarios
var userController = require('../controller/userController');

var router = express.Router();
var multipart = require("connect-multiparty");
var multipartMiddleWare = multipart({ uploadDir: "./img" });

//Rutas para el usuario
router.post('/USave', userController.saveUser);
router.get('/user/:UserName', userController.getUser);
router.get('/users', userController.getUsers);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;