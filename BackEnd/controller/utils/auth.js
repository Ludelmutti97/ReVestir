const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./baseDados");

const collectionName = "produtos";
const collectionCategory= "categorias"


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
      { $set: { favorite: { $not: "$favorite" } } }
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

// OUTFIT - Ver com o Rafa como faz, tentar entender--------------------------






// -ESCREVER AQUI !!!!!---------------------------------------------




//                    ***Ver com o RAFA****
// CRIAR AVALIAÇÂO 
async function findReview(productId) {

  const collection = await getMongoCollection(collectionName);
  const avaliacao = await collection.findOne({ _id: ObjectId(productId) })

  return avaliacao;
  
}


  //Filtro pela avaliação dos melhores

  async function findTop() {

    const collection = await getMongoCollection(collectionName);
    const products = await collection.find({}).sort({ rating: -1 }).limit(3).toArray();
    return products;

  }
  //Categorias
  async function findCategory(name, color, gender, material, type, description) {
    
    const collection = await getMongoCollection(collectionCategory);
    const category = {
      name,
      color,
      gender,
      material,
      type,
      description,
    };
    const result = await collection.insertOne(category); 
    return result.ops[0];  //Executa a inserção de um documento na coleção e retorna o documento inserido como resultado da operação.
  
  }
  // Filtro todas as categorias

  async function findFilter(category) {
    const collection = await getMongoCollection(collectionCategory);
    const filteredProducts = await collection.find({ category }).toArray();


    return filteredProducts;
  }

  // Barra de Pesquisa
  async function findSearchBox(termo) {

    const collection = await getMongoCollection(collectionName);

    const products = await collection.find({ nome: { $regex: termo, $options: "i" } }).toArray();
    return products;
  }

  module.exports = {
    findProdutos,
    findProductById,
    findfavoriteById,
    findFavoriteAll,
    findReview,
    findTop,
    findFilter,
    findSearchBox,
    findCategory
  }
