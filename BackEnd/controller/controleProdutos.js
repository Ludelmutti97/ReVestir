const express = require("express");
const { getProduto, getProdutoById, getProdutoId, getFavorite, getTopRatedProducts, getsearchProducts, getFilterProductsByCategory, getAddProductReview, getCreateCategory} = require("../controller/service/auth");
const { findReview, addReview } = require("../controller/service/auth.js");




const PORT = 3030; //PORT DEIFINIDA COMO 3030
const app = express();

app.use(express.json());

// @desc    Fetch all products
// @route   GET /api/products

app.get("/api/products", async (req, res) => {
  try {
    const product = await getProduto();
    // Check if product exists
    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    
  }
});

// @desc    Fetch single product
// @route   GET /api/products/:id
app.get("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getProdutoId(id);

    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
  }
});




// @desc    Todos os Favorite
// @route   GET /api/all/favorite/

app.get("/api/favorite/", async (req, res) => {
  ; try {
    const product = await getFavorite();
    // Check if product exists
    if (product) {
      return res.json(product);
    } else {
      return res.status(404).json({ message: "not_found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// @desc    Add Favorite Look
// @route   POST /api/favorite/:id

app.post("/api/favorite/:id", async (req, res) => {

  try {
    const id = req.params.id;
    const produtoFavorito = await getProdutoById(
      id
    );
    if (produtoFavorito) {
      return res.json({ message: "Produto adicionado aos favoritos" })
    } else {
      return res.status(404).json({ message: "Product not found" });
    }

  } catch (err) {
    console.log(err);
  }
})
// **** Ver com o Rafael como fazer!!***
// @desc    Add Outfit
// @route   POST /api/user/favorite/look

app.post("/api/user/favorite/look", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// **** Conferir c Rafael***
// @desc    Create new review
// @route   POST /api/products/:id/reviews

app.post("/api/products/:id/reviews", async (req, res) => {
 
    const productId = req.params.id;
    const { name, rating, comment } = req.body;
 try {
  await productService.getAddProductReview(productId, { name, rating, comment });
      return res.status(201).json({ message: "Review added", product: updatedProduct });
    
  }
   catch (err) {
    return res.status(404).json({ message: "Product not found" });
    }

  
});


// **** Conferir c Rafael***
// @desc    Get top rated products
// @route   GET /api/products/top

app.get("/api/products/top", async (req, res) => {

  try {
    const product = await getTopRatedProducts()
    return res.json(product);
  } catch (err) {
    return res.status(404).json({ message: "not-found" });
  }
})

// **** Conferir c Rafael***
// @desc    POST Category
// @route   POST /api/categories

app.post("/api/categories", async (req, res) => {
  const { name, color, gender, material, type, description } = req.body;

  try {
    const category = await getCreateCategory(name, color, gender, material, type, description);
    return res.status(201).json(category);
  } catch (err) {
    console.log(err)
  }
})



// **** Conferir c Rafael***
// @desc    get product through filters category
// @route   GET /api/products/filter

app.get("/api/products/filter-category", async (req, res) => {
    const category = req.params.category;
  try {
    const products = await getFilterProductsByCategory(category);
    return res.json(products)
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" })

  }
})

// **** Conferir c Rafael***
// @desc    search box
// @route   GET /api/products/search
// termo é uma variavel que contem o valor a ser pesquisado.
app.get("/api/products/search", async (req, res) => {
  const termo = req.query.q;
  try {

    const produtos = await getsearchProducts(termo)
    if (produtos.length > 0) {
      return res.status(404).json({ message: "SearchBox not found" });
    }
    
  } catch (err) {
    console.log(err);

  }
})


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
