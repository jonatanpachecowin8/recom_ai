const express = require('express');
const AWSPersonalizeController = require('../controllers/AWSPersonaliceController');
const router = express.Router();

router.get('/api/getRecomendacionS/:userId', async (req, res) => {
  try {
    const recomendacionesS = [
      { itemId: '1', score: 0.95 },
      { itemId: '5', score: 0.85 },
      { itemId: '6', score: 0.75 },
      { itemId: '11', score: 0.65 },
      { itemId: '25', score: 0.55 },
      { itemId: '16', score: 0.25 }
    ];

    res.json({ recomendaciones: recomendacionesS });
  } catch (error) {
    console.error('Error al procesar la solicitud de recomendaciones.', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.get('/api/getRecomendacion/:userId', AWSPersonalizeController.obtenerRecomendacionesParaUsuario);

module.exports = router;
