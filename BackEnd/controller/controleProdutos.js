const express = require("express");
const { getProduto, getProdutoById, getFavorite } = require("../controller/service/auth");
const { getProdutoId } = require("../controller/service/auth.js");


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
      return res.status(404).json({ message: "not_found" });
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
      return res.status(404).json({ message: "not_found" });
    }
  } catch (error) {
    console.error(error);
  }
});

// @desc    Add Favorite Look
// @route   POST /api/favorite/:id

app.post("/api/favorite/:id", async (req, res) => {

    const id = req.params.id;
    try {
      const produtoFavorito = await getProdutoById(
        id 
      );
      if (produtoFavorito) {
       return res.json({ message: "Produto adicionado aos favoritos" })
      } else {
        return res.status(404).json({ message: "not_found" });
      }
     
    } catch (err) {
      console.log(err);
    }
  })


  // @desc    Todos os Favorite
// @route   GET /api/all/favorite/

app.get("/api/favorite/", async (req, res) => {
;  try {
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


// @desc    Create new review
// @route   POST /api/products/:id/reviews
// FAZEER  AQUI
app.post("/api/products/:id/reviews", async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const productId = req.params.id;
    const userId = req.user._id;

    const product = await getProdutoById(productId);
    if (product) {
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: userId,
      };

      const updatedProduct = await addProductReview(productId, review);

      return res.status(201).json({ message: "Review added", product: updatedProduct });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.log(err);
    
  }
});
// @desc    Get top rated products
// @route   GET /api/products/rating/top

app.get("/api/products/rating/top", async (req, res) => {
  // Find products and sort by rating in ascending order
  try {
    const products = await produtos.find({}).sort({ rating: -1 }).limit(3);

    return res.json(products);
  } catch (err) {
    console.log(err);
  }
});

// @desc    Add Outfit
// @route   POST /api/user/favorite/look

app.post("/api/user/favorite/look", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});



// @desc    get product through filters
// @route   GET /api/products/filters

app.get("/api/products/filters", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// @desc    search box
// @route   GET /api/products/palavra

app.get("/api/products/palavra", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// @desc    User
// @route   post /api/auth/login
app.post("/api/auth/login", async (req, res) => {
  try {
    const user = await getUserByEmail(req.body.email ?? "");
    const isCorrect = await checkUserPassword(
      req.body.email ?? "",
      req.body.password ?? ""
    );
    if (isCorrect) {
      //create session
      const token = await addAuthSession(user._id);
      return res.status(200).json({ token });
    }

    return res.sendStatus(403);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
