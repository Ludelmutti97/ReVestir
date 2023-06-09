const {
  findProdutos,
  findfavoriteById,
  findFavoriteAll,
  findRating,
  findFilter,
  findSearchBox,
  findCategory,
  findReview,
  createUser,
  findGenero,
  findUser,
  createOutFits,
  removeOutFit,
  findCor,
  findMaterial,
  insertProdutos,
  

} = require("../utils/auth");
const { findProductById } = require("../utils/auth");

async function addUser(user) {
  const pedido = await createUser(user);
  return pedido;
}
async function getUser() {
  const pedido = await findUser();
  return pedido;
}

// Todos--

async function getProduto() {
  const pedido = await findProdutos();
  return pedido;
}


async function createProduto(products) {
  const pedido = await insertProdutos(products);
  return pedido;
}

//  Barra de pesquisa-
async function getsearchProducts(termo) {
  const pedido = await findSearchBox(termo);
  return pedido;
}

// Procurar pelo  product id
async function getProdutoId(id) {
  const pedido = await findProductById(id);
  return pedido;
}

// ADD aos favoritos--
async function getProdutoById(id, uid) {
  const pedido = await findfavoriteById(id, uid);
  return pedido;
}

// ALL Favoritos--
async function getFavorite() {
  const pedido = await findFavoriteAll();
  return pedido;
}

// Add Outfit --

async function addOutFit(id, uid) {
  console.log(2, id)
  const pedido = await createOutFits(id, uid);
  return pedido;
}

// Delete Outfit
async function deleteOutFit(id, uid) {
  const pedido = await removeOutFit(id, uid);
  return pedido;
}


//Filter Por Categoria
async function getCategory(category) {
  const pedido = await findCategory(category);
  return pedido;
}
// Filter Por Cor
async function getColor(cor) {
  const pedido = await findCor(cor);
  return pedido;
}


// Filter Por sexo

async function getGenders(cor) {
  const pedido = await findGenero(cor);
  return pedido;
}


// Filter Por material

async function getMaterial(cor) {
  const pedido = await findMaterial(cor);
  return pedido;
}

// Filter Por rating(avaliação)

async function getRating(rating) {
  const pedido = await findRating(rating);
  return pedido;
}
// Filter Categoria (sideBar) JUNTAR TODAS AS CATEGORIA***

async function getFilterProductsByCategory() {
  const pedido = await findFilter();
  return pedido;
}

//ADD Review
async function addProductReview(rating, pid) {
  const pedido = await findReview(rating, pid);
  return pedido;
}


module.exports = {
  getProduto,
  getProdutoId,
  getProdutoById,
  getFavorite,
  addProductReview,
  getRating,
  getCategory,
  getFilterProductsByCategory,
  getsearchProducts,
  addUser,
  getUser,
  addOutFit,
  deleteOutFit,
  getColor,
  getGenders,
  getMaterial,
  createProduto

};
