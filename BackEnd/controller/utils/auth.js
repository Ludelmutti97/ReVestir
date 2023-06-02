const { objectId } = require("mongodb");
const { getMongoCollection } = require("./baseDados");
const { getMongoCollectionID } = require("./baseDados");

const collectionName = "produtos";

async function findProdutos() {
  const collection = await getMongoCollection(collectionName);
  return collection.find().toArray();
}

async function getProdutoId( ) {
    const collection = await getMongoCollectionID(collectionName);
    return collection.find().toArray();
  }
  


  

module.exports = { findProdutos };
module.exports = { findProdutosID };
