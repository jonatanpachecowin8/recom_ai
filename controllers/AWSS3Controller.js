// AWSS3Controller.js

const AWS = require('aws-sdk');
const fs = require('fs/promises');

class AWSS3Controller {
  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    this.s3 = new AWS.S3();
  }

  async subirArchivo(bucketName, filePath, key) {
    try {
      const fileContent = await fs.readFile(filePath);

      const params = {
        Bucket: bucketName,
        Key: key,
        Body: fileContent,
      };

      const { Location } = await this.s3.upload(params).promise();

      console.log(`Archivo subido con éxito. URL: ${Location}`);
      return Location;
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      throw error;
    }
  }

  async generarEnlaceDescarga(bucketName, key) {
    try {
      const params = {
        Bucket: bucketName,
        Key: key,
        Expires: 60,
      };

      const enlaceDescarga = await this.s3.getSignedUrlPromise('getObject', params);

      console.log(`Enlace de descarga generado con éxito: ${enlaceDescarga}`);
      return enlaceDescarga;
    } catch (error) {
      console.error('Error al generar el enlace de descarga:', error);
      throw error;
    }
  }
}

module.exports = AWSS3Controller;
