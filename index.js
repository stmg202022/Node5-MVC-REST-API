const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const app = express();
// const morgan = require("morgan");

//-------------bodyParser-----------Build-in Middleware--------------------------------------(c)
app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static("public"));

//===============API -Endpoint  -Route==========
// products
//API ROOT, base URL, google.com/api/v2

//Create POST /products                 C R U D
app.post("/products", (req, res) => {
  // res.json({ type: "POST" });

  console.log(req.body);

  products.push(req.body);

  res.json(products);
});

//READ GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  console.log(typeof req.params.id); //string form

  const id = +req.params.id;

  console.log(typeof id); //number

  const product = products.find((p) => p.id === id);

  res.json(product);

  // res.json(products);
});

//UPDATE PUT /products/:id
app.put("/products/:id", (req, res) => {
  console.log(typeof req.params.id); //string form

  const id = +req.params.id;

  console.log(typeof id); //number

  const productIndex = products.findIndex((p) => p.id === id);

  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();

  // res.json(products);
});

//UPDATE PATCH /products/:id
app.patch("/products/:id", (req, res) => {
  console.log(typeof req.params.id); //string form

  const id = +req.params.id;

  console.log(typeof id); //number

  const productIndex = products.findIndex((p) => p.id === id);

  const product = products[productIndex]; //old product

  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();

  // res.json(products);
});

//DELETE /products/:id
app.delete("/products/:id", (req, res) => {
  console.log(typeof req.params.id); //string form

  const id = +req.params.id;

  console.log(typeof id); //number

  const productIndex = products.findIndex((p) => p.id === id);

  const product = products[productIndex];

  products.splice(productIndex, 1);

  res.status(201).json(product);

  // res.json(products);
});

app.get("/demo", (req, res) => {
  //   res.sendStatus(404);
  //   res.send("<h1>Hello World</h1>");
  //   res.status(201).send("<h1>Hello World</h1>");
  //   res.json(products);
});

app.listen(8080, () => {
  console.log("server started");
});

//======================================================Previous Chapter=====================================

// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

// // console.log(data);
// // console.log(index);
// // console.log(typeof products);

// const express = require("express");
// const app = express();
// // const morgan = require("morgan");

// //==================MiddleWare=====

// //--------------------------Third party middleware-------------------------------------------(d)

// // app.use(morgan("dev"));
// // app.use(morgan("default"));

// //-------------bodyParser-----------Build-in Middleware--------------------------------------(c)
// // app.use(express.json());
// // app.use(express.urlencoded());
// // app.use(express.static("public"));

// // ---------It used for all method(GET, PUT, POST...)------------------------------------------(a)//application level

// //Middleware used for whole application
// // app.use((req, res) => {
// //   console.log(
// //     req.method,
// //     req.ip,
// //     req.hostname,
// //     new Date(),
// //     req.get("User-Agent")
// //   );

// //   req.next();
// // });

// //----------------just functionally created middleware-------()
// const auth = (req, res, next) => {
//   //----------------query ---------------------(1)
//   // console.log(req.query); // req.query check the path // output: {} //as it is empty
//   // send http://localhost:8080/?password and reload // output: { password: ""}
//   // send http://localhost:8080/?password=123 and reload // output: { password: "123"} // 123
//   // console.log(req.query.password);

//   //if http://localhost:8080/?password=123 then next() // do not put any password for auth and use ==
//   // if (req.query.password === "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }

//   next();

//   //-------------body-------------(2)
//   // if (req.body.password === "123") {
//   //   next();
//   // } else {
//   //   res.sendStatus(401);
//   // }
// };

// // app.use(auth);

// //===============API -Endpoint  -Route==========
// //-----------using auth for GET method------------------------------------------------(b) ---//Route level
// app.get("/product/:id", auth, (req, res) => {
//   //----------"/product/:id" <= URLparameters---------(3)
//   console.log(req.params);
//   res.json({ type: "GET" });
// });

// //using auth for POST methdod
// app.post("/", auth, (req, res) => {
//   res.json({ type: "POST" });
// });

// app.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });

// app.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });

// app.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });

// app.get("/demo", (req, res) => {
//   //   res.sendStatus(404);
//   //   res.send("<h1>Hello World</h1>");
//   //   res.status(201).send("<h1>Hello World</h1>");
//   //   res.json(products);
// });

// app.listen(8080, () => {
//   console.log("server started");
// });
