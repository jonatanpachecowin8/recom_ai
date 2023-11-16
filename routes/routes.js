const express = require('express');
const AWSPersonalizeController = require('../controllers/AWSPersonaliceController');

const router = express.Router();

const personalizeController = new AWSPersonalizeController();

// Ruta para obtener recomendaciones simuladas
router.get('/api/getRecomendacionSimulada/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Simular la obtención de recomendaciones para el usuario
    const recomendacionesSimuladas = [
      { itemId: 'producto_123', score: 0.95 },
      { itemId: 'producto_456', score: 0.85 },
      { itemId: 'producto_789', score: 0.75 }
    ];

    res.json({ recomendaciones: recomendacionesSimuladas });
  } catch (error) {
    console.error('Error al procesar la solicitud de prueba:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Ruta para obtener recomendaciones reales desde AWS Personalize
router.get('/api/getRecomendacion/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // ARN de la campaña en AWS Personalize
    const campaignArn = 'arn:aws:personalize:...:campaign/MiCampaña'; // Reemplaza con tu ARN

    // Obtener recomendaciones para el usuario
    const recomendaciones = await personalizeController.obtenerRecomendacionesParaUsuario(campaignArn, userId);

    res.json({ recomendaciones });
  } catch (error) {
    console.error('Error al procesar la solicitud real:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
