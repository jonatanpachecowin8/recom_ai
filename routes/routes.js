const express = require('express');
const {recomendacionesS } = require('../models/data');
const router = express.Router();

router.get('/api/getRecomendacionS/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = recomendacionesS.filter(recomendacion => recomendacion.UserId === userId);
    res.json({ recomendaciones: data });
  } catch (error) {
    console.error('Error al procesar la solicitud de recomendaciones.', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


module.exports = router;
