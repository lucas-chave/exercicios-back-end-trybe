const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/produtos', async (_req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/produto/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/usuario', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/usuario/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(200).json(products);
});

router.put('/usuario/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;