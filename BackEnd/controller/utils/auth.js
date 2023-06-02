const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./baseDados");

const collectionName = "produtos";

async function findProdutos() {
  const collection = await getMongoCollection(collectionName);
  return collection.find().toArray();
}

async function findProductById(id) {
  const collection = await getMongoCollection(collectionName);
  const result = await collection.findOne({ _id: new ObjectId(id) });
  return result;
}

//FAVORITOS
async function findfavoriteById(id) {
  const collection = await getMongoCollection(collectionName);
  const produtoFavorito = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    [
     {$set: {favorite: {$not: "$favorite"}}}
    ]
     );

  return produtoFavorito;
}


// TODOS OS FAVORITOS
async function findFavoriteAll() {
  const collection = await getMongoCollection(collectionName);
  const produtoFavorito = await collection.find({
    "favorite": true
  }).toArray();

  return produtoFavorito;
}

module.exports = {
  findProdutos,
  findProductById,
  findfavoriteById,
  findFavoriteAll
};
//module.exports = { FavoritePorId };
