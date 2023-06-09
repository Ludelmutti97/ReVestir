const { ObjectId } = require("mongodb");
const { getMongoCollection } = require("./baseDados");

const collectionName = "produtos";
const collectionCategory = "categorias";
const collectionUser = "users";
const collectionFavorites = "favorites";
const collectionOutFit = "outfits";

async function createUser(dados) {
  const collection = await getMongoCollection(collectionUser);
  return collection.insertOne(dados);
}

async function findUser() {
  const collection = await getMongoCollection(collectionUser);
  return collection.findOne();
}
//Todos produtos
async function findProdutos() {
  const collection = await getMongoCollection(collectionName);
  return collection.find().toArray();
}

async function insertProdutos(products) {
  const collection = await getMongoCollection(collectionName);
  console.log(products);
  return collection.insertMany(products);
}

// Barra de Pesquisa
async function findSearchBox(termo) {
  const collection = await getMongoCollection(collectionName);

  const products = await collection
    .find({ nome: { $regex: termo, $options: "i" } })
    .toArray();
  return products;
}

// Produtos por id
async function findProductById(id) {
  const collection = await getMongoCollection(collectionName);
  const result = await collection.findOne({ _id: new ObjectId(id) });
  return result;
}

// ADD FAVORITOS
async function findfavoriteById(pid, uid) {
  const collection = await getMongoCollection(collectionFavorites);
  const produtoFavorito = await collection.insertOne({
    pid,
    uid,
  });

  return produtoFavorito;
}

// TODOS OS FAVORITOS
async function findFavoriteAll() {
  const collection = await getMongoCollection(collectionFavorites);
  const produtoFavorito = await collection.find().toArray();

  return produtoFavorito;
}

// OUTFIT -
async function createOutFits(pid, uid) {
  const collection = await getMongoCollection(collectionOutFit);
  const userOutfit = await collection.findOne({ uid: new Object(uid) });
  console.log(3, uid);
  let outFit;
  console.log(pid);
  if (userOutfit) {
    outFit = await collection.updateOne(
      { uid: uid },
      { $push: { produto: new ObjectId(pid) } }
    );
  } else {
    outFit = await collection.insertOne({
      produto: [new ObjectId(pid)],
      uid,
    });
  }
  return outFit;
}

//Delete outfit -

async function removeOutFit(id, uid) {
  const collection = await getMongoCollection(collectionOutFit);
  const deletedOutfit = await collection.updateOne(
    { uid: uid },
    { $pull: { produto: { $in: [new ObjectId(id)] } } }
  );
  return deletedOutfit;
}

//Filtro pela avaliação dos melhores //

async function findTop() {
  const collection = await getMongoCollection(collectionName);
  const products = await collection
    .find()
    .sort({ rating: -1 })
    .limit(3)
    .toArray();
  return products;
}

// Buscar Categoria
async function findCategory(categoria) {
  const collection = await getMongoCollection(collectionName);

  const result = await collection.find({ categoria: categoria }).toArray();

  return result;
}
// Buscar Cor
async function findCor(cor) {
  const collection = await getMongoCollection(collectionName);

  const result = await collection.find({ cor: cor }).toArray();

  return result;
}

// Buscar Sexo
async function findGenero(sexo) {
  const collection = await getMongoCollection(collectionName);

  const result = await collection.find({ sexo: sexo }).toArray();

  return result;
}

// Buscar p/ material
async function findMaterial(material) {
  const collection = await getMongoCollection(collectionName);

  const result = await collection.find({ material: material }).toArray();

  return result;
}

// Buscar p/ Avaliação
async function findRating(rating) {
  const collection = await getMongoCollection(collectionName);

  const result = await collection.find({ rating: rating }).toArray();

  return result;
}

// Filtro todas a categoria sidebar*******

async function findFilter(categoria) {
  const collection = await getMongoCollection(collectionCategory);
  const filteredProducts = await collection
    .find({ category: { $in: categoria } })
    .toArray();

  return filteredProducts;
}

//
// CRIAR AVALIAÇÂO
async function findReview(rating, pid) {
  const collection = await getMongoCollection(collectionName);
  const avaliacao = await collection.updateOne(
    { _id: new ObjectId(pid) },
    { $set: rating }
  );

  return avaliacao.value;
}

module.exports = {
  findProdutos,
  findProductById,
  findfavoriteById,
  findFavoriteAll,
  findReview,
  findRating,
  findFilter,
  findSearchBox,
  findCategory,
  createUser,
  findUser,
  createOutFits,
  removeOutFit,
  findCor,
  findGenero,
  findMaterial,
  insertProdutos,
};
