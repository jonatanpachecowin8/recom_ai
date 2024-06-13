const collectionName = 'Interactions'; // Nombre de la colección en Firestore
const fieldsToExport = ['DateFin', 'DateInit', 'Percentil_UpSell', 'ProductId', 'UserId']; // Campos que deseas exportar
const csvFilePath = './InteractionsData.csv'; // Ruta donde se guardará el archivo CSV
const Firebase = require('./services/Firestore');
const controller = new Firebase();

controller.obtenerDatosYExportarCSV(collectionName, fieldsToExport, csvFilePath)
  .then(() => {
    console.log('Proceso completado exitosamente.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error en el proceso:', error);
    process.exit(1);
  });