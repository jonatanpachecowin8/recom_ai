const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');

let knn;
const csvFilePath = './files/interactionData.csv'; 
const headers = ['DateInit', 'DateFin', 'Percentil_UpSell', 'ProductId', 'UserId']; 

let data = [], X = [], y = [];

let trainingSetX = [], trainingSetY = [], testSetX = [], testSetY = [];

csv({ headers, ignoreEmpty: true })
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        data.push(jsonObj); // Agregar cada objeto al arreglo de datos
    })
    .on('done', (error) => {
        dressData();
    });



// entrenamiento
function dressData() {
    let userIds = new Set();
    data.forEach((row) => {
        userIds.add(row.UserId);
    });
    let userIdArray = [...userIds];

    data.forEach((row) => {
        let rowArray, userIdIndex;

        rowArray = Object.keys(row).map(key => {
            if (key === 'DateInit' || key === 'DateFin') {
                return new Date(row[key]).getTime();
            } else if (key === 'Percentil_UpSell') {
                return parseFloat(row[key]);
            } else if (key === 'ProductId' || key === 'UserId') {
                return row[key];
            }
        });

        userIdIndex = userIdArray.indexOf(row.UserId); // Convertir UserId a índice numérico

        X.push(rowArray);
        y.push(userIdIndex);
    });

    // Separar datos de entrenamiento
    let separationSize = 0.7 * data.length;
    X = shuffleArray(X);
    trainingSetX = X.slice(0, separationSize);
    trainingSetY = y.slice(0, separationSize);
    testSetX = X.slice(separationSize);
    testSetY = y.slice(separationSize);

    train();
}

function train() {
    knn = new KNN(trainingSetX, trainingSetY, { k: 7 }); 
    test();
}

function test() {
    const result = knn.predict(testSetX); 
    const testSetLength = testSetX.length;
    const predictionError = error(result, testSetY);
    console.log(`Tamaño del conjunto de pruebas = ${testSetLength} y número de clasificaciones erróneas = ${predictionError}`);
    predict();
}


function createCSVFile() {
    try {
        let recommendations = [];

        for (let i = 0; i < 5; i++) { // Generar 5 recomendaciones simuladas
            let temp = [];
            let recommendation = {
                DateInit: new Date().toISOString(),
                DateFin: new Date().toISOString(),
                Percentil_UpSell: (Math.random() * 1).toFixed(2),
                ProductId: uuidv4(), 
                UserId: '12596', 
            };
            recommendations.push(recommendation);
        }

        const csv = json2csv(recommendations, { header: true });

        fs.writeFileSync('recommendations.csv', csv); 

        console.log('Archivo CSV generado exitosamente.');
    } catch (error) {
        console.error('Error al generar el archivo CSV:', error);
    }
}

// Función para calcular el error de clasificación
function error(predicted, expected) {
    let misclassifications = 0;
    for (let index = 0; index < predicted.length; index++) {
        if (predicted[index] !== expected[index]) {
            misclassifications++;
        }
    }
    return misclassifications;
}

// Función para mezclar aleatoriamente los elementos de un arreglo
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

readCSV();