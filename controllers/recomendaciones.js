const KNN = require('ml-knn');
const { users, products } = require('../models/data');

function getRatingsMatrix(users) {
  const allProductIds = [...new Set(users.flatMap(user => Object.keys(user.ratings)))];
  return users.map(user => allProductIds.map(id => user.ratings[id] || 0));
}

function recommendProducts(userId, k = 2) {
  const user = users.find(u => u.id === userId);
  if (!user) throw new Error("User not found");

  const userRatingsMatrix = getRatingsMatrix(users);
  const labels = users.map((_, idx) => idx);

  const knn = new KNN(userRatingsMatrix, labels);

  const userRatings = getRatingsMatrix([user])[0];

  // Obtener los índices de los k vecinos más cercanos
  const neighbors = knn.kneighbors(userRatings, {k}).map(neighbor => neighbor.index);

  const recommended = {};
  neighbors.forEach(neighborIndex => {
    const neighborRatings = users[neighborIndex].ratings;
    for (const [productId, rating] of Object.entries(neighborRatings)) {
      if (!user.ratings[productId]) {
        if (!recommended[productId]) {
          recommended[productId] = { totalRating: 0, count: 0 };
        }
        recommended[productId].totalRating += rating;
        recommended[productId].count += 1;
      }
    }
  });

  return Object.entries(recommended)
    .map(([productId, { totalRating, count }]) => ({
      product: products.find(p => p.id === parseInt(productId)),
      averageRating: totalRating / count
    }))
    .sort((a, b) => b.averageRating - a.averageRating)
    .map(({ product }) => product);
}

module.exports = { recommendProducts };

