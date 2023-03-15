const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
const products = data.products;

//post
exports.createProduct = (req, res) => {
  // res.json({ type: "POST" });
  console.log(req.body);
  products.push(req.body);
  res.json(products);
};

//get
exports.getAllProducts = (req, res) => {
  res.json(products);
};

//get
exports.getProduct = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const product = products.find((p) => p.id === id);
  res.json(product);
  // res.json(products);
};

// put
exports.replaceProduct = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();

  // res.json(products);
};

//patch
exports.updateProduct = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex]; //old product
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
  // res.json(products);
};

//delete
exports.deleteProduct = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
  // res.json(products);
};

// above CRUD are imported in Routes/products
