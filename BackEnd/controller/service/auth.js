const { findProdutos, findfavoriteById, findFavoriteAll,findTop,findFilter, findSearchBox , findCategory } = require("../utils/auth");
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

// Add Outfit FAZER----------------------------------------------

async function ghghg() {
  const pedido = await ghgh();
  return pedido;

}

//----------------------------------------------------------------



// ver com o RAFA----------------------------------------------
async function getAddProductReview(productId, review) {
  
    const product = await findReview(productId);

    if (product) {
      product.reviews.push(review);
      product.numReviews = product.reviews.length;

      await collectionName.updateOne(
        { _id: ObjectId(productId) },
        { $set: product }
      )

      return 
    }
  
}
//-----------------------------------------------------------



async function getTopRatedProducts() {
  const pedido = await findTop();
  return pedido;

}

async function getCreateCategory() {
  const pedido = await findCategory();
  return pedido;

}

async function getFilterProductsByCategory() {
  const pedido = await findFilter();
  return pedido;

}

async function getsearchProducts() {
  const pedido = await findSearchBox();
  return pedido;

}




module.exports = { getProduto, getProdutoId , getProdutoById,  getFavorite, getAddProductReview,getTopRatedProducts, 
  getCreateCategory, getFilterProductsByCategory, getsearchProducts};
