const SistemaSocketService = require("../services/SistemaLibServices");
const AWSS3Controller = require("../controllers/AWSS3Controller");
const axios = require("axios");
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const personalizeRuntime = new AWS.PersonalizeRuntime ();
const sistemaSocketService = new SistemaSocketService();
const s3Controller = new AWSS3Controller();

module.exports = {
  async manejarNuevaVenta() {
    try {
      /*const enlaceArchivoCSV = await sistemaSocketService.obtenerEnlaceArchivoCSV();
      const datosCSV = await descargarYProcesarArchivoCSV(enlaceArchivoCSV);

      const bucketName = process.env.AWS_S3_BUCKET;
      const key = 'nombre-en-s3/del-archivo.csv';
      await s3Controller.subirArchivo(bucketName, 'ruta/al/archivo.csv', key);

      // Realizar operaciones con AWS Personalize utilizando los datos procesados
      await realizarOperacionesConPersonalize(datosCSV);*/
      console.log("Operaciones completadas con éxito.");
    } catch (error) {
      console.error("Error al manejar la nueva venta:", error);
    }
  },

  async obtenerRecomendacionesParaUsuario(req, res, next) {
    try {
      const userId = req.params.userId;
      const campaignArn =
        "arn:aws:personalize:us-east-1:302241581236:campaign/products_recomenda_campa";
      const recomendaciones = await personalizeRuntime.getRecommendations({ 
        campaignArn,
        userId: userId,
       }).promise();
      res.json({ recomendaciones });
    } catch (error) {
      console.error("Error al procesar la solicitud real:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },

  async descargarYProcesarArchivoCSV(enlaceCSV) {
    try {
      const respuesta = await axios.get(enlaceCSV);
      //const datosCSV = procesarDatosCSV(respuesta.data);
      return respuesta;
    } catch (error) {
      throw new Error("Error al descargar y procesar el archivo CSV");
    }
  },

  procesarDatosCSV(datosCSV) {
    // Implementa la lógica para procesar los datos CSV
    // Puedes usar bibliotecas como 'csv-parse' para analizar el CSV
    const parse = require("csv-parse/lib/sync");
    const registros = parse(datosCSV, { columns: true });

    return registros;
  },

  async realizarOperacionesConPersonalize(datosCSV) {
    // Implementa la lógica para interactuar con AWS Personalize utilizando datosCSV
  },
};

