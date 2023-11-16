const express = require('express');
const AWSPersonalizeController = require('../controllers/AWSPersonaliceController');

const router = express.Router();

const personalizeController = new AWSPersonalizeController();

// Ruta para obtener recomendaciones para un usuario específico
router.get('/api/getRecomendacion/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // ARN de la campaña en AWS Personalize
    const campaignArn = 'arn:aws:personalize:...:campaign/MiCampaña'; // Reemplaza con tu ARN

    // Obtener recomendaciones para el usuario
    const recomendaciones = await personalizeController.obtenerRecomendacionesParaUsuario(campaignArn, userId);

    res.json({ recomendaciones });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
