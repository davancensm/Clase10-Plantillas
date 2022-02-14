const express = require('express');
const productManager = require('../managers/API')

const products = new productManager();

const router = express.Router();

router.get('/', (req,res) => {
    const allProducts = products.getAll();
    res.render('productsList.pug',{products : allProducts})
})  

router.post('/', (req,res) => {
    const producto = req.body
    products.save(producto)
    res.redirect('/')
})

module.exports = router;