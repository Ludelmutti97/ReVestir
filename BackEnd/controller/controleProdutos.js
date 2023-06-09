const express = require("express");
const { ObjectId } = require("mongodb");
const {
  getProduto,
  getProdutoById,
  getProdutoId,
  getFavorite,
  getsearchProducts,
  getFilterProductsByCategory,
  getCategory,
  addOutFit,
  //getUser,
  getColor,
  getGenders,
  getMaterial,
  getRating,
  addProductReview,
  createProduto,
} = require("../controller/service/auth");

const { removeOutFit } = require("./utils/auth");

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

//Post Todos produtos
app.post("/api/products", async (req, res) => {
  try {
    const products = req.body;
    await createProduto(products);
    console.log("OLA");
    // Check if product exists
    if (products) {
      return res.json(products);
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// @desc    Search box
// @route   GET /api/products/search
// termo é uma variavel que contem o valor a ser pesquisado.
app.get("/api/products/search", async (req, res) => {
  console.log("/api/products/search");
  const termo = req.query.q;
  try {
    const produtos = await getsearchProducts(termo);
    if (produtos.length > 0) {
      return res.status(200).json({ produtos });
    }
    return res.status(404).json({ message: "SearchBox not found" });
  } catch (err) {
    console.log(err);
  }
});

// **********Fazer por ultimo ****
// @desc    Fetch todos os produtos
// @route   GET /api/products/:id
app.get("/api/products/:id", async (req, res) => {
  try {
    //req.body.color
    //req.body.category
    //req.body.gender
    //req.body.materail
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


// @desc    get  Categoria tipo ( ex:sapato)
// @route   get api/products/category/:categoria

app.get("/api/products/category/:categoria", async (req, res) => {
  console.log("/api/products/category/:categoria");
  try {
    const category = await getCategory(req.params.categoria);

    return res.status(201).json({ category });
  } catch (err) {
    console.log(err);
  }
});

// @desc    get  Categoria tipo ( ex:cor)
// @route   get api/products/color/:cor
app.get("/api/products/color/:cor", async (req, res) => {
  console.log("/api/products/color/:cor");
  try {
    const color = await getColor(req.params.cor);

    return res.status(201).json({ color });
  } catch (err) {
    console.log(err);
  }
});

// @desc    get  Categoria tipo ( ex:sexo)
// @route   get api/products/genders/:sexo
app.get("/api/products/genders/:sexo", async (req, res) => {
  try {
    const color = await getGenders(req.params.sexo);

    return res.status(201).json({ color });
  } catch (err) {
    console.log(err);
  }
});

// @desc    get  Categoria tipo ( ex:material)
// @route   get api/products/material/:material
app.get("/api/products/material/:material", async (req, res) => {
  try {
    const material = await getMaterial(req.params.material);

    return res.status(201).json({ material });
  } catch (err) {
    console.log(err);
  }
});

// @desc    Get top rated products
// @route   GET /api/products/rating/:rating

app.get("/api/products/rating/:rating", async (req, res) => {
  try {
    const rating = await getRating(req.params.rating);
    return res.status(201).json({ rating });
  } catch (err) {
    console.log(err);
  }
});

// @desc    All  Favorite
// @route   GET /api/all/favorite/

app.get("/api/favorite", async (req, res) => {
  try {
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
    const user = {
      _id: "647dc17bdf3d14c93394afb2",
      name: "Ludmila",
      email: "ludmila@gmail.com",
      password: "password",
    };

    const id = req.params.id;
    const produtoFavorito = await getProdutoById(id, user._id);
    if (produtoFavorito) {
      return res.json({ message: "Produto adicionado aos favoritos" });
    } else {
      return res.status(404).json({ message: "Product not add" });
    }
  } catch (err) {
    console.log(err);
  }
});

// @desc    Add Outfit
// @route   POST /api/:id

app.post("/api/outfit/:id", async (req, res) => {
  try {
    // const user = await getUser();
    const user = {
      _id: "647dc17bdf3d14c93394afb2",
      name: "Ludmila",
      email: "ludmila@gmail.com",
      password: "password",
    };
    const id = req.params;
    console.log(1, id);
    const produtoOutfit = await addOutFit(id, user._id);
    if (produtoOutfit) {
      return res.json({ message: "Produto no outfit" });
    } else {
      return res.status(404).json({ message: "Erro" });
    }
  } catch (err) {
    console.log(err);
  }
});

// @desc Remove Outfit
// @route DELETE /api/:id

app.delete("/api/outfit/:id", async (req, res) => {
  try {
    const user = {
      _id: "647dc17bdf3d14c93394afb2",
      name: "Ludmila",
      email: "ludmila@gmail.com",
      password: "password",
    };
    const id = req.params.id;
    const deletedOutfit = await removeOutFit(id, user._id);
    if (deletedOutfit) {
      return res.json({ message: "Produto removido do outfit" });
    } else {
      return res.status(404).json({ message: "Erro" });
    }
  } catch (err) {
    console.error(err);
  }
});

// @desc    Create new review
// @route   POST /api/forum/:id/rating

app.post("/api/products/:id/rating", async (req, res) => {
  try {
    const updatedProduct = await addProductReview(req.body, req.params.id);

    const rating = req.body;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating invalido" });
    }

    return res
      .status(200)
      .json({ message: "Rating added", product: updatedProduct });
  } catch (err) {
    console.log(err);
  }
});

// @desc    get product through filters category
// @route   GET /api/products/filter

app.get("/api/products/filter", async (req, res) => {
  try {
    const { category } = req.query;
    if (category) {
      return res.status(201).json({ message: "Filtro funcionado" });
    }
    const categoryArray = category.split(",");
    const products = await getFilterProductsByCategory(categoryArray);
    return res.json(products);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
