'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

router.post('/account/login/', controller.postLogin);
router.post('/post/usuario/create/', controller.postCreateLogin);
router.post('/post/service/create/', controller.postCreateService);


router.put('/put/usuario/:id', controller.put);
router.patch('/patch/usuario/:id', controller.patch);  
router.delete('/delete/usuario/:id', controller.delete);

module.exports = router;
