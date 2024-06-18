const admin = require('firebase-admin');
const fs = require('fs');
const { parse } = require('json2csv');

const serviceAccount = require('../config/google-services.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/project/guitarstore-8df9d/firestore/databases/-default-/data/~2F?hl=es-419',
});

class FirebaseServices {
  constructor() {
    this.db = admin.firestore();
  }

  async obtenerDatosYExportarCSV(collectionName, fieldsToExport, csvFilePath) {
    try {
      const snapshot = await this.db.collection(collectionName).get();

      if (snapshot.empty) {
        console.log('No hay documentos en la colección.');
        return;
      }

      const data = snapshot.docs.map(doc => doc.data());
      const csv = parse(data, { fields: fieldsToExport });

      fs.writeFileSync(csvFilePath, csv, 'utf-8');
      console.log(`Datos exportados a CSV exitosamente en: ${csvFilePath}`);
    } catch (error) {
      console.error('Error al exportar datos a CSV:', error);
      throw error;
    }
  }
}

module.exports = FirebaseServices;
