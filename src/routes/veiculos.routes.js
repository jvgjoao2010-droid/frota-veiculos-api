import express from 'express';
import veiculosServices from '../services/veiculos.Services.js';

const veiculosRouters = express.Router();

veiculosRouters.get('/', async (req, res) => {
  const veiculos = await veiculosServices.getAll();
  res.json(VEICULOS);
});
veiculosRoutesRouters.post('/', async (req, res) =>  {
        const VEICULOS = await veiculosServices.create(req.body);
  return res.status(201).json(VEICULOS);
});

export default veiculosRoutes;