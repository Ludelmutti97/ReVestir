const { findProdutos } = require("../utils/auth");
const { getProduto } = require("../utils/auth");

async function getProduto() {
  const pedido = await findProdutos();
  return pedido;
}

async function getProdutoId(id) {
    const pedido = await getProduto.findById(id);
    return pedido;
  }

module.exports = { getProduto };
module.exports = {  getProdutoId };
