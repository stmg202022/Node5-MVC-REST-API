const express = require("express");
const productController = require("../Controller/product");
const router = express.Router();

//===============API -Endpoint  -Route==========
// products
//API ROOT, base URL, google.com/api/v2
//Create POST /products                 C R U D
router
  .post("/users", productController.createProduct)

  //READ GET /products
  .get("/users", productController.getAllProducts)

  .get("/products/:id", productController.getProduct)

  //UPDATE PUT /products/:id
  .put("/products/:id", productController.replaceProduct)

  //UPDATE PATCH /products/:id
  .patch("/products/:id", productController.updateProduct)

  //DELETE /products/:id
  .delete("/products/:id", productController.deleteProduct);

exports.router = router;
