const { findProdutos, findfavoriteById, findFavoriteAll } = require("../utils/auth");
const { findProductById } = require("../utils/auth");

async function getProduto() {
  const pedido = await findProdutos();
  return pedido;
}

async function getProdutoId(id) {
  const pedido = await findProductById(id);
  return pedido;
}
async function getProdutoById(id) {
  const pedido = await findfavoriteById(id);
  return pedido;
}
async function getFavorite() {
  const pedido = await findFavoriteAll();
  return pedido;
}



module.exports = { getProduto, getProdutoId , getProdutoById,  getFavorite};
