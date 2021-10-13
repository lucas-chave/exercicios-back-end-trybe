const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/produtos', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();
    if (products.length === 0) return res.status(204).json(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'erro no servidor' });
  }
});

router.get('/produto/:id', async (req, res, _next) => {
  try {
    const product = await ProductModel.getById(req.params.id);
    if (product.length === 0) return res.status(204).json(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'erro no servidor' });
  }
});

router.post('/usuario', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'erro no servidor' });
  }
});

router.delete('/usuario/:id', async (req, res) => {
  try {
    const products = await ProductModel.exclude(req.params.id);
    res.status(200).json(products);  
  } catch (error) {
    res.status(500).json({ message: 'erro no servidor' });
  }
});

router.put('/usuario/:id', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const products = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'erro no servidor' });
  }
});

module.exports = router;
