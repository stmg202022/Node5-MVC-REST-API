const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data.json", "utf-8"));
const users = data.users;

// console.log(users);

//post
exports.createUser = (req, res) => {
  // res.json({ type: "POST" });
  console.log(req.body);
  users.push(req.body);
  res.json(users);
};

//get
exports.getAllUsers = (req, res) => {
  res.json(users);
};

//get
exports.getUser = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const user = users.find((u) => u.id === id);
  res.json(user);
  // res.json(products);
};

// put
exports.replaceUser = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const userIndex = users.findIndex((u) => u.id === id);
  users.splice(userIndex, 1, { ...req.body, id: id });
  res.status(201).json();

  // res.json(products);
};

//patch
exports.updateUser = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const userIndex = users.findIndex((u) => u.id === id);
  const user = users[userIndex]; //old product
  users.splice(userIndex, 1, { ...user, ...req.body });
  res.status(201).json();
  // res.json(products);
};

//delete
exports.deleteUser = (req, res) => {
  console.log(typeof req.params.id); //string form
  const id = +req.params.id;
  console.log(typeof id); //number
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.status(201).json(user);
  // res.json(products);
};

// above CRUD are imported in Routes/products
